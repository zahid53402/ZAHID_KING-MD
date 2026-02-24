require('./settings')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const axios = require('axios')
const { handleMessages, handleGroupParticipantUpdate, handleStatus } = require('./main');
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetch, sleep, reSize } = require('./lib/myfunc')
const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    jidDecode,
    jidNormalizedUser,
    makeCacheableSignalKeyStore,
    delay
} = require("@whiskeysockets/baileys")
const NodeCache = require("node-cache")
const pino = require("pino")
const readline = require("readline")
const { rmSync, existsSync } = require('fs')

// Store setup
const store = require('./lib/lightweight_store')
store.readFromFile()
const settings = require('./settings')
setInterval(() => store.writeToFile(), settings.storeWriteInterval || 10000)

// Memory monitoring
setInterval(() => {
    const used = process.memoryUsage().rss / 1024 / 1024
    if (used > 450) {
        console.log('⚠️ RAM too high, restarting...')
        process.exit(1)
    }
}, 30_000)

let owner = JSON.parse(fs.readFileSync('./data/owner.json'))
global.botname = "𝚉𝙰𝙷𝙸𝙳 𝙺𝙸𝙽𝙶"
global.themeemoji = "•"

async function startXeonBotInc() {
    try {
        const sessionDir = './session';
        if (!fs.existsSync(sessionDir)) fs.mkdirSync(sessionDir);

        // --- 🔑 RAILWAY SESSION ID LOGIC ---
        if (process.env.SESSION_ID && !fs.existsSync(`${sessionDir}/creds.json`)) {
            console.log(chalk.blue('⚙️ Converting Session ID to creds.json...'));
            try {
                // تمام قسم کے پریفکس (Prefix) کو ہٹانے کے لیے
                let sessionData = process.env.SESSION_ID;
                if (sessionData.includes('ZAHID_KING_MD_')) sessionData = sessionData.split('ZAHID_KING_MD_')[1];
                else if (sessionData.includes('Session~')) sessionData = sessionData.split('Session~')[1];

                fs.writeFileSync(`${sessionDir}/creds.json`, Buffer.from(sessionData, 'base64').toString());
                console.log(chalk.green('✅ Session File Created!'));
            } catch (err) {
                console.log(chalk.red('❌ Invalid Session ID format in Variables!'));
            }
        }

        let { version } = await fetchLatestBaileysVersion()
        const { state, saveCreds } = await useMultiFileAuthState(sessionDir)
        const msgRetryCounterCache = new NodeCache()

        const XeonBotInc = makeWASocket({
            version,
            logger: pino({ level: 'silent' }),
            // اگر سیشن ہے تو کیو آر نہیں دکھائے گا
            printQRInTerminal: process.env.SESSION_ID ? false : true,
            browser: ["Ubuntu", "Chrome", "20.0.04"],
            auth: {
                creds: state.creds,
                keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
            },
            markOnlineOnConnect: true,
            getMessage: async (key) => {
                let jid = jidNormalizedUser(key.remoteJid)
                let msg = await store.loadMessage(jid, key.id)
                return msg?.message || ""
            },
            msgRetryCounterCache,
        })

        XeonBotInc.ev.on('creds.update', saveCreds)
        store.bind(XeonBotInc.ev)

        // Connection monitoring
        XeonBotInc.ev.on('connection.update', async (s) => {
            const { connection, lastDisconnect } = s
            if (connection === 'connecting') console.log(chalk.yellow('🔄 Connecting...'));
            
            if (connection == "open") {
                console.log(chalk.green(`\n🌿 Connected Successfully!\n🤖 Bot: ${XeonBotInc.user.name}`));
                const botNumber = XeonBotInc.user.id.split(':')[0] + '@s.whatsapp.net';
                await XeonBotInc.sendMessage(botNumber, { text: `✅ *Zahid King MD* is now Online!\n\nPrefix: ${settings.prefix || '.'}` });
            }
            
            if (connection === 'close') {
                const shouldReconnect = (lastDisconnect?.error)?.output?.statusCode !== DisconnectReason.loggedOut
                console.log(chalk.red(`❌ Connection closed. Reconnecting: ${shouldReconnect}`));
                if (shouldReconnect) startXeonBotInc();
            }
        })

        // Message Handling
        XeonBotInc.ev.on('messages.upsert', async chatUpdate => {
            try {
                const mek = chatUpdate.messages[0]
                if (!mek.message) return
                if (mek.key && mek.key.remoteJid === 'status@broadcast') {
                    await handleStatus(XeonBotInc, chatUpdate);
                    return;
                }
                await handleMessages(XeonBotInc, chatUpdate, true)
            } catch (err) {
                console.error("Error:", err)
            }
        })

        XeonBotInc.decodeJid = (jid) => {
            if (!jid) return jid
            if (/:\d+@/gi.test(jid)) {
                let decode = jidDecode(jid) || {}
                return decode.user && decode.server && decode.user + '@' + decode.server || jid
            } else return jid
        }

        XeonBotInc.serializeM = (m) => smsg(XeonBotInc, m, store)
        XeonBotInc.public = true

        return XeonBotInc
    } catch (error) {
        console.error('Fatal Error:', error)
        setTimeout(startXeonBotInc, 5000)
    }
}

startXeonBotInc();
