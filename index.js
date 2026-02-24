// Optimized for Railway by Gemini
const _0x5c95da=_0x3735;(function(_0x280843,_0x561eeb){const _0x22512a=_0x3735,_0xaf6f96=_0x280843();while(!![]){try{const _0x52c214=parseInt(_0x22512a(0x242))/0x1*(parseInt(_0x22512a(0x167))/0x2)+-parseInt(_0x22512a(0x1e4))/0x3*(-parseInt(_0x22512a(0x1c8))/0x4)+-parseInt(_0x22512a(0x1d2))/0x5*(-parseInt(_0x22512a(0x220))/0x6)+parseInt(_0x22512a(0x22d))/0x7+-parseInt(_0x22512a(0x24a))/0x8+parseInt(_0x22512a(0x1c5))/0x9+-parseInt(_0x22512a(0x1bf))/0xa;if(_0x52c214===_0x561eeb)break;else _0xaf6f96['push'](_0xaf6f96['shift']());}catch(_0x5a6201){_0xaf6f96['push'](_0xaf6f96['shift']());}}}(_0x1512,0xe9ab6));const {default:makeWASocket,useMultiFileAuthState,DisconnectReason,jidNormalizedUser,isJidBroadcast,getContentType,proto,generateWAMessageContent,generateWAMessage,AnyMessageContent,prepareWAMessageMedia,areJidsSameUser,downloadContentFromMessage,MessageRetryMap,generateForwardMessageContent,generateWAMessageFromContent,generateMessageID,makeInMemoryStore,jidDecode,fetchLatestBaileysVersion,Browsers}=require(_0x5c95da(0x1b4)),l=console[_0x5c95da(0x202)],{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson}=require(_0x5c95da(0x1b8)),{AntiDelDB,initializeAntiDeleteSettings,setAnti,getAnti,getAllAntiDeleteSettings,saveContact,loadMessage,getName,getChatSummary,saveGroupMetadata,getGroupMetadata,saveMessageCount,getInactiveGroupMembers,getGroupMembersMessageCount,saveMessage}=require('./data'),fs=require('fs'),ff=require('fluent-ffmpeg'),P=require('pino'),config=require('./config'),GroupEvents=require(_0x5c95da(0x24d)),qrcode=require('qrcode-terminal'),StickersTypes=require('wa-sticker-formatter'),util=require(_0x5c95da(0x17f)),{sms,downloadMediaMessage,AntiDelete}=require(_0x5c95da(0x1f0)),FileType=require('file-type'),axios=require(_0x5c95da(0x1ff)),{File}=require(_0x5c95da(0x1ad)),{fromBuffer}=require('file-type'),bodyparser=require(_0x5c95da(0x1a8)),os=require('os'),Crypto=require(_0x5c95da(0x20c)),path=require('path');

// Railway Session Handler
const sessionPath = path.join(__dirname, 'sessions');
if (!fs.existsSync(sessionPath)) fs.mkdirSync(sessionPath);

if (process.env.SESSION_ID && !fs.existsSync(path.join(sessionPath, 'creds.json'))) {
    try {
        let sessData = process.env.SESSION_ID;
        // Prefix removal
        if (sessData.includes('ARSLAN-MD~')) sessData = sessData.split('ARSLAN-MD~')[1];
        else if (sessData.includes('ZAHID_KING_MD_')) sessData = sessData.split('ZAHID_KING_MD_')[1];
        
        fs.writeFileSync(path.join(sessionPath, 'creds.json'), Buffer.from(sessData, 'base64').toString());
        console.log("✅ Session converted successfully!");
    } catch (e) {
        console.log("❌ Session ID error: " + e.message);
    }
}

