let fs = require('fs')
global.owner = JSON.parse(fs.readFileSync('./src/owner.json')) // Put your number to /src/owner.json
global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Want some help?
global.thumbt = global.img
global.fsx = 999999999999
global.kontak = [
['62895627514070', 'Ray San', true], 
['6281779211748', 'YUKINO-MD', true] 
]
//Lolkey
global.lolkey = 'sonelganz'
//xteamkey
global.xkey = 'NezukoTachibana281207'
global.zenzkey = 'f9fccfcff1'

//apikey
global.APIs = {
 amel : 'https://melcanz.com',
 bg : 'http://bochil.ddns.net',
 bsbt : 'https://rest-beni.herokuapp.com',
 bx : 'https://bx-hunter.herokuapp.com',
 dhnjing : 'https://dhnjing.xyz',
 dzx : 'https://api.dhamzxploit.my.id',
 erdwepe : 'https://erdwpe-api.herokuapp.com',
 fdci : 'https://api.fdci.se',
 hardianto : 'https://hardianto.xyz',
 jonaz : 'https://jonaz-api-v2.herokuapp.com',
 LeysCoder : 'https://leyscoders-api.herokuapp.com',
 lolhuman : 'https://api.lolhuman.xyz',
 neoxr : 'https://api.neoxr.my.id',
 nrtm : 'https://nurutomo.herokuapp.com',
 nzcha : 'http://nzcha-apii.herokuapp.com',
 pencarikode : 'https://pencarikode.xyz',
 violetics : 'https://violetics.pw',
 xteam : 'https://api.xteam.xyz',
 zahir : 'https://zahirr-web.herokuapp.com',
 zekais : 'http://zekais-api.herokuapp.com',
 zeks : 'https://api.zeks.xyz',
 zenz : 'https://zenzapis.xyz'
}

/*Apikey*/
global.APIKeys = {
 'https://api.neoxr.my.id' : 'JeJU827J',
 'https://api.lolhuman.xyz' : 'sonelganz',
 'https://api.xteam.xyz' : 'NezukoTachibana281207',
 'https://api.zeks.xyz' : 'apivinz',
 'https://hardianto-chan.herokuapp.com' : 'hardianto',
 'https://hardianto.xyz' : 'hardianto',
 'https://leyscoders-api.herokuapp.com' : 'MIMINGANZ',
 'https://melcanz.com' : 'manHkmst',
 'https://pencarikode.xyz' : 'pais',
 'https://rest-beni.herokuapp.com' : 'benniismaelapikey',
 'https://violetics.pw' : 'beta',
 'https://zahirr-web.herokuapp.com' : 'zahirgans',
 'https://zekais-api.herokuapp.com' : 'zekais',
 'https://zenzapis.xyz' : 'f9fccfcff1'
}

global.linkyt = 'https://youtu.be/60yZO4UQKdI'
global.WM = '𝑴𝒚𝑩𝒐𝒕-𝑴𝒖𝒍𝒕𝒊 𝑫𝒆𝒗𝒊𝒄𝒆 𝑩𝒚 𝚃𝚑𝚎.𝚂𝚊𝚍.𝙱𝚘𝚢𝟶𝟷'
global.linkgc = 'https://chat.whatsapp.com/CZlamemhpn06a5sW063xOg'
global.linkig = 'https://www.instagram.com/the.sad.boy01'
global.deslink = ''
global.logo = 'https://telegra.ph/file/1665521d176fbf172d735.jpg'
global.titlink = 'Folllow me on Instagram'
global.bodlink = '@the.sad.boy01'

global.wait = '_*𝐬𝐞𝐝𝐚𝐧𝐠 𝐝𝐢 𝐩𝐫𝐨𝐬𝐞𝐬 ...*_'
global.eror = '_*ᴍᴀᴀғ sᴇʀᴠᴇʀ ᴛɪᴅᴀᴋ sᴛᴀʙɪʟ..*_'

//========Url Template Buttons==========//
global.dtu = '🌏 GROUP OFFICIAL'
global.urlnya = global.linkgc

//============= callButtons ============//
global.dtc = '𝒄𝒂𝒍𝒍 𝒐𝒘𝒏𝒆𝒓'
global.phn = '+62 895-6275-14070'

//========== Tampilan Bot =============//
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'
global.zt = '*'
global.zc = ''

global.thumbnailUrl = [
  'https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg', 'https://telegra.ph/file/ac4928f0824a2a0492737.jpg',
  'https://telegra.ph/file/6359b013bc7e52c3b346f.jpg', 'https://telegra.ph/file/d43c89a5d2da72875ec05.jpg',
  'https://telegra.ph/file/7d6c0e35f9c8f52715541.jpg', 'https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg',
  'https://telegra.ph/file/55e5af5f33fbd57104187.jpg', 'https://telegra.ph/file/af236598456b95884bd15.jpg',
  'https://telegra.ph/file/de92ed4a729887ffc974c.jpg', 'https://telegra.ph/file/00ce42a193b1dbbf907d4.jpg'
]

//============= Games ================//
global.benar = '_*Benar✅*_'
global.salah = '_*Salah❌*_'
global.dikit = "dikit lagi, semangat ya :')"

global.multiplier = 100 // The higher, The harder levelup

//=========== Requirements ==========//

global.baileys = require('@adiwajshing/baileys')
global.fs = require('fs')
global.data = JSON.parse(fs.readFileSync('./data.json'))
global.fetch = require('node-fetch')
global.bochil = require('@bochilteam/scraper')

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      healt: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      fishingrod: '🎣',
      pickaxe: '⛏️',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      iron: '⛓️',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      makananpet: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
