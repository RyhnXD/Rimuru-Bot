const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let sn = createHash('md5').update(m.sender).digest('hex')
let fk = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 999999999828182719999,
    status: 4827204,
    surface : 4072824,
    message: '▸ Terimakasih Telah Mendaftar 🏷️', 
    orderTitle: wm,
    thumbnail: await (await fetch('https://telegra.ph/file/f7800c83b617702527c30.jpg')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
let fz = {
	key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "120363039290101063@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": wm,
                 "h": `Hmm`,
                 'seconds': '999999999', 
                 'gifPlayback': 'true', 
                 'caption': `「 RUNTIME BOT 」
⏲️ Waktu: ${time} WIB
💌 Aktif Selama : ${uptime}`, 'jpegThumbnail': await (await fetch('https://telegra.ph/file/f7800c83b617702527c30.jpg')).buffer()
                          }
                        }
                      }
 let user = global.db.data.users[m.sender]
  if (user.registered === true) return conn.sendButtonDoc(m.chat, `@${m.sender.split`@`[0]} Kamu sudah terdaftar! mau daftar ulang?`, wm, 'Iya', '.unreg ' + sn, m, {
    quoted: fz,
    contextInfo: { forwardingScore: 99999, isForwarded: true,
        externalAdReply: {
        	sourceUrl: 'https://wa.me/62895637514070',
            title: wm + ' 🍃',
            body: `💌 Aktif Selama : ${uptime}`,
          thumbnail: await (await fetch('https://telegra.ph/file/f7800c83b617702527c30.jpg')).buffer()
        }
     }
    })
  if (!Reg.test(text)) return conn.sendButtonDoc(m.chat, `contoh:\n*${usedPrefix + command} Ray.16*`, wm, 'Menu', '.menu', m, {
    quoted: fz,
    contextInfo: { forwardingScore: 99999, isForwarded: true,
        externalAdReply: {
        	sourceUrl: 'https://wa.me/62895627514070',
            title: wm + ' 🍃',
            body: `💌 Aktif Selama : ${uptime}`,
          thumbnail: await (await fetch('https://telegra.ph/file/f7800c83b617702527c30.jpg')).buffer()
        }
     }
    })
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 50) throw 'Umur terlalu tua'
  if (age < 5) throw 'Bayi bisa ngetik sesuai format bjir ._., tapi gatau juga bocil skrg epic² pasti anak ngen ngep:v'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let prefix = usedPrefix
let hao = `

*Registered In Database*
*Supported By @${global.owner[1].split('@')[0]}*` 
  let emot = conn.pickRandom(["☑️"])
  let totalreg = Object.keys(global.db.data.users).length
  conn.sendMessage(m.chat, {
    	react: {
    		text: emot,
    		key: m.key
    	}
    })	
conn.sendButtonDoc(m.chat, `
◪ *「 DAFTAR BERHASIL 」*
╰───────────────────╮
╭───────────────────╯
├❏ Tag : @${m.sender.split`@`[0]}
├❏ Nama : ${name}
├❏ Umur : ${age} tahun
├❒ Total User : ${totalreg} nomor
╰───────────────────

*SN* (Serial Number) di kirim di chat pribadi dan digunakan untuk daftar ulang, jika lupa *SN* silahkan ketik *${usedPrefix}sn* untuk mengecek *SN* kamu! 
`.trim(), wm, `Profile`,`${prefix}pp`, m, {
    quoted: fk,
    contextInfo: { forwardingScore: 99999, isForwarded: true,
        externalAdReply: {
        	sourceUrl: 'https://wa.me/62895627514070',
            title: 'Terimakasih Telah Daftar 🍃',
            body: 'ʟᴜᴍɪɴᴏᴜs-ʙᴏᴛ',
          thumbnail: await (await fetch(fla + 'Registered')).buffer()
        }
     }
    })