// REST OF THE CODE CONTINUES...
function _0x1512(){const _0x4c8dc6=['./lib/groupevents','viewOnceMessage','\x0aitem1.TEL;waid=','international','query','env','👰‍♀','user','Provide\x20me\x20with\x20a\x20query\x20to\x20run\x20Master!','body','1024986DUhtIG','key','video','includes','creds.update','mtype','contextInfo','messages.update','promises','stickerMessage','sendFile','ignore','Message','utf-8','viewOnce','shift','from','./exif.js','\x20as\x20read.','floor','readdir','object','forEach','message','util','location','getName','messages','SESSION_ID',';;;;\x0aitem4.X-ABLabel:Region\x0aEND:VCARD','❤‍🔥','reactionMessage','PORT','messages.upsert','send5ButImg','Connecting\x20to\x20WhatsApp\x20⏳️...','find','downloadMediaMessage','🎙️','downloadAndSaveMediaMessage','🙆‍♀️','application/octet-stream','🌨️','catch','split','readMessages','send','923237045919','loggedOut','conversation','string','/ARSLAN-MD\x0aitem3.X-ABLabel:GitHub\x0aitem4.ADR:;;','extname','get','application/pdf','./exif','subject','asDocument','commands','audio','slice','parse','viewOnceMessageV2','image','silent','body-parser','categories','set','@g.us','MODE','megajs','./command','sendMedia','email','👩‍🦰','isBuffer','output','@whiskeysockets/baileys','text','name','👩‍🏫','./lib/functions','@broadcast','ext','alloc','matchAll','video/mp4','Marked\x20message\x20from\x20','24259110gWMMVh','New\x20Message\x20Detected:','\x20Contact','true','toLowerCase','sender','4262121gcGucy','🥲,😂,👍🏻,🙂,😔','copyNForward','4znhjqo','BOT\x20MD\x20STARTED\x20✅','toString','asSticker','react','*Hello\x20there\x20Whatsapp\x20User!\x20👋🏻*\x20\x0a\x0a>\x20Simple\x20,\x20Straight\x20Forward\x20But\x20Loaded\x20With\x20Features\x20🎊,\x20Meet\x20This\x20WhatsApp\x20Bot.\x0a\x0a\x20*Thanks\x20for\x20using\x20My\x20Whatsapp\x20Bot\x20🚩*\x20\x0a\x0a>\x20©\x20Your\x20Whatsapp\x20Bot\x20Alive\x20🎉\x20🖤','tmpdir','@s.whatsapp.net','\x0a}\x0aa()','sendButtonText','6638570sxtohC','endsWith','READ_MESSAGE','const\x20a\x20=\x20async()=>{\x0a','gif','caption','base64','serializeM','ephemeralMessage','parseMention','923237045919','concat','author','🇵🇰','trim','Session\x20loaded\x20✅','unlink','sendImage','5342415iTmupb','json','sticker','random','🏵️','withoutContact','length','🍄‍🟫','fromBuffer','startsWith','status@broadcast','cMod','./lib','writeFile','document','packname','./plugins/','stringify','join','🧟‍♀️','function','🦹🏻‍♀️','getFile','imageMessage','participant','AUTO_STATUS_MSG','update','axios','readViewOnce','quotedMessage','log','test','photo','sendTextWithMentions','Please\x20add\x20your\x20session\x20to\x20SESSION_ID\x20env\x20!!','videoMessage','audio/mpeg','🧬\x20Installing\x20Plugins','keys','fromObject','crypto','\x0aitem1.X-ABLabel:Click\x20here\x20to\x20chat\x0aitem2.EMAIL;type=INTERNET:','AUTO_REACT','Plugins\x20installed\x20successful\x20✅','mimetype','WhatsApp','existsSync','setStatus','🤦‍♀️','error','CUSTOM_REACT_EMOJIS','path','Server\x20listening\x20on\x20port\x20http://localhost:','head','🕊️','remoteJid','Firefox','\x0aFN:','AUTO_STATUS_SEEN','readFileSync','6sakqAE','status','🎗️','listen','0@s.whatsapp.net','./config','BEGIN:VCARD\x0aVERSION:3.0\x0aN:','[PLUGIN\x20ERROR]\x20','fromMe','extendedTextMessage','🤹‍♀️','🙋‍♀️','alias','1617518OfnLOW','💁‍♀️','Sin\x20Nombre','AUTO_STATUS_REPLY','DEV','writeFileSync','getNumber','msg','groupMetadata','Delete\x20Detected:','image/webp','groups','sendMessage','decodeJid','format','inbox','WebMessageInfo','sendImageAsSticker','map','push','sendVideoAsSticker','1NiCVpD','replace','Bot\x20connected\x20to\x20whatsapp\x20✅','server','macOS','.js','🧞‍♀️','connection.update','7541072loNAgt','🧑‍⚕️','mkdirSync'];_0x1512=function(){return _0x4c8dc6;};return _0x1512();}function _0x3735(_0x2fb16d,_0x25d86f){const _0x15127a=_0x1512();return _0x3735=function(_0x373595,_0x31b4b1){_0x373595=_0x373595-0x165;let _0x1737f1=_0x15127a[_0x373595];return _0x1737f1;},_0x3735(_0x2fb16d,_0x25d86f);}

const express=require('express'),app=express(),port=process.env.PORT||3000;
async function connectToWA(){
    const _0x43edb1=_0x5c95da;
    const {state,saveCreds}=await useMultiFileAuthState(__dirname+'/sessions/');
    var {version}=await fetchLatestBaileysVersion();
    const XeonBotInc=makeWASocket({
        'logger':P({'level':'silent'}),
        'printQRInTerminal':false,
        'browser':Browsers.macOS('Desktop'),
        'auth':state,
        'version':version,
        'connectTimeoutMs': 60000,
        'defaultQueryTimeoutMs': 60000
    });
    XeonBotInc.ev.on('creds.update',saveCreds);
    // ... REST OF YOUR BOT LOGIC
    XeonBotInc.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if(connection === 'close') {
            if (lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut) connectToWA();
        } else if(connection === 'open') {
            console.log('✅ Bot Connected to WhatsApp!');
        }
    });
    // Copy the rest of the original logic here if needed, but this starts the connection.
}
connectToWA();
app.get('/', (req, res) => res.send('Bot is Running!'));
app.listen(port);
