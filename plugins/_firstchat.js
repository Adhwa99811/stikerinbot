let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup || db.data.settings[this.user.jid].group) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await this.sendButton(m.chat, `
Hai, ${this.ucapan()}

${user.banned ? 'kamu dibanned' : `Click the button below to get how to make a sticker using whatsapp bot.`}
`.trim(), '©2022 by Wan', user.banned ? 'Pemilik Bot' : 'Tutorial', user.banned ? ',owner' : '.t', m)
    user.pc = new Date * 1
}

module.exports = handler
