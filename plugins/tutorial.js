let handler = async m => m.reply(`
*How to Make a Sticker Using WhatsApp Bot.*

1. Send the picture you want to use as a sticker
2. Reply to the image and type *#sticker*
3. Wait for the sticker making process to complete

_Example image: https://botwan.adhwaweb.repl.co/image1_
`.trim())
handler.help = ['t']
handler.tags = ['info']
handler.command = /^t$/i
module.exports = handler
