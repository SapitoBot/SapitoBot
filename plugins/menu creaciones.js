//7W7 PORFAVOR  DEJAME CREDITOS NO SEAS MALO XD
let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
let vn = './media/creaciones-bot.mp3'
let menu =`
โญโใ ๐โก๏ธ๐โก๏ธ๐โก๏ธ๐โก๏ธ๐ ใโโฎ
 โ    โก _*Sapito bot_* โก
 โ ๐*ยก๐ola! ${username}* ๐
 โ
 โ โ๏ธ *_MENร CREACIONES* โ๏ธ
 โโโโโโโโโโโโโโโ
โ *<GESTION DE CREACIONES/>* 
โโกโกโกโกโกโกโกโกโก
โ *<CREADORES/>*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ โฑ๐ _${usedPrefix}s_
โฃ โฑ๐ _${usedPrefix}sticker_
โฃ โฑ๐ _${usedPrefix}semoji_
โฃ โฑ๐ _${usedPrefix}wasted_
โฃ โฑ๐ _${usedPrefix}stonks_
โฃ โฑ๐ _${usedPrefix}trash_
โฃ โฑ๐ _${usedPrefix}rainbow_
โฃ โฑ๐ _${usedPrefix}circle_
โฃ โฑ๐ _${usedPrefix}trigger_
โฃ โฑ๐ _${usedPrefix}stickermaker_
โฃ โฑ๐ _${usedPrefix}attp *texto*_
โฃ โฑ๐ _${usedPrefix}style *texto*_
โฃ โฑ๐ _${usedPrefix}attp2 *texto*_
โฃ โฑ๐ _${usedPrefix}stickerfilter_
โฃ โฑ๐ _${usedPrefix}trigger *@tag*_
โฃ โฑ๐ _${usedPrefix}mp3 *responde a un video*_
โฃ โฑ๐ _${usedPrefix}img *responde a un sticker*_
โฃ โฑ๐ _${usedPrefix}blur *responde a una imagen*_
โฃ โฑ๐ _${usedPrefix}swm *link de imagen de google*_
โฃ โฑ๐ _${usedPrefix}gif *responde a un sticker/video*_
โฃ โฑ๐ _${usedPrefix}tovideo *responde a una nota de vos_

โ *< CREACION DE LOGOS PERSONALIZADOS/>*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ โฑ๐จ _${usedPrefix}logos_ (lista)
โฃ โฑ๐จ _${usedPrefix}lolice_
โฃ โฑ๐จ _${usedPrefix}simpcard_
โฃ โฑ๐จ _${usedPrefix}hornycard_ 
โฃ โฑ๐จ _${usedPrefix}lblackpink_
โฃ โฑ๐จ _${usedPrefix}coffe *texto*_
โฃ โฑ๐จ _${usedPrefix}tahta *texto*_
โฃ โฑ๐จ _${usedPrefix}nulis *texto*_
โฃ โฑ๐จ _${usedPrefix}nulis2 *texto*_
โฃ โฑ๐จ _${usedPrefix}lolice *@tag*_
โฃ โฑ๐จ _${usedPrefix}simpcard *@tag*_
โฃ โฑ๐จ _${usedPrefix}logotaza *texto*_ 
โฃ โฑ๐จ _${usedPrefix}logocesped *texto*_ 
โฃ โฑ๐จ _${usedPrefix}logotaza2 *texto*_ 
โฃ โฑ๐จ _${usedPrefix}flaming *texto*_ 
โฃ โฑ๐จ _${usedPrefix}logofire *texto*_
โฃ โฑ๐จ _${usedPrefix}logosky *texto*_
โฃ โฑ๐จ _${usedPrefix}logocorazon *texto*_
โฃ โฑ๐จ _${usedPrefix}logorandom *texto*_
โฃ โฑ๐จ _${usedPrefix}neonfire *texto*_ 
โฃ โฑ๐จ _${usedPrefix}technology *texto*_ 
โฃ โฑ๐จ _${usedPrefix}playa *texto*_ 
โฃ โฑ๐จ _${usedPrefix}lovemessages *texto*_
โฃ โฑ๐จ _${usedPrefix}cementerio *texto*_
โฃ โฑ๐จ _${usedPrefix}romanticdouble *texto*_
โฃ โฑ๐จ _${usedPrefix}romanticmessages *texto*_
โโโโโโโโโโโโโโโ
โใ ๐โก๐โก๐โก๐โก๐ ใโ`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, 'Sapito bott', '๐ผ๐ด๐ฝ๐ RAMDOM', `#menuramdom`, '๐ผ๐ด๐ฝ๐ ๐ฐ๐๐ณ๐ธ๐พ๐', `#menuaudios`, '๐ถ๐๐๐ฟ๐พ ๐พ๐ต๐ธ๐ฒ๐ธ๐ฐ๐ป', `#grupos`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'creaciones-bot.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(menucreaciones)$/i
handler.fail = null
module.exports = handler
