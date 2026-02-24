const fs = require('fs');

function isSudo(jid, ownerNumber) {
    // یہ فنکشن چیک کرتا ہے کہ کیا میسج بھیجنے والا مالک (Owner) ہے یا نہیں
    const owners = Array.isArray(ownerNumber) ? ownerNumber : [ownerNumber];
    return owners.includes(jid.split('@')[0]);
}

module.exports = { isSudo };