conn.send2ButtonLoc(m.sender, 'https://telegra.ph/file/cdf7e73f51d11643aac4e.jpg', `Ini Berguna Untuk Unregister, Simpan Dengan Baik Sn Untuk Menjaga Data Pribadi Anda

*ID* : ${pickRandom(['GGA0QH119J1','JPA017P02HA1','PWJROSAIEJ','LAOFOODJQ','PWJFCIFIF','QBBVAODEPZ','QPWEJDNDJD','IQPQBAHSIF','UWUWIWOKPF','PQJDXBXB','AKSJALPQDN','HALAKDILQU','IAIIWIICCIS','KQPSNWO','BSBANSKA','JANSNDKSOS','JDKALDKKAPPPP','12OJB0IHBV390','PWWJ017027GA14','19QPDKALLH61J','PWJSJDDUYSYSHSU','1001UQOXJ9JJDY','PQPSODUE107','BBBAKZOOX','00071','WKESOAKWLA','104JALOA9','OSBDOSODO','PWODJDOSKFJSOO','OWJCKEOS','PAJDISO','OSJDOWO','BABAOALKS','PWKW827LA9PA0','PWOEOOOJF','LCKDI2027H393P','IWUEUJEDGWEUEUE','WJA0I2845KN','HAGFUUXUQP3','P0000009769767T0O87Y5','0TT9I4UO43','P7YYRE8583E6','NZNSJEO','P8Y4W38P0R','P8R6IOP4EU-HG0','0729OWRU','APP1MJ90038SJ','98JHEB072NO9','BbL016JJQBCSr54OwwW0','BbJdQ0X37ohL016HhqK','BbJdQ0X37ohL016HhqK','GgGddSsssss1039','HAOSOWODJSO','BVjd173k6BEk','AEOKKAKSKKAK20468','BBWUK017KASK','QMB09R4K8SJ','1238PBLLWO20','KODE123','jajsoskskskOOoO0292','GAGHWPPWSIJ','PWEUPiwpepwp02928','000000723','QPWOEJSJAL','BBAHUSQPEI','HHGGGAGAGODPF','PUS1383PW0292838','HHHB203828LALJK','FFAFUAFAGGAFAFOWVA','PWKDIAPDHZOA','QPWOEUDMZ','103838PW02XLAK','AWOAOAKSPAJDOA','bbbaoduwuslp','kawpajeif','1037pWjs0273BBNjK1','Or4nGB3g04N71nk','Hhhhhhhpwishahhhh','Paosjsh102','Vvvavahsi239hOwpP','PAH103891','RAPEHAL028473','0193910392','103892928','0293829293','02838292','WPPPJSUEUND','01387482923828','gqlI000iwhBYYj0239','DGAOOW','PWOEUDOAO','B0OHF7864IJN','OWRHWOKDIRE','BXKKWCOEDMJCIE','BBDGWOPDDMEO','148920392949202','WOEIOWEOO','19388292929383','MODARSIAHANJINK','BEBEOAODAPJ','LVOWOWIEPADH','GD0KNT3387N20','JUSTSKOSAO','PW2039LSHDOW','BVOVOVOVUUDEUA307','027492838','01398293','TAPIUPITKAOE103982','019382939','02848292838','OWOWOWOJDJADJLA019','PE023802794949nbK','owjfLjsoKhIOauwo','JKlskeoKJJTRYOJc','IHUOFEtUKPJVD302','HJPgFTIBDTI','029292848','IgwoekdkdomsB','HJOKJYYUlns','INNSAPTAILOEAJD','TAIANJSGSIAOPA','0238829103','02838385842111','9372893739991','BACHEUADL','RC047','BRAINTLUBA0284','DDDDDDDSALDKOE1048','11020393910101010201047GbkL','BrADIopaSLyeYA','JSJDJAKDSKLLLLAPRO','S1A4DTKI0087U','47492837','923772','BACHELAOF','1038828282','VAKDPOESMAQ0079'])}
*SN:* ${sn}

_*Note*_ :
-Kode ID jangan sampai lupa! Karna Diantara Kodenya adalah kode gift yang berhadiah! Jika Anda Beruntung!
-Kalau mau unreg, lupa sn ketik ${usedPrefix}sn
-Jika Ingin Main Rpg Bisa Klik Button Di Bawah Untuk Tutorial`, hao, 'Kode Sn', '.sn', 'Tutor Rpg', '.tutorpg', m)
}
handler.help = ['daftar', 'register'].map(v => v + ' <name>.<age>')
handler.tags = ['xp']

handler.command = /^(daftar|reg(is(ter))?)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
