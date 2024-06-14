require('./lib/listmenu')
const {
	downloadContentFromMessage,
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    InteractiveMessage,
    getContentType
} = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const { color } = require('./lib/color')
const chalk = require('chalk')
const moment = require('moment-timezone')
const cron = require('node-cron')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const yts = require('yt-search')
const gis = require('g-i-s')
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const fg = require('api-dylux')
const googleTTS = require('google-tts-api')
const jsobfus = require('javascript-obfuscator')
const {translate} = require('@vitalets/google-translate-api')
const { download } = require('aptoide-scraper');
const scp2 = require('./lib/scraper2') 
const { xvideosSearch, xvideosdl, xnxxdl, xnxxSearch} = require('./lib/scraper3.js')
const pkg = require('imgur')
const { ImgurClient } = pkg
const uploadImage = require('./lib/uploadImage')
const client = new ImgurClient({ clientId: "a0113354926015a" })
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const {
    performance
} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./lib/converter')
const {
    smsg,
    getGroupAdmins,
    formatp,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    fetchBuffer,
    buffergif,
    GIFBufferToVideoBuffer,
    totalcase
} = require('./lib/myfunc')
const { kenv_antispam } = require('./lib/antispam')
//fonctions du proprio et des porteurs  
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun')
//store
const { 
addResponList, 
delResponList, 
isAlreadyResponList, 
isAlreadyResponListGroup, 
sendResponList, 
updateResponList, 
getDataResponList 
} = require('./lib/list')
//donn�e
let ntnsfw = JSON.parse(fs.readFileSync('./src/data/function/nsfw.json'))
let bad = JSON.parse(fs.readFileSync('./src/data/function/mauvaismot.json'))
let premium = JSON.parse(fs.readFileSync('./src/data/role/porteur.json'))
const owner = JSON.parse(fs.readFileSync('./src/data/role/proprio.json'))
//media
const VoiceNoteKenv = JSON.parse(fs.readFileSync('./KenvFile/database/kenvvn.json'))
const StickerKenv = JSON.parse(fs.readFileSync('./KenvFile/database/kenvsticker.json'))
const ImageKenv = JSON.parse(fs.readFileSync('./KenvFile/database/kenvimage.json'))
const VideoKenv = JSON.parse(fs.readFileSync('./KenvFile/database/kenvvideo.json'))
const DocKenv = JSON.parse(fs.readFileSync('./KenvFile/database/doc.json'))
const ZipKenv = JSON.parse(fs.readFileSync('./KenvFile/database/zip.json'))
const ApkKenv = JSON.parse(fs.readFileSync('./KenvFile/database/apk.json'))

//store database
const db_respon_list = JSON.parse(fs.readFileSync('./src/store/liste.json'))

const kenvverifieduser = JSON.parse(fs.readFileSync('./src/data/role/user.json'))

global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db.data || {})
}

let vote = db.data.others.vote = []
let kuismath = db.data.game.math = []

//time
const ktime = moment.tz('West Africa/Yaounde').format('HH:mm:ss')
const kdate = moment.tz('West Africa/Yaounde').format('DD/MM/YYYY')
const time2 = moment().tz('West Africa/Yaounde').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var kevinoutimewisher = `Douce Nuit 🌌`
 }
 if(time2 < "19:00:00"){
var kevinoutimewisher = `Bonsoir 🌃`
 }
 if(time2 < "18:00:00"){
var kevinoutimewisher = `Bonsoir 🌃`
 }
 if(time2 < "15:00:00"){
var kevinoutimewisher = `Bon Aprem 🌅`
 }
 if(time2 < "11:00:00"){
var kevinoutimewisher = ` Bonjour 🌄`
 }
 if(time2 < "05:00:00"){
var kevinoutimewisher = `Bonjour 🌄`
 } 
//fonction 
const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
//module
module.exports = KenvBotInc = async (KenvBotInc, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
       var body = (
  m.mtype === 'conversation' ? m.message.conversation :
  m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
  m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
  m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
  m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
  m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
  m.mtype === 'InteractiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)?.id :
  m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
  m.mtype === 'messageContextInfo' ?
    m.message.buttonsResponseMessage?.selectedButtonId ||
    m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
    m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
    m.text :
  ''
);
        var budy = (typeof m.text == 'string' ? m.text : '')
        //prefix 1
        var prefix = ['.', '/'] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : kprefix
        const isCmd = body.startsWith(prefix)
        //prefix2 and command2 particulary for auto download
        const prefix2 = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
        const isCmd2 = body.startsWith(prefix2)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await KenvBotInc.decodeJid(KenvBotInc.user.id)
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const kevinoumisc = (m.quoted || m)
        const quoted = (kevinoumisc.mtype == 'buttonsMessage') ? kevinoumisc[Object.keys(kevinoumisc)[1]] : (kevinoumisc.mtype == 'templateMessage') ? kevinoumisc.hydratedTemplate[Object.keys(kevinoumisc.hydratedTemplate)[1]] : (kevinoumisc.mtype == 'product') ? kevinoumisc[Object.keys(kevinoumisc)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        //media
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
       //prefix 2
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : kprefix
        const kevinoubody = body.startsWith(pric)
        const isCommand = kevinoubody ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
       //group
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await KenvBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        //anti media
        const isKenvFile = m.mtype
        //user status
        const isUser = kenvverifieduser.includes(sender)
        const KenvTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium= KenvTheCreator || checkPremiumUser(m.sender, premium)
        expiredPremiumCheck(KenvBotInc, m, premium)
        
        //theme sticker reply
        const KenvStickWait = () => {
        let KenvStikRep = fs.readFileSync('./KenvFile/theme/r�ponse_sticker/wait.webp')
        KenvBotInc.sendMessage(from, { sticker: KenvStikRep }, { quoted: m })
        }
        const KenvStickAdmin = () => {
        let KenvStikRep = fs.readFileSync('./KenvFile/theme/r�ponse_sticker/admin.webp')
        KenvBotInc.sendMessage(from, { sticker: KenvStikRep }, { quoted: m })
        }
        const KenvStickBotAdmin = () => {
        let KenvStikRep = fs.readFileSync('./KenvFile/theme/r�ponse_sticker/botadmin.webp')
        KenvBotInc.sendMessage(from, { sticker: KenvStikRep }, { quoted: m })
        }
        const KenvStickOwner = () => {
        let KenvStikRep = fs.readFileSync('./KenvFile/theme/r�ponse_sticker/proprio.webp')
        KenvBotInc.sendMessage(from, { sticker: KenvStikRep }, { quoted: m })
        }
        const KenvStickGroup = () => {
        let KenvStikRep = fs.readFileSync('./KenvFile/theme/r�ponse_sticker/groupe.webp')
        KenvBotInc.sendMessage(from, { sticker: KenvStikRep }, { quoted: m })
        }
        const KenvStickPrivate = () => {
        let KenvStikRep = fs.readFileSync('./KenvFile/theme/r�ponse_sticker/pv.webp')
        KenvBotInc.sendMessage(from, { sticker: KenvStikRep }, { quoted: m })
        }
 
        //premium
        async function replyprem(teks) {
    replygckenv(`Cette commande est destin�e aux porteurs, veuillez contacter le proprio pour en devenir un`)
}
        //script replier
        async function sendKenvBotIncMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await KenvBotInc.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
        //r�pondant 
        async function replygckenv(teks) {
            if (typereply === 's1') {
                m.reply(teks)
            } else if (typereply === 's2') {
                KenvBotInc.sendMessage(m.chat, {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            previewType: "PHOTO",
                            thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                            sourceUrl: wagc
                        }
                    },
                    text: teks
                }, {
                    quoted: m
                });
            } else if (typereply === 's3') {
               KenvBotInc.sendMessage(m.chat, {
                  text: teks,
                  contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        title: botname,
                        body: ownername,
                        thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                        sourceUrl: websitex,
                        mediaType: 1,
                        renderLargerThumbnail: true
                     }
                  }
               }, { quoted: m })
            } else if (typereply === 's4') {
                replygckenv2(teks)
            }
        }
        
        //fake r�pondant avec le lien de la cha�ne WhatsApp 
async function replygckenv2(txt) {
const kenvnewrep = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "Clique ici pour recevoir $69 gratis j'suis g�n�reux aujourd'hui",
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {  
showAdAttribution: true,
title: botname,
body: ownername,
thumbnailUrl: 'https://ibb.co/7SCfT1G',
sourceUrl: websitex
},
},
text: txt,
}
return KenvBotInc.sendMessage(from, kenvnewrep, {
quoted: m,
})
}
            
        let fstatus = { 
            key: { 
               fromMe: false, 
               participant: `0@s.whatsapp.net`,  
               ...(m.chat ? {  remoteJid: "status@broadcast"  } : {}) 
            }, 
               message: {  
                  "imageMessage": { 
                     "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", 
                     "mimetype": "image/jpeg", 
                     "caption": botname,
                     "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", 
                     "fileLength": "28777",
                     "height": 1080,
                     "width": 1079,
                     "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                     "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                     "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                     "mediaKeyTimestamp": "1610993486",
                     "jpegThumbnail": await reSize(thumb, 100, 100),
                     "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                  }
               }
            }
            
            //Fake quoted 
        const fpay = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id:global.botname, participant: '0@s.whatsapp.net'}, message: { requestPaymentMessage: { currencyCodeIso4217: "XAF", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: global.botname}}, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "XAF"}}}}
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "237656774511-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=237656774511:237656774511\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
	    const frpayment = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "XAF",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "XAF"
			}
		}
	}
}
            
            const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
        
        //database
        try {
            let isNumber = k => typeof k === 'number' && !isNaN(k)
            let limitUser = isPremium ? 1000 : 100
            let user = global.db.data.users[sender]
            if (typeof user !== 'object') global.db.data.users[sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('badword' in user)) user.badword = 0
                if (!('title' in user)) user.title = ''
                if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex') 
                if (!('afkReason' in user)) user.afkReason = ''
                if (!('nick' in user)) user.nick = KenvBotInc.getName(sender)
                if (!isPremium) user.premium = false
                if (!('totalLimit' in user)) user.totalLimit = 0
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[sender] = {
               serialNumber: randomBytes(16).toString('hex'),
               title: `${isPremium ? 'Premium' : 'User'}`,
               afkTime: -1,
               badword: 0,
               afkReason: '',
               nick: KenvBotInc.getName(sender),
               premium: `${isPremium ? 'true' : 'false'}`,
               limit: limitUser,
               totalLimit: 0
            }
            
               let chats = global.db.data.chats[from]
               if (typeof chats !== 'object') global.db.data.chats[from] = {}
               if (chats) {
                  if (!('badword' in chats)) chats.badword = false
                  if (!('antiforeignnum' in chats)) chats.antiforeignnum = false
                  if (!('antibot' in chats)) chats.antibot = false
                  if (!('antiviewonce' in chats)) chats.antiviewonce = false
                  if (!('antispam' in chats)) chats.antispam = false
                  if (!('antimedia' in chats)) chats.media = false
                  if (!('antivirtex' in chats)) chats.antivirtex = false
                  if (!('antiimage' in chats)) chats.antiimage = false
                  if (!('antivideo' in chats)) chats.video = false
                  if (!('antiaudio' in chats)) chats.antiaudio = false
                  if (!('antipoll' in chats)) chats.antipoll = false
                  if (!('antisticker' in chats)) chats.antisticker = false
                  if (!('anticontact' in chats)) chats.anticontact = false
                  if (!('antilocation' in chats)) chats.antilocation = false
                  if (!('antidocument' in chats)) chats.antidocument = false
                  if (!('antilink' in chats)) chats.antilink = false
                  if (!('antilinkgc' in chats)) chats.antilinkgc = false
                  if (!('antipromotion' in chats)) chats.antipromotion = false
               } else global.db.data.chats[from] = {
                  badword: false,
                  antiforeignnum: false,
                  antibot: false,
                  antiviewonce: false,
                  antispam: false,
                  antivirtex: false,
                  antimedia: false,
                  antiimage: false,
                  antivideo: false,
                  antiaudio: false,
                  antipoll: false,
                  antisticker: false,
                  antilocation: false,
                  antidocument: false,
                  anticontact: false,
                  antilink: false,
                  antipromotion: false,
                  antilinkgc: false
               }
            
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
               if (!('totalhit' in setting)) setting.totalhit = 0
               if (!('totalError' in setting)) setting.totalError = 0
               if (!('online' in setting)) setting.online = false 
               if (!('autosticker' in setting)) setting.autosticker = false 
               if (!('autodownload' in setting)) setting.autodownload = false 
               if (!('autobio' in setting)) setting.autobio = false 
               if (!('autoread' in setting)) setting.autoread = false
               if (!('autorecordtype' in setting)) setting.autorecordtype = false
               if (!('autorecord' in setting)) setting.autorecord = false
               if (!('autotype' in setting)) setting.autotype = false
               if (!('autoblocknum' in setting)) setting.autoblocknum = false
               if (!('onlyindia' in setting)) setting.onlyindia = false
               if (!('onlyindo' in setting)) setting.onlyindo = false
               if (!('onlygrub' in setting)) setting.onlygrub = false
               if (!('onlypc' in setting)) setting.onlypc = false
               if (!('watermark' in setting)) setting.watermark = { packname , author }
               if (!('about' in setting)) setting.about = { bot: { nick: KenvBotInc.getName(botNumber), alias: botname}, owner: { nick: KenvBotInc.getName(global.ownernumber + '@s.whatsapp.net'), alias: global.ownernumber}}
            } else global.db.data.settings[botNumber] = {
               totalhit: 0,
               totalError: 0,
               online: false,
               autosticker: false,
               autodownload: false,
               autobio: false,
               autoread: false,
               autoblocknum: false,
               onlyindia: false,
               onlyindo: false,
               onlygrub: false,
               onlypc: false,
               autorecordtype: false,
               autorecord: false,
               autotype: false,
               watermark: {
                  packname: global.packname, 
                  author: global.author
               },
               about: {
                  bot: {
                     nick: KenvBotInc.getName(botNumber), 
                     alias: botname
                  },
                  owner: {
                     nick: KenvBotInc.getName(global.ownernumber + '@s.whatsapp.net'), 
                     alias: global.ownernumber
                  }
               }
            }
            
        } catch (err) {
            console.log(err)
        }
       
        //photo uploader
        async function uploadtoimgur(imagepath) {
  try {
    const response = await client.upload({
      image: fs.createReadStream(imagepath),
      type: 'stream',
    })

    let url = response.data.link
    console.log(url)
    return url
  } catch (error) {
    console.error('Error uploading image to Imgur:', error)
    throw error
  }
}        
        async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

//autoreact
const kenvreact = async () => {
  const emojis = ["🌷", "🤙", "😂", "🤣", "😭", "🫂", "💔", "😡"]; 
  for (const emoji of emojis) {
    await sleep(80);
    KenvBotInc.sendMessage(m.chat, { react: { text: emoji, key: m.key }});
  }
  await sleep(50);
  KenvBotInc.sendMessage(m.chat, { react: { text: randomemoji, key: m.key }});
}

//bug loading
async function loading () {
var kenvlod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."
]
let { key } = await KenvBotInc.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < kenvlod.length; i++) {
await KenvBotInc.sendMessage(from, {text: kenvlod[i], edit: key })
}
} 

const kenvimun = (texto) => {
KenvBotInc.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: m }).catch(e => {
return m.reply("Erro..")
})
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

//sticker meta function
async function addExifAvatar(buffer, packname, author, categories = [''], extra = {}) {
  const {
      default: {
            Image
                }
                  } = await import('node-webpmux')
                    const img = new Image()
                      const json = {
                          'sticker-pack-id': 'Natsxe',
                              'sticker-pack-name': packname,
                                  'sticker-pack-publisher': author,
                                      'emojis': categories,
                                          'is-avatar-sticker': 1,
                                              ...extra
                                                }
                                                  let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
                                                    let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
                                                      let exif = Buffer.concat([exifAttr, jsonBuffer])
                                                        exif.writeUIntLE(jsonBuffer.length, 14, 4)
                                                          await img.load(buffer)
                                                            img.exif = exif
                                                              return await img.save(null)
                                                              }
function makeid(length) {
  let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
  return result;
  }

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}
        
        async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replygckenv('Veuiller entrer le lien de votre sticker telegram')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const kevinouresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'KenvOfc',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            kevinouresult.push(result)
        }
    resolve(kevinouresult)
    })
}

//mega download
function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

//trace anime
function formatDuration(ms) {
  let seconds = Math.floor((ms / 1000) % 60);
  let minutes = Math.floor((ms / (1000 * 60)) % 60);
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
        
        //limit func
        async function useLimit(senuseLimitder, amount) {
            db.data.users[sender].limit -= amount
            db.data.users[sender].totalLimit += amount
            replygckenv(`You have used up: ${amount} limit\nRemaining: ${db.data.users[sender].limit} limit`)
        }
        async function resetLimit() {
            let users = Object.keys(global.db.data.users)
            let Limitkenv = isPremium ? limit.prem : limit.free
            for (let i of users) {
               db.data.users[i].limit = Limitkenv
            }
            KenvBotInc.sendText('120363167338947238@g.us', { text: `Limite Reinitialis�e`})
        }
        // Group Only
        if (!m.isGroup && !KenvTheCreator && db.data.settings[botNumber].onlygrub ) {
        	if (isCommand){
            return replygckenv(`Hey Bro! Parce que nous devons r�duire les risques de spam, Veillez s'il vous pla�t utiliser le bot dans un groupe !\n\nIf o� alors veuillez contacter le proprio wa.me/${ownernumber}`)
            }
        }
        // Private Only
        if (!KenvTheCreator && db.data.settings[botNumber].onlypc && m.isGroup) {
        	if (isCommand){
	         return replygckenv("Hey Bro! si veuillez dm le bot si vous voulez l'utiliser")
	     }
	}
	     
        if (!KenvBotInc.public) {
            if (KenvTheCreator && !m.key.fromMe) return
        }
        if (db.data.settings[botNumber].online) {
        	if (isCommand) {
        	KenvBotInc.sendPresenceUpdate('unavailable', from)
        }
        }
        if (db.data.settings[botNumber].autoread) {
            KenvBotInc.readMessages([m.key])
        }
        //auto set bio\\
	if (db.data.settings[botNumber].autobio) {
            KenvBotInc.updateProfileStatus(`${botname} En Ligne Depuis ${runtime(process.uptime())}`).catch(_ => _)
        }
     //auto type record
        if (db.data.settings[botNumber].autorecordtype){
        if (isCommand) {
            let kenvmix = ['entrain d.�crire', 'entrain d.enregistrer']
            kenvmix2 = kenvmix[Math.floor(kenvmix.length * Math.random())]
            KenvBotInc.sendPresenceUpdate(kenvmix2, from)
        }
        }
        if (db.data.settings[botNumber].autorecord){
        if (isCommand) {
        	let kenvmix = ['entrain d.enregistrer']
            kenvmix2 = kenvmix[Math.floor(kenvmix.length * Math.random())]
            KenvBotInc.sendPresenceUpdate(kenvmix2, from)
        }
        }
        if (db.data.settings[botNumber].autotype){
        if (isCommand) {
        	let kenvpos = ['entrain d.�crire']
            KenvBotInc.sendPresenceUpdate(kenvpos, from)
        }
        }
        
        //blocage auto
        if (m.sender.startsWith(`${autoblocknumber}`) && db.data.settings[botNumber].autoblocknum === true) {
            return KenvBotInc.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('91') && db.data.settings[botNumber].onlyindia === true) {
            return KenvBotInc.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && db.data.settings[botNumber].onlyindo === true) {
            return KenvBotInc.updateBlockStatus(m.sender, 'block')
        } 
        if (!m.sender.startsWith(`${antiforeignnumber}`) && db.data.chats[m.chat].antiforeignnum === true){ 
        	if (KenvTheCreator || isAdmins || !isBotAdmins) return
            KenvBotInc.sendMessage(m.chat, { text: `Sorry bro! tu seras off du groupe parce que l.admin/proprio a activ� l.anti foreign number, seulement les +${antiforeignnumber} sont autoris�s � rejoindre le groupe` }, {quoted: m})
            await sleep(2000)
            await KenvBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        let list = []
for (let i of owner) {
list.push({
	    	displayName: await KenvBotInc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await KenvBotInc.getName(i)}\nFN:${await KenvBotInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
        //console log
        if (isCommand) {
            console.log(color(`\n\n`, 'cyan'))
            console.log(chalk.black(chalk.bgWhite(!isCommand ? '[ MESSAGE ]' : '[ COMMAND ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
            global.db.data.settings[botNumber].totalhit += 1
        }

        //antiviewonce
    if ( db.data.chats[m.chat].antiviewonce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
        let val = { ...m }
        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await KenvBotInc.sendMessage(m.chat, { forward: val }, { quoted: m })
    }
    
    //antispam kick
if (db.data.chats[m.chat].antispam) {
if (m.isGroup && m.message && xeon_antispam.isFiltered(from)) {
console.log(`[SPAM]`, color(moment(m.messageTimestamp * 100).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
return await KenvBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
    
    // Anti promotion
if (db.data.chats[m.chat].antipromotion) {
if (budy.match(`instagram booster|tiktok booster|ml booster|bgmi selling|selling uc|selling diamonds|selling coin|selling id|selling account|selling ids|buy account|sell account|buy id|sell id|instagram followers|tiktok followers|buy panel|sell panel|sell bug bot|buy bug bot|buy bot bug|sell bot bug|adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!isBotAdmins) return
if(KenvTheCreator) return
if (isAdmins) return
KenvBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
KenvBotInc.sendMessage(from, {text:`\`\`\`「 Promotion Detect�e 」\`\`\`\n\n le message de promotion envoy� par @${m.sender.split("@")[0]}  a �t� supprim� avec succ�s`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
}

        //ANTI VIRUS
if (isGroup && db.data.chats[m.chat].antivirtex) {
if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ') ) {
if (isGroupAdmins) return replygcxeon('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
KenvBotInc.sendText(m.chat, `*MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${sender.split("@")[0]}`)   
if (!isBotAdmins) return
if(KenvTheCreator) return
KenvBotInc.groupParticipantsUpdate(from, [sender], 'remove')
await KenvBotInc.sendMessage(from, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
KenvBotInc.sendMessage(`${ownernumber}@s.whatsapp.net`,{text: `Hey proprio! wa.me/${sender.split("@")[0]} a envoy� un virtext merdique${isGroup?`in ${groupName}`:''}`})
 }
 }
 
 if (db.data.chats[m.chat].antibot) {
    if (m.isBaileys && m.fromMe == false){
        if (isAdmins || !isBotAdmins){		  
        } else {
          replygckenv(`*Bot merdique d�tect�*\n\n iiiiiiich Sors vite de ce groupe!!!`)
    return await KenvBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
   }
 
        //anti media
        if (db.data.chats[m.chat].antimedia && isMedia) {
        if (KenvTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygckenv(`\`\`\`「 Media Detect� 」\`\`\`\n\nSorry, mais je dois supprimer �a parce que l.admin/proprio a activ� l.anti-media dans ce groupe`)
    return KenvBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
  }
        if (db.data.chats[m.chat].image && is KenvMedia) {
    if(isKenvMedia === "imageMessage"){
        if (KenvTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygckenv(`\`\`\`「 Image D�tect� 」\`\`\`\n\nSorry, mais je dois supprimer �a parce que l.admin/proprio a activ� l.anti-image dans ce groupe`)
    return KenvBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antivideo && isKenvMedia) {
    if(isKenvMedia === "videoMessage"){
        if (KenvTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygckenv(`\`\`\`「 Video Detect� 」\`\`\`\n\nSorry, mais je dois supprimer �a parce que l.admin/proprio a activ� l.anti-video dans ce groupe`)
    return KenvBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antisticker && isKenvMedia) {
    if(isKenvMedia === "stickerMessage"){
        if (KenvTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygckenv(`\`\`\`「 Sticker Detect� 」\`\`\`\n\nSorry,  mais je dois supprimer �a parce que l.admin/proprio a activ� l.anti-sticker dans ce groupe`)
    return KenvBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antiaudio && isKenvMedia) {
    if(isKenvMedia === "audioMessage"){
        if (KenvTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygckenv(`\`\`\`「 Audio Detect� 」\`\`\`\n\nSorry,  mais je dois supprimer �a parce que l.admin/proprio a activ� l.anti-audio dans ce groupe`)
    return KenvBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antipoll && isKenvMedia) {
    if(isKenvMedia === "pollCreationMessage"){
        if (KenvTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygckenv(`\`\`\`「 Poll Detect� 」\`\`\`\n\nSorry,  mais je dois supprimer �a parce que l.admin/proprio a activ� l.anti-poll dans ce groupe`)
    return KenvBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antilocation && isKenvMedia) {
    if(isKenvMedia === "locationMessage"){
        if (KenvTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygckenv(`\`\`\`「 Alocation Detect� 」\`\`\`\n\nSorry,  mais je dois supprimer �a parce que l.admin/proprio a activ� l.anti-location dans ce groupe`)
    return KenvBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antidocument && isKenvMedia) {
    if(isKenvMedia === "documentMessage"){
        if (KenvTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygckenv(`\`\`\`「 Document Detect� 」\`\`\`\n\nSorry,  mais je dois supprimer �a parce que l.admin/proprio a activ� l.anti-document dans ce groupe`)
    return KenvBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
      if (db.data.chats[m.chat].anticontact && isKenvMedia) {
    if(isKenvMedia === "contactMessage"){
        if (KenvTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygckenv(`\`\`\`「 Contact Detect� 」\`\`\`\n\nSorry,  mais je dois supprimer �a parce que l.admin/proprio a activ� l.anti-contact dans ce  groupe`)
    return KenvBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        //respond
        if (db.data.chats[m.chat].badword) {
            for (let bak of bad) {
               if (budy === bak) {
                  let baduser = await db.data.users[sender].badword
                  KenvBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			KenvBotInc.sendMessage(from, {text:`\`\`\`「 Mauvais talk Detect� 」\`\`\`\n\n@${m.sender.split("@")[0]}  a send des talks bizarres,  son message a �t� supprim�`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
               }
            }
        }
        //auto download #ctto
        if (db.data.settings[botNumber].autodownload && !m.key.fromMe && !isCmd2) {
try {
if (budy.match(`instagram.com`)) {
await KenvBotInc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/instagram?url=${budy}`)
KenvBotInc.sendMessage(m.chat, { video: { url: anu.result.media}, caption: `Auto Download ✅`}, {quoted: m})
await KenvBotInc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`tiktok.com`)) {
await KenvBotInc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/tiktok?url=${budy}`)
KenvBotInc.sendMessage(m.chat, { video: { url: anu.result.Medium.url}, caption: `Auto Download ✅`}, {quoted: m})
await KenvBotInc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`facebook.com`)) {
await KenvBotInc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/facebook?url=${budy}`)
KenvBotInc.sendMessage(m.chat, { video: { url: anu.result.video_sd}, caption: `Auto Download ✅`}, {quoted: m})
await KenvBotInc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`youtube.com|youtu.be`)) {
await KenvBotInc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/ytmp4?url=${budy}`)
KenvBotInc.sendMessage(m.chat, { video: { url: anu.result.result}, caption: ``}, {quoted: m})
await KenvBotInc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} 
} catch (err) {
await KenvBotInc.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
} 
        
        //autosticker
        if (db.data.settings[botNumber].autosticker) {
        	if (m.key.fromMe) return
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                KenvBotInc.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Sticker auto detect�`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                KenvBotInc.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        
        if (db.data.chats[m.chat].antiliengc) {
            if (budy.match(`chat.whatsapp.com`)) {
               bvl = `\`\`\`「 Lien de Groupe Detect� 」\`\`\`\n\n L.admin a envoy� un lien de groupe, le chef des lieux peut envoyer toutes sortes de liens no stress 😇`
if (isAdmins) return replygckenv(bvl)
if (m.key.fromMe) return replygckenv(bvl)
if (KenvTheCreator) return replygckenv(bvl)
               await KenvBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			KenvBotInc.sendMessage(from, {text:`\`\`\`「 GC Lien Detect� 」\`\`\`\n\nLe lien envoy� par le random @${m.sender.split("@")[0]} a �t� supprim� avec succ�s`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        if (db.data.chats[m.chat].antilien) {
            if (budy.match('http') && budy.match('https')) {
               bvl = `\`\`\`「 Lien Detect� 」\`\`\`\n\nL.admin a envoy� un lien de groupe, le chef des lieux peut envoyer toutes sortes de liens no stress😇`
if (isAdmins) return replygckenv(bvl)
if (m.key.fromMe) return replygckenv(bvl)
if (KenvTheCreator) return replygckenv(bvl)
               await KenvBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			KenvBotInc.sendMessage(from, {text:`\`\`\`「 Lien Detect� 」\`\`\`\n\n Le lien envoy� par le random @${m.sender.split("@")[0]} a �t� supprim� avec succ�s`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        //afk
        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	     for (let jid of mentionUser) {
            let user = db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            replygckenv(`Cesse de le/la tag AFK ${reason ? 'With reason ' + reason : 'no reason'}\nAfk Since ${clockString(new Date - afkTime)}`.trim())
        }
        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            replygckenv(`Tu es retourn� � AFK\nAFK Reason: ${user.afkReason ? user.afkReason : ''}\nAFK Dur�e: ${clockString(new Date - user.afkTime)}`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
//total features
const kenvfeature = () =>{
            var mytext = fs.readFileSync("./SylversBot.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
        
        //download status #ctto
        try {
  const textLower = m.text.toLowerCase();
  if (textLower === 'download' || textLower === 'statusdown' || textLower === 'take' || textLower === 'send') {
    const quotedMessage = m.msg.contextInfo.quotedMessage;
    if (quotedMessage) {
      if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await KenvBotInc.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
       KenvBotInc.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
        replygckenv('*Statuts de t�l�chargement...*');
      }
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await KenvBotInc.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        KenvBotInc.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
        replygckenv('*Statuts de t�l�chargement...*');
      }
    }
  }
} catch (error) {
  console.error("Error in 'send message' handling:", error);
}
        //autoreply
for (let BhosdikaKenv of VoiceNoteKenv) {
if (budy === BhosdikaKenv) {
let audiobuffy = fs.readFileSync(`./KenvFile/audio/${BhosdikaKenv}.mp3`)
KenvBotInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaKenv of StickerKenv){
if (budy === BhosdikaKenv){
let stickerbuffy = fs.readFileSync(`./KenvFile/sticker/${BhosdikaKenv}.webp`)
KenvBotInc.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaKenv of ImageKenv){
if (budy === BhosdikaKenv){
let imagebuffy = fs.readFileSync(`./KenvFile/image/${BhosdikaKenv}.jpg`)
KenvBotInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaKenv of VideoKenv){
if (budy === BhosdikaKenv){
let videobuffy = fs.readFileSync(`./KenvFile/video/${BhosdikaKenv}.mp4`)
KenvBotInc.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
KenvBotInc.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaKenv of ApkKenv) {
if (budy === BhosdikaKenv) {
let buffer = fs.readFileSync(`./KenvFile/apk/${BhosdikaKenv}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
KenvBotInc.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaKenv of ZipKenv) {
if (budy === BhosdikaKenv) {
let buffer = fs.readFileSync(`./KenvFile/zip/${BhosdikaKenv}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
KenvBotInc.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaKenv of DocKenv) {
if (budy === BhosdikaKenv) {
let buffer = fs.readFileSync(`./KenvFile/doc/${BhosdikaKenv}.pdf`)
senddocu(buffer)
}
}

// Response Addlist
if (m.isGroup && isAlreadyResponList(from, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(from, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
KenvBotInc.sendMessage(from, { text: sendResponList(from, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
KenvBotInc.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
} 
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
    userJid: KenvBotInc.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, KenvBotInc.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
KenvBotInc.ev.emit('messages.upsert', msg)
} 

//============= [LIST RESPONCE CHECKING START ]================
        if(m.mtype === "interactiveResponseMessage"){
            console.log("interactiveResponseMessage Detected!")   
            let msg = m.message[m.mtype]  || m.msg
            if(msg.nativeFlowResponseMessage  && !m.isBot  ){ 
                let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}  
                if(id){
                    let emit_msg = { 
                        key : { ...m.key } , // SET RANDOME MESSAGE ID  
                        message:{ extendedTextMessage : { text : id } } ,
                        pushName : m.pushName,
                        messageTimestamp  : m.messageTimestamp || 754785898978
                    }
                    return KenvBotInc.ev.emit("messages.upsert" , { messages : [ emit_msg ] ,  type : "notify"})
                }
            }
        }
//============= [LIST RESPONCE CHECKING END ]================


//math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
	if (m.key.fromMe) return
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await replygckenv(`🎮 Math Quiz 🎮\n\nR�ponse Correcte 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else replygckenv('*Mauvaise R�ponse !*')
        }
        
        //game
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // replygckenv(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) {
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                replygcxeon({
                    '-3': 'Game over',
                    '-2': 'Invalide',
                    '-1': 'Position Invalide',
                    0: 'Position Invalide',
                } [ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) KenvBotInc.sendText(room.x, str, m, {
                mentions: parseMention(str)
            })
            KenvBotInc.sendText(room.o, str, m, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }
        
        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    KenvBotInc.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    KenvBotInc.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih)KenvBotInc.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) KenvBotInc.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) KenvBotInc.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    KenvBotInc.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    replygckenv(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) KenvBotInc.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    replygckenv(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) KenvBotInc.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    KenvBotInc.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    } //end
        
        //user db
        if (isCommand && !isUser) {
kenvverifieduser.push(sender)
fs.writeFileSync('./src/data/role/user.json', JSON.stringify(kenvverifieduser, null, 2))
}
        
        switch (isCommand) {
            case 'addmauvaistalk': case 'addmt':
               if (!KenvTheCreator) return KenvStickOwner()
               if (!groupAdmins) return replygckenv(mess.admin)
               if (args.length < 1) return replygckenv( `Veullez envoyer la commande ${prefix}addmauvaistalk [harsh word]. Example ${prefix}addmauvaistalk salope`)
               bad.push(q)
               fs.writeFileSync('./src/data/function/mauvaistalk.json', JSON.stringify(bad))
               replygckenv('Mauvais talk ajout� avec succ�s!')
            break
            case 'supmauvaistalk': case 'supmt':
               if (!KenvTheCreator) return KenvStickOwner()
               if (!groupAdmins) return replygckenv(mess.admin)
               if (args.length < 1) return replygckenv( `Veuillez envoyer la commande ${prefix}addmauvaistalk [bad word]. Example ${prefix}addmauvaistalk salope`)                 
               bad.splice(q)
               fs.writeFileSync('./src/data/function/mauvaistalk.json', JSON.stringify(bad))
               replygckenv('Mauvais talk supprim� avec succ�s!')
            break 
            case 'suputilisateur':
            case 'supdbutilisateur': {
               if (!KenvTheCreator) return KenvStickOwner()
               let totalusernya = db.data.users[0]
               replygckenv(` ${totalusernya} a �t� supprim� avec succ�s des utilisateurs dans la base de donn�es`)
               db.data.users = []
            }
            break
            case 'resethit':
            case 'resettotalhit': {
               if (!KenvTheCreator) return KenvStickOwner()
               global.db.data.settings[botNumber].totalhit = 0
               replygckenv(mess.done)
            }
            break
            case 'modmenu':{
               if (!KenvTheCreator) return KenvStickOwner()
               if (!text) return replygckenv(`12 types de menu disponibles(s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12)\n Veuillez s�lectionner un\nExemple ${prefix + command} s1`)
               if (text.startsWith('s')) {
                  typemenu = text
                  replygckenv(mess.done)
               } else {
                  replygckenv(`12 types de menu disponibles (s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12)\nVeuillez s�lectionner un\nExemple ${prefix + command} s1`)
               }
            }
            break
            case 'modrep':{
               if (!KenvTheCreator) return KenvStickOwner()
               if (!text) return replygckenv(`4  types de r�ponse disponibles(s1,s2,s3,s4)\nVeuiller selectionner un\nExemple ${prefix+command} s1`)
               if (text.startsWith('s')) {
                  typereply = text
                  replygckenv(mess.done)
               } else {
                  replygckenv(`4 types de response disponibles (s1,s2,s3,s4)\nVeuillez s�lectionner un\nExemple ${prefix+command} s1`)
               }
            }
            break
            case 'statustext': 
            case 'upswtext':
            case 'upswteks': {
               if (!KenvTheCreator) return KenvStickOwner()
               if (!q) return replygckenv('Text?')
               await KenvBotInc.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#FF000000', font: 3, statusJidList: Object.keys(global.db.data.users) })
               replygckenv(mess.done)
            }
            break
            case 'statusvideo':
            case 'upswvideo': {
               if (!KenvTheCreator) return KenvStickOwner()
               if (/video/.test(mime)) {
                  var videosw = await KenvBotInc.downloadAndSaveMediaMessage(quoted)
                  await KenvBotInc.sendMessage('status@broadcast', {
                     video: {
                        url: videosw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users) })
                  await replygckenv(mess.done)
               } else {
                  replygckenv('Veuillez r�pond � une vid�o')
               }
            }
            break
            case 'statusimg':
            case 'statusimage':
            case 'upswimg': {
               if (!KenvTheCreator) return KenvStickOwner()
               if (/image/.test(mime)) {
                  var imagesw = await KenvBotInc.downloadAndSaveMediaMessage(quoted)
                  await KenvBotInc.sendMessage('status@broadcast', {
                     image: {
                        url: imagesw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users)})
                  await replygckenv(mess.done)
               } else {
                  replygckenv('Veuillez r�pond � une  image')
               }
            }
            break
            case 'statusaudio':
            case 'upswaudio': {
               if (!KenvTheCreator) return KenvStickOwner()
               if (/audio/.test(mime)) {
                  var audiosw = await KenvBotInc.downloadAndSaveMediaMessage(quoted)
                  await KenvBotInc.sendMessage('status@broadcast', {
                     audio: {
                        url: audiosw
                     },
                     mimetype: 'audio/mp4',
                     ptt: true
                  }, {
                     backgroundColor: '#FF000000',
                     statusJidList: Object.keys(global.db.data.users)
                  })
                  await replygckenv(mess.done)
               } else {
                  replygckenv('Veuillez r�pond � un audio')
               }
            }
            break
            case 'modimgmenu':
            case 'mim': {
                if (!KenvTheCreator) return KenvStickOwner()
                let delb = await KenvBotInc.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './KenvFile/theme/sylverspic.jpg')
                fs.unlinkSync(delb)
                replygckenv(mess.done)
            }
            break
            case 'modvidmenu':
            case 'mvm': 
            	case 'modgifmenu':
            case 'mgm': {
                if (!KenvTheCreator) return KenvStickOwner()
                let delb = await KenvBotInc.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './KenvFile/theme/Sylvers-bot.mp4')
                fs.unlinkSync(delb)
                replygckenv(mess.done)
            }
            break
            case 'addtitre':{
               if (!KenvTheCreator) return KenvStickOwner()
               if (!text) return replygckenv(`Usage ${prefix + command} num�ro|titre`)
               nonya = text.split('|')[0]
               titlenya = text.split('|')[1]
               let oo = `${nonya}@s.whatsapp.net`
               db.data.users[oo].title = titlenya
               await replygckenv(mess.done)
            }
            break
            case 'suptitre':{
               if (!KenvTheCreator) return KenvStickOwner()
               if (!text) return replygckenv(`Usage ${prefix + command} num�ro`)
               nonya = text.split(',')[0]
               let oo = `${nonya}@s.whatsapp.net`
               db.data.users[oo].title = ''
               await replygckenv(mess.done)
            }
            break
            case 'addlimite':
            case 'mettrelimite':{
                if (!KenvTheCreator) return KenvStickOwner()
                if (!text) return replygckenv(`Usage ${prefix + command} num�ro|limite`)
                usernya = text.split('|')[0]
                limitnya = text.split('|')[1]
                let oo = `${usernya}@s.whatsapp.net`
                db.data.users[oo].limit += limitnya
                replygckenv(mess.done)
            }
            break
            case 'suplimite':{
                if (!KenvTheCreator) return KenvStickOwner()
                if (!text) return replygckenv(`Usage ${prefix + command} num�ro|limit`)
                usernya = text.split('|')[0]
                limitnya = text.split('|')[1]
                if (db.data.users[usernya + '@s.whatsapp.net'].limit < limitnya) return replygckenv(`Sa limite n'est plus que ${limitnya}`)
                db.data.users[usernya + '@s.whatsapp.net'].limit -= limitnya
                replygckenv(mess.done)
            }
            break
            case 'addporteur':
                if (!KenvTheCreator) return KenvStickOwner()
                if (args.length < 2)
                    return replygckenv(`Usage ${prefix + command} @tag time\n${prefix + command} number time\n\nExample : ${prefix + command} @tag 30d`)
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium)
                    }
                    replygckenv("Porteur add avec succ�s")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium)
                    replygckenv("Porteur add avec succ�s")
                }
            break
            case 'supporteur':
                if (!KenvTheCreator) return KenvStickOwner()
                if (args.length < 1) return replygckenv(`Usage ${prefix + command} @tag\n${prefix + command} number\n\nExemple : ${prefix + command} 237656774511`)
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1)
                        fs.writeFileSync("./src/data/role/porteur.json", JSON.stringify(premium))
                    }
                    replygckenv("Porteur supprim� avec succ�s")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1)
                    fs.writeFileSync("./src/data/role/porteur.json", JSON.stringify(premium))
                    replygckenv("Porteur supprim� avec succ�s")
                }
            break
            case 'listporteur': {
                if (!KenvTheCreator) return KenvStickOwner()
                let data = require('./src/data/role/porteur.json')
                let txt = `*------「 LIST PORTEURS 」------*\n\n`
                for (let k of data) {
                    txt += `Num�ro : ${k.id}\n`
                    txt += `Expire le: ${k.expired} ms\n`
                KenvBotInc.sendMessage(m.chat, {
                    text: txt,
                    mentions: k
                }, {
                    quoted: m
                })
                }
            }
            break
case 'addproprio':
if (!KenvTheCreator) return KenvStickOwner()
if (!args[0]) return replygckenv(`Veuillez utiliser ${prefix+command} num�ro\nExemple ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await KenvBotInc.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygckenv(` Veuillez entre un num�ro WhatsApp valide !!!`)
owner.push(bnnd)
fs.writeFileSync('./src/data/role/proprio.json', JSON.stringify(owner))
replygckenv(`Le um�ro ${bnnd} est devenu proprio!!!`)
break
case 'supproprio':
if (!KenvTheCreator) return KenvStickOwner()
if (!args[0]) return replygckzenv(`Veuiller utiliser ${prefix+command} nom\nExemple ${prefix+command} 23656774511`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./src/data/role/proprio.json', JSON.stringify(owner))
replygckenv(`Le random ${ya} a �t� supprim� de la liste des proprio !!!`)
break
case 'lisproprio': {
                let teks = '┌──⭓「 *Liste de proprio* 」\n│\n'
                for (let k of owner) {
                    teks += `│⭔ ${k}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`
                replygckenv(teks)
            }
            break
            case 'supsession':
            case 'balayersession': {
                if (KenvTheCreator) return KenvStickOwner()
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Impossible de scanner le directory: ' + err);
                        return replygckenv('Impossible de scanner le directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Fichier junk ${filteredArray.length} d�tect� \n\n`
                    if (filteredArray.length == 0) return replygckenv(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    replygckenv(teks)
                    await sleep(2000)
                    replygckenv("Suppression du fichier junk...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    replygckenv("Successfully deleted all the trash in the session folder")
                });
            }
            break
            case 'rejoindre':
                try {
                    if (! KenvTheCreator) return KenvStickOwner()
                    if (!text) return replygckenv('Entrer Le lien du groupe!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygckenv('Lien invalide!')
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    KenvBotInc.groupAcceptInvite(result)
                    await replygckenv(`Effectu�`)
                } catch {
                    replygckenv('Int�gration �chou�e')
                }
                break
            case 'getsession':
                if (!KenvTheCreator) return KenvStickOwner()
                replygckenv('Veuillez patienter un moment, nous essayons de retrouver le fichier de votre session ')
                let sesi = fs.readFileSync('./session/creds.json')
                KenvBotInc.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
            break
            case 'monip':
            case 'ipbot':
                if (!KenvTheCreator) return KenvStickOwner()
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        replygckenv("🔎 mon adresse IP publique est : " + ip);
                    })
                })
            break
            case 'request': case 'reportbug': {
	if (!text) return replygckenv(`Exemple : ${
        prefix + command
      } Hey Boss cette commande ne fonctionne pas`)
            textt = `*| REQUEST/BUG |*`
            teks1 = `\n\n*User* : @${
   m.sender.split("@")[0]
  }\n*Request/Bug* : ${text}`
            teks2 = `\n\n*Yo ${pushname}, votre requ�te a �t� transmise � mon proprio*.\n*Veuillez patienter...*`
            for (let i of owner) {
                KenvBotInc.sendMessage(i + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [m.sender],
                }, {
                    quoted: m,
                })
            }
            KenvBotInc.sendMessage(m.chat, {
                text: textt + teks2 + teks1,
                mentions: [m.sender],
            }, {
                quoted: m,
            })

        }
        break
            case 'silence':
                if (!KenvTheCreator) return KenvStickOwner()
                replygckenv(`La r�initialisation va prendre quelques secondes`)
                await sleep(3000)
                process.exit()
            break
            case 'lectureauto':
                if (!KenvTheCreator) return KenvStickOwner()
                if (args.length < 1) return replygckenv(`Exemple ${prefix + command} oui/non`)
                if (q === 'oui') {
                    db.data.settings[botNumber].autoread = true
                    replygckenv(`Lecture auto activ�e avec succ�s ${q}`)
                } else if (q === 'non') {
                    db.data.settings[botNumber].autoread = false
                    replygckenv(`Lecture auto d�sactiv�e avec succ�s ${q}`)
                }
            break
            case 'disponible':
                if (!KenvTheCreator) return KenvStickOwner()
                if (args.length < 1) return replygckenv(`Exemple ${prefix + command} oui/non`)
                if (q === 'oui') {
                    db.data.settings[botNumber].online = true
                    replygckenv(`Disponibilit� activ�e avec succ�s ${q}`)
                } else if (q === 'non') {
                    db.data.settings[botNumber].online = false
                    replygckenv(`Disponibilit� d�sactiv�e avec succ�s${q}`)
                }
            break
            case '�crienregauto':
                if (!KenvTheCreator) return KenvStickOwner()
                if (args.length < 1) return replygckenv(`Exemple ${prefix + command} oui/non`)
                if (q === 'oui') {
                    db.data.settings[botNumber].autorecordtype = true
                    replygckenv(`Ecriture/enregistrement auto activ� avec succ�s ${q}`)
                } else if (q === 'non') {
                    db.data.settings[botNumber].autorecordtype = false
                    replygckenv(`Ecriture/enregistrement auto d�sactiv� avec succ�s ${q}`)
                }
            break
            case 'enregauto':
                if (!KenvTheCreator) return KenvStickOwner()
                if (args.length < 1) return replygckenv(`Exemple ${prefix + command} oui/non`)
                if (q === 'oui') {
                    db.data.settings[botNumber].autorecord = true
                    replygckenv(`Enregistrement auto activ� avec succ�s ${q}`)
                } else if (q === 'non') {
                    db.data.settings[botNumber].autorecord = false
                    replygckenv(`Enregistrement auto d�sactiv� avec succ�s ${q}`)
                }
            break
            case '�critureauto':
                if (!KenvTheCreator) return KenvStickOwner()
                if (args.length < 1) return replygckenv(`Exemple ${prefix + command} oui/non`)
                if (q === 'oui') {
                    db.data.settings[botNumber].autotype = true
                    replygckenv(`Ecriture auto activ�e avec succ�s  ${q}`)
                } else if (q === 'non') {
                    db.data.settings[botNumber].autotype = false
                    replygckenv(`Ecriture auto d�sactiv�e avec succ�s ${q}`)
                }
            break
            case 'autobio':
                if (!KenvTheCreator) return KenvStickOwner()
                if (args.length < 1) return replygckenv(`Exemple ${prefix + command} oui/non`)
                if (q == 'oui') {
                    db.data.settings[botNumber].autobio = true
                    replygckenv(`Autobio activ�e avec succ�s ${q}`)
                } else if (q == 'non') {
                    db.data.settings[botNumber].autobio = false
                    replygckenv(`Autobio d�sactiv�e avec succ�s ${q}`)
                }
            break
            case 'autosticker': case 'autostickergc':
if (!KenvTheCreator) return KenvStickOwner()
                if (args.length < 1) return replygckenv(`Exemple ${prefix + command} oui/non`)
                if (q == 'oui') {
                    db.data.settings[botNumber].autosticker = true
                    replygckenv(`Autosticker activ� avec succ�s ${q}`)
                } else if (q == 'non') {
                    db.data.settings[botNumber].autosticker = false
                    replygckenv(`Autosticker d�sactiv� avec succ�s ${q}`)
                }
            break
            case 't�l�chauto': case 'tlchauto':
if (!KenvTheCreator) return KenvStickOwner()
                if (args.length < 1) return replygckenv(`Exemple ${prefix + command} oui/non`)
                if (q == 'oui') {
                    db.data.settings[botNumber].autodownload = true
                    replygckenv(`T�l�chargement auto activ� avec succ�s ${q}`)
                } else if (q == 'non') {
                    db.data.settings[botNumber].autodownload = false
                    replygckenv(`T�l�chargement auto d�sactiv� avec succ�s ${q}`)
                }
            break
            case 'blocageauto':
                if (!KenvTheCreator) return KenvStickOwner()
                if (args.length < 1) return replygckenv(`Exemple ${prefix + command} oui/non`)
                if (q == 'oui') {
                    db.data.settings[botNumber].autoblocknum = true
                    replygckenv(`Blocage auto activ� avec succ�s ${q}`)
                } else if (q == 'non') {
                    db.data.settings[botNumber].autoblocknum = false
                    replygckenv(`Blocage auto d�sactiv�e avec succ�s ${q}`)
                }
            break
            case 'groupeunik':
            case 'gcunik':
                if (!KenvTheCreator) return KenvStickOwner()
                if (args.length < 1) return replygckenv(`Exemple ${prefix + command} oui/non`)
                if (q == 'oui') {
                    db.data.settings[botNumber].onlygrub = true
                    replygckenv(`Groupe uniquement activ� avec succ�s ${q}`)
                } else if (q == 'non') {
                    db.data.settings[botNumber].onlygrub = false
                    replygckenv(`Groupe uniquement  d�sactiv� avec succ�s ${q}`)
                }
            break
            case 'priv�unik':
            case 'pvunik':
                if (!KenvTheCreator) return KenvStickOwner()
                if (args.length < 1) return replygckenv(`Exemple ${prefix + command} oui/non`)
                if (q == 'oui') {
                    db.data.settings[botNumber].onlypc = true
                    replygckenv(`Pv uniquement activ� avec succ�s ${q}`)
                } else if (q == 'non') {
                    db.data.settings[botNumber].onlypc = false
                    replygckenv(`Pv uniquement d�sactiv� avec succ�s ${q}`)
                }
            break
            case 'camerunik':
            case 'num�rocamerunik':
                if (!KenvTheCreator) return KenvStickOwner()
                if (args.length < 1) return replygckenv(`Exemple ${prefix + command} oui/non`)
                if (q == 'oui') {
                    db.data.settings[botNumber].onlyindia = true
                    replygckenv(`237uniquement activ� avec succ�s ${q}`)
                } else if (q == 'non') {
                    db.data.settings[botNumber].onlyindia = false
                    replygckenv(`237 uniquement d�sactiv�e avec succ�s ${q}`)
                }
            break
            case 'onlyindo':
            case 'onlyindonumber':
                if (!KenvTheCreator) return KenvStickOwner()
                if (args.length < 1) return replygckenv(`Example ${prefix + command} on/off`)
                if (q == 'oui') {
                    db.data.settings[botNumber].onlyindo = true
                    replygckenv(`Successfully Changed Only-Indonesian To ${q}`)
                } else if (q == 'non') {
                    db.data.settings[botNumber].onlyindo = false
                    replygckev(`Successfully Changed Only-Indonesian To ${q}`)
                }
            break
            case 'priv�': {
                if (!KenvTheCreator) return KenvStickOwner()
                KenvBotInc.public = false
                replygcxeon('*Mode priv� activ� avec succ�s*')
            }
            break
            case 'publique': {
                if (!KenTheCreator) return KenvStickOwner()
                KenvBotInc.public = true
                replygckenv('*Mode publique activ� avec succ�s*')
            }
            break
            case 'mode':
                if (!KenvTheCreator) return KenvStickOwner()
                if (args.length < 1) return replygckenv(`Exemple ${prefix + command} publique/priv�`)
                if (q == 'publique') {
                    KenvBotInc.public = true
                    replygcxeon(mess.done)
                } else if (q == 'priv�') {
                    KenvBotInc.public = false
                    replygckenv(mess.done)
                }
            break
            case 'modexif':
            case 'modwm':
                if (!KenvTheCreator) return KenvStickOwner()
                if (!text) return replygckenv(`Exemple : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                replygckenv(`Exif successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                break
                case 'modprefix':
                if (!KenvTheCreator) return KenvStickOwner()
                if (!text) return replygckenv(`Exemple : ${prefix + command} packname|author`)
                global.xprefix = text
                replygcxeon(`Prefix Modifi� avec succ�s pour ${text}`)
                break
                case 'modblocauto':
                if (!KenvTheCreator) return KenvStickOwner()
                if (!text) return replygckenv(`Exemple : ${prefix + command} packname|author`)
                global.autoblocknumber = text
                replygckenv(`Auto-Block number successfully changed to ${text}`)
                break
                case 'modantiforeign':
                if (!KenvTheCreator) return KenvStickOwner()
                if (!text) return replygckenv(`Exemple : ${prefix + command} packname|author`)
                global.antiforeignnumber = text
                replygckenv(`Anti-foreign number successfully changed to ${text}`)
                break
            case 'modbotpp':
            case 'modpp':
            case 'modppbot':
                if (!KenvTheCreator) return KenvStickOwner()
                if (!quoted) return replygckenv(`R�pondre � une image ${prefix + command}`)
                if (!/image/.test(mime)) return replygckenv(`R�pondre � une image ${prefix + command}`)
                if (/webp/.test(mime)) return replygckenv(`R�pondre � une image ${prefix + command}`)
                var medis = await KenvBotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await KenvBotInc.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygckenv(mess.done)
                } else {
                    var memeg = await KenvBotInc.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygckenv(mess.done)
                }
                break
            case 'quitter':
            case 'dehors':
                if (!KenvTheCreator) return KenvStickOwner()
                if (!m.isGroup) return KenvStickGroup()
                replygckenv('A tous, je me casse 🥺')
                await KenvBotInc.groupLeave(m.chat)
            break
            case 'bc':
            case 'broadcast': {
               if (!KenvTheCreator) return KenvStickOwner()
               if (!text) return replygckenv('Text?')
               let teksnya = `${text}\n\n\n\nDate: ${kdate} ${ktime}`
               for (let i of Object.keys(global.db.data.users)) {
               await sleep(1500)
                  if (/image/.test(mime)) {
                     var media = await quoted.download()
                     await KenvBotInc.sendMessage(i, { 
                        image:media,
                        caption: teksnya
                     })
                  } else if (/video/.test(mime)) {
                     var media = await quoted.download()
                     await KenvBotInc.sendMessage(i, {
                        video: media,
                        caption: teksnya
                     })
                  } else if (text) {
                     await KenvBotInc.sendMessage(i, {
                        text: teksnya
                     })
                  }
               }
               replygckenv(`Success ${command} To ${Object.keys(global.db.data.users).length} Users`)
            }
            break
            case 'jpm': case 'post': {
if (!KenvTheCreator) return KenvStickOwner()
if (!text) return replygckenv(`*Utilisation Incorrect Veuillez l.utiliser comme tel*\n${prefix+command} text|pause\n\nReply Image To Send Images to All Groups\nFor a pause, 1000 = 1 second\n\nExemple: ${prefix + command} hey|9000`)
await replygckenv(`Progression`)
let getGroups = await XeonKenv.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await KenvBotInc.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await KenvBotInc.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await KenvBotInc.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await KenvBotInc.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
replygckenv(`Success`)
}
break
            case 'pushcontact': {
    if (!KenvTheCreator) return KenvStickOwner()
      if (!m.isGroup) return replygckenv(`Cette option fonctionne uniquement dans un groupe`)
    if (!text) return replygckenv(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    replygckenv(`Success in pushing the message to contacts`)
    for (let pler of mem) {
    KenvBotInc.sendMessage(pler, { text: q})
     }  
     replygcxeon(`Effectu�`)
      }
      break
case "pushcontactv2":{
if (!KenvTheCreator) return KenvStickOwner()
if (!q) return replygckenv(`Utilisation Incorrect Veuillez l.utiliser comme tel \n${prefix+command} idgc|text`)
await KenvStickWait()
const metadata2 = await KenvBotInc.groupMetadata(q.split("|")[0])
const halss = metadata2.participants
for (let mem of halss) {
KenvBotInc.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] })
await sleep(5000)
}
replygckenv(`Success`)
}
break
case 'pushcontactv3':
if (!KenvTheCreator) return KenvStickOwner()
if (!isGroup) return KenvStickGroup()
if (!text) return replygckenv(
`
*Exemple d'utilisation :*

${prefix+command} pause|text

‼️Reply Image To Send Images to All Participants, For a pause, 1000 = 1 second
`
)
let jedany = text.split("|")[0]
let captny = text.split("|")[1]
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (/image/.test(mime)) {
media = await KenvBotInc.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await KenvBotInc.sendMessage(men, { image: { url: mem }, caption: captny }, { quoted: m })
await sleep(1000)
await KenvBotInc.sendMessage(men, { text: captny  }, { quoted: m })
await sleep(jedany)
} else {
await KenvBotInc.sendMessage(men, { text: captny  }, { quoted: m })
await sleep(jedany)
}
}
replygckenv(`Success`)
break
case 'bloquer': case 'ban': {
		if (!KenvTheCreator) return KenvStickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await KenvBotInc.updateBlockStatus(users, 'block')
		await replygckenv(`Effectu�`)
	}
	break
	case 'debloquer': case 'unban': {
		if (!KenvTheCreator) return KenvStickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await KenvBotInc.updateBlockStatus(users, 'unblock')
		await replygckenv(`Effectu�`)
	}
	break
            case 'bcgc':
            case 'bcgroup': {
                if (!KenvTheCreator) return KenvStickOwner()
                if (!text) return replygckenv(`Text mana?\n\nExemple : ${prefix + command} Besok Libur `)
                let getGroups = await KenvBotInc.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replygckenv(`Sending Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = `${ownername}'s Broadcast\n\n` + '```' + `Message: ${text}\n\n` + '```'
                    KenvBotInc.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: `Sent in ${i.length} Group`,
                                thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                replygckenv(`Successful in sending Broadcast To ${anu.length} Group`)
            }
            break
            case 'addcase':
                if (!KenvTheCreator) return KenvStickOwner()
                try {
                   const getCase = (cases) => {
                      return "case" + `'${cases}'` + fs.readFileSync("SylversBot.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                   }
                   replygckenv(`${getCase(q)}`)
                } catch {
                  replygckenv(`case ${q} not found!`)
                }
            break
            //group
            case 'antimauvaistalk':
            case 'antitoxic':{
		         if (!m.isGroup) return KenvStickGroup()
if (!isBotAdmins) return KenvStickBotAdmin()
if (!isAdmins && !KenvTheCreator) return KenvStickAdmin()
               if (args.length < 1) return replygckenv('oui/non?')
               if (args[0] === 'oui') {
                  db.data.chats[from].badword = true
                  replygckenv(`${command} activ�`)
               } else if (args[0] === 'non') {
                  db.data.chats[from].badword = false
                  replygckenv(`${commad} d�sactiv�`)
               }
               }
            break
            case 'react': {
                if (!KenvTheCreator) return KenvStickOwner()
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                KenvBotInc.sendMessage(m.chat, reactionMessage)
            }
            break
           case 'nsfw': {
if (!m.isGroup) return KenvStickGroup()
if (!isBotAdmins) return KenvStickBotAdmin()
if (!isAdmins && !KenvTheCreator) return KenvStickAdmin()
if (args[0] === "oui") {
if (AntiNsfw) return replygckenv('Activ�')
ntnsfw.push(from)
fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw))
replygcxeon('Hentail dispo dans ce groupe')
var groupe = await KenvBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
KenvBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(ne fonctionne plus) cette option a �t� d�sactiv� dans ce groupe. le porno c'est pas une vie!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "non") {
if (!AntiNsfw) return replygckenv('D�sactiv�')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw))
replygckenv('nsfw d�sactiv� avec succ�s dans ce groupe')
} else {
  await replygckenv(`Veuillez enter une option\n\nExemple: ${prefix + command} oui\nExemple: ${prefix + command} non\n\noui pour activer\nnon pour d�sactiver`)
  }
  }
  break
  case 'userjid':
  case 'jid':
  case 'groupjid':
            case 'id':{
            replygckenv(from)
           }
          break
            case 'antiaudio':{
            	if (!m.isGroup) return KenvStickGroup()
if (!isBotAdmins) return KenvStickBotAdmin()
if (!isAdmins && !KenvTheCreator) return KenvStickAdmin()
               if (args.length < 1) return replygckenv('oui/non?')
               if (args[0] === 'oui') {
                  db.data.chats[from].antiaudio = true
                  replygckenv(`${command} activ�`)
               } else if (args[0] === 'non') {
                  db.data.chats[from].antiaudio = false
                  replygckenv(`${command} d�sactiv�`)
               }
               }
            break
            case 'antiforeign':{
            	if (!m.isGroup) return KenvStickGroup()
if (!isBotAdmins) return KenvStickBotAdmin()
if (!isAdmins && !KenvTheCreator) return KenvStickAdmin()
               if (args.length < 1) return replygckenv('oui/non?')
               if (args[0] === 'oui') {
                  db.data.chats[m.chat].antiforeignnum = true
                  replygckenv(`${command} activ�`)
               } else if (args[0] === 'non') {
                  db.data.chats[m.chat].antiforeignnum = false
                  replygckenv(`${command} d�sactiv�`)
               }
               }
            break
            case 'poll': {
	if (!KenvTheCreator) return KenvStickOwner()
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await replygckenv(
                    `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|Kenv,Sylvers...`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await KenvBotInc.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break
            case 'antipoll':{
            	if (!m.isGroup) return KenvStickGroup()
if (!isBotAdmins) return KenvStickBotAdmin()
if (!isAdmins && !KenvTheCreator) return KenvStickAdmin()
               if (args.length < 1) return replygckenv('oui/non?')
               if (args[0] === 'oui') {
                  db.data.chats[from].antipoll = true
                  replygckenv(`${command} activ�`)
               } else if (args[0] === 'non') {
                  db.data.chats[from].antipoll = false
                  replygckenv(`${command} d�sactiv�`)
               }
               }
            break
            case 'antisticker':{
            	if (!m.isGroup) return KenvStickGroup()
if (!isBotAdmins) return KenvStickBotAdmin()
if (!isAdmins && !KenvTheCreator) return KenvStickAdmin()
               if (args.length < 1) return replygckenv('oui/non?')
               if (args[0] === 'oui') {
                  db.data.chats[from].antisticker = true
                  replygckenv(`${command} activ�`)
               } else if (args[0] === 'non') {
                  db.data.chats[from].antisticker = false
                  replygckenv(`${command} d�sactiv�`)
               }
               }
            break
            case 'antiimage':{
            	if (!m.isGroup) return KenvStickGroup()
if (!isBotAdmins) return KenvStickBotAdmin()
if (!isAdmins && !KenvTheCreator) return KenvStickAdmin()
               if (args.length < 1) return replygckenv('oui/non?')
               if (args[0] === 'oui') {
                  db.data.chats[from].antiimage = true
                  replygckenv(`${command} activ�`)
               } else if (args[0] === 'non') {
                  db.data.chats[from].antiimage = false
                  replygckenv(`${command} d�sactiv�`)
               }
               }
            break
            case 'antivideo':{
            	if (!m.isGroup) return KenvStickGroup()
if (!isBotAdmins) return KenvStickBotAdmin()
if (!isAdmins && !KenvTheCreator) return KenvStickAdmin()
               if (args.length < 1) return replygckenv('oui/non?')
               if (args[0] === 'oui') {
                  db.data.chats[from].antivideo = true
                  replygckenv(`${command} is enabled`)
               } else if (args[0] === 'non') {
                  db.data.chats[from].antivideo = false
                  replygckenv(`${command} d�sactiv�`)
               }
               }
            break
            case 'antivirtex':{
		         if (!m.isGroup) return KenvStickGroup()
if (!isBotAdmins) return KenvStickBotAdmin()
if (!isAdmins && !KenvTheCreator) return KenvStickAdmin()
               if (args.length < 1) return replygckenv('oui/non?')
               if (args[0] === 'oui') {
                  db.data.chats[from].antivirtex = true
                  replygckenv(`${command} activ�`)
               } else if (args[0] === 'non') {
                  db.data.chats[from].antivirtex = false
                  replygckenv(`${command} d�sactiv�`)
               }
               }
            break
            case 'antibot':{
		         if (!m.isGroup) return KenvStickGroup()
if (!isBotAdmins) return KenvStickBotAdmin()
if (!isAdmins && !KenvTheCreator) return KenvStickAdmin()
               if (args.length < 1) return replygckenv('oui/non?')
               if (args[0] === 'oui') {
                  db.data.chats[from].antibot = true
                  replygckenv(`${command} activ�`)
               } else if (args[0] === 'non') {
                  db.data.chats[from].antibot = false
                  replygckenv(`${command} d�sactiv�`)
               }
               }
            break
            case 'readviewonce': {
	if (!m.quoted) return replygckenv(`Reply to view once message`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return replygckenv(`This is not a view once message`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return KenvBotInc.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return KenvBotInc.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break
            case 'antiviewonce':{
		         if (!m.isGroup) return KenvStickGroup()
if (!isBotAdmins) return KenvStickBotAdmin()
if (!isAdmins && !KenvTheCreator) return KenvStickAdmin()
               if (args.length < 1) return replygckenv('oui/non?')
               if (args[0] === 'oui') {
                  db.data.chats[from].antiviewonce = true
                  replygckenv(`${command} activ�`)
               } else if (args[0] === 'non') {
                  db.data.chats[from].antiviewonce = false
                  replygckenv(`${command} d�sactiv�`)
               }
               }
            break
            case 'antispam':{
		         if (!m.isGroup) return KenvStickGroup()
if (!isBotAdmins) return KenvStickBotAdmin()
if (!isAdmins && !KenvTheCreator) return KenvStickAdmin()
               if (args.length < 1) return replygckenv('oui/non?')
               if (args[0] === 'oui') {
                  db.data.chats[from].antispam = true
                  replygckenv(`${command} activ�`)
               } else if (args[0] === 'non') {
                  db.data.chats[from].antispam = false
                  replygckenv(`${command} d�sactiv�`)
               }
               }
            break
            case 'antimedia':{
		         if (!m.isGroup) return KenvStickGroup()
if (!isBotAdmins) return KenvStickBotAdmin()
if (!isAdmins && ! KenvTheCreator) return KenvStickAdmin()
               if (args.length < 1) return replygckenv('oui/non?')
               if (args[0] === 'oui') {
                  db.data.chats[from].antimedia = true
                  replygckenv(`${command} activ�`)
               } else if (args[0] === 'non') {
                  db.data.chats[from].antimedia = false
                  replygckenv(`${command} d�sactiv�`)
               }
               }
            break
            case 'antidocument':{
		         if (!m.isGroup) return KenvStickGroup()
if (!isBotAdmins) return KenvStickBotAdmin()
if (!isAdmins && !KenvTheCreator) return KenvStickAdmin()
               if (args.length < 1) return replygckenv('oui/non?')
               if (args[0] === 'oui') {
                  db.data.chats[from].antidocument = true
                  replygckenv(`${command} activ�`)
               } else if (args[0] === 'non') {
                  db.data.chats[from].antidocument = false
                  replygckenv(`${command} d�sactiv�`)
               }
               }
            break
            case 'anticontact':{
		         if (!m.isGroup) return KenvStickGroup()
if (!isBotAdmins) return KenvStickBotAdmin()
if (!isAdmins && !KenvTheCreator) return KenvStickAdmin()
               if (args.length < 1) return replygckenv('oui/non?')
               if (args[0] === 'oui') {
                  db.data.chats[from].anticontact = true
                  replygckenv(`${command} activ�`)
               } else if (args[0] === 'non') {
                  db.data.chats[from].anticontact = false
                  replygckenv(`${command} d�sactiv�`)
               }
               }
            break
            case 'antialocation':{
		         if (!m.isGroup) return KenvStickGroup()
if (!isBotAdmins) return KenvStickBotAdmin()
if (!isAdmins && !KenvTheCreator) return KenvStickAdmin()
               if (args.length < 1) return replygckenv('oui/non?')
               if (args[0] === 'oui') {
                  db.data.chats[from].antilocation = true
                  replygckenv(`${command} activ�`)
               } else if (args[0] === 'non') {
                  db.data.chats[from].antilocation = false
                  replygckenv(`${command} d�sactiv�`)
               }
               }
            break
            case 'antilien': {
               if (!m.isGroup) return KenvStickGroup()
if (!isBotAdmins) return KenvStickBotAdmin()
if (!isAdmins && !KenvTheCreator) return KenvStickAdmin()
               if (args.length < 1) return replygckenv('oui/non?')
               if (args[0] === 'oui') {
                  db.data.chats[from].antilink = true
                  replygckenv(`${command} activ�`)
               } else if (args[0] === 'non') {
                  db.data.chats[from].antilink = false
                  replygckenv(`${command} d�sactiv�`)
               }
            }
            break
            case 'antilengc': {
               if (!m.isGroup) return KenvStickGroup()
if (!isBotAdmins) return KenvStickBotAdmin()
if (!isAdmins && !KenvTheCreator) return KenvStickAdmin()
               if (args.length < 1) return replygckenv('oui/non?')
               if (args[0] === 'oui') {
                  db.data.chats[from].antilinkgc = true
                  replygckenv(`${command} activ�`)
               } else if (args[0] === 'non') {
                  db.data.chats[from].antilinkgc = false
                  replygckenv(`${command} d�sactiv�`)
               }
            }
            break
            case 'antipromotion': {
               if (!m.isGroup) return KenvStickGroup()
if (!isBotAdmins) return KenvStickBotAdmin()
if (!isAdmins && !KenvTheCreator) return KenvStickAdmin()
               if (args.length < 1) return replygcxeon('oui/non?')
               if (args[0] === 'oui') {
                  db.data.chats[from].antipromotion = true
                  replygckenv(`${command} activ�`)
               } else if (args[0] === 'non') {
                  db.data.chats[from].antipromotion = false
                  replygckenv(`${command} d�sactiv�`)
               }
            }
            break
            case 'bienvenue':
            case 'rip': {
               if (!m.isGroup) return KenvStickGroup()
if (!isAdmins && !KenvTheCreator) return KenvStickAdmin()
               if (args.length < 1) return replygckenv('oui/non?')
               if (args[0] === 'oui') {
                  welcome = true
                  replygckenv(`${command} activ�`)
               } else if (args[0] === 'non') {
                  welcome = false
                  replygckenv(`${command} d�sactiv�`)
               }
            }
            break
            case 'adminevent': {
               if (!m.isGroup) return KenvStickGroup()
if (!isAdmins && !KenvTheCreator) return KenvStickAdmin()
               if (args.length < 1) return replygckenv('oui/non?')
               if (args[0] === 'oui') {
                  adminevent = true
                  replygckenv(`${command} activ�`)
               } else if (args[0] === 'non') {
                  adminevent = false
                  replygckenv(`${command} d�sactiv�`)
               }
            }
            break
case 'groupevent': {
               if (!m.isGroup) return KenvStickGroup()
if (!isAdmins && !KenvTheCreator) return KenvStickAdmin()
               if (args.length < 1) return replygckenv('oui/non?')
               if (args[0] === 'oui') {
                  groupevent = true
                  replygckenv(`${command} activ�`)
               } else if (args[0] === 'non') {
                  groupevent = false
                  replygckenv(`${command} d�sactiv�`)
               }
            }
            break 
            case 'invite': {
	if (!m.isGroup) return KenvStickGroup()
	if (!isBotAdmins) return KenvStickBotAdmin()
if (!text) return replygckenv(`Veuillez entrer le num�ro que vous souhaitez ajouter\n\nExemple :\n*${prefix + command}* 237656774511`)
if (text.includes('+')) return replygckenv(`Toujours entrer le num�roen commen�ant par *+*`)
if (isNaN(text)) return replygckenv(`Toujours entrer le num�ro avec son code de pays`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await KenvBotInc.groupInviteCode(group)
      await KenvBotInc.sendMessage(text+'@s.whatsapp.net', {text: `≡ *INVITATION DE GROUPE*\n\nQuelqu'un vous invite � rejoindre le groupe\n\n${link}`, mentions: [m.sender]})
        replygckenv(` Un lien d'invitation a �t� envoy�`) 
}
break
            case 'fermeture':
                if (!m.isGroup) return KenvStickGroup()
                if (!isAdmins && !KenvTheCreator) return KenvStickAdmin()
                if (!isBotAdmins) return KenvStickBotAdmin()
                if (args[1] == 'seconde') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'heure') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'jour') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygckenv('*veuillez s�lectionner :*\nseconde\nminute\nheure\n\n*Exemple*\n10 seconde')
                }
                replygckenv(`Fermeture ${q} � partir de maintenant`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Fermeture* Groupe ferm� par un admin\nmaintenant seuls les chefs des lieux peuvent �crire`
                    KenvBotInc.groupSettingUpdate(m.chat, 'announcement')
                    replygckenv(close)
                }, timer)
                break
            case 'ouverture':
                if (!m.isGroup) return KenvStickGroup()
                if (!isAdmins && !KenvTheCreator) return replygckenv(mess.admin)
                if (!isBotAdmins) return KenvStickBotAdmin()
                if (args[1] == 'seconde') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'heure') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'jour') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygckenv('*veuillez s�lectionner :*\nseconde\nminute\nheure\n\n*exemple*\n10 seconde')
                }
                replygckenv(`Ouverture ${q} � partir de maintenant`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Ouverture* groupe ouvert par l'admin\n maintenant m�me les randoms peuvent envoyer des messages`
                    KenvBotInc.groupSettingUpdate(m.chat, 'not_announcement')
                    replygckenv(open)
                }, timer)
                break
            case 'off':
                if (!isAdmins && !isGroupOwner && !KenvTheCreator) return KenvStickAdmin()
                if (!m.isGroup) return KenvStickGroup()
                if (!isAdmins && !isGroupOwner && !KenvTheCreator) return KenvStickAdmin()
                if (!isBotAdmins) return KenvStickBotAdmin()
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await KenvBotInc.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
                replygcxeon(mess.done)
                break

                case "idgroup": case "groupid": {
if (!KenvTheCreator) return KenvStickOwner()
let getGroups = await KenvBotInc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LISTE DE GROUPES*\n\nNombre total de groupes : ${anu.length} Groupes\n\n`
for (let x of anu) {
let metadata2 = await KenvBotInc.groupMetadata(x)
teks += `◉ Name : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
replygckenv(teks + `To Use Please Type Command ${prefix}pushcontact idgroup|teks\n\nBefore using, please first copy the group id above`)
}
break
case 'wanumber': case 'nowa': case 'searchno': case 'searchnumber':{
           	if (!text) return replygckenv(`Provide Number with last number x\n\nExample: ${prefix + command} 2376567745X`)
var inputnumber = text.split(" ")[0]
        
        replygckenv(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await KenvBotInc.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await KenvBotInc.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        replygckenv(`${text66}${nobio}${nowhatsapp}`)
        }
break
case 'getcontact': case 'getcon': {
if (!m.isGroup) return KenvStickGroup()
if (!(isGroupAdmins || KenvTheCreator)) return KenvStickAdmin()
kenvbigpp = await KenvBotInc.sendMessage(m.chat, {
    text: `\nGroup: *${groupMetadata.subject}*\nMember: *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000)
KenvBotInc.sendContact(m.chat, participants.map(a => a.id), kenvbigpp)
}
break
case 'savecontact': case 'svcontact':{
if (!m.isGroup) return KenvStickGroup()
if (!(isGroupAdmins || KenvTheCreator)) return KenvStickAdmin()
let cmiggc = await KenvBotInc.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './contacts.vcf'
replygckenv('\nSois patient bro. sauvegarde encours... '+cmiggc.participants.length+' contact')
require('fs').writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
KenvBotInc.sendMessage(m.chat, {
    document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '\nSucceed\nGroup: *'+cmiggc.subject+'*\nContact: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
require('fs').unlinkSync(nmfilect)
}
break
case 'sendcontact': case 'sencontact': {
if (!m.isGroup) return KenvStickGroup()
if (!m.mentionedJid[0]) return replygckenv('\nVeuillez l.utiliser comme tel\n Exemple:.sendcontact @tag|name')
let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
KenvBotInc.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
}
break
case 'contacttag': case 'contag':{
if (!m.isGroup) return KenvStickGroup()
if (!(isGroupAdmins || KenvTheCreator)) return KenvStickAdmin()
if (!m.mentionedJid[0]) return replygckenv('\nVeuillez l.utiliser comme tel\n Exemple:.contacttag @tag|name')
let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let sngContact = {
	displayName: "Contact", contacts: [{displayName: sngTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+sngTak+";;;\nFN:"+sngTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
KenvBotInc.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400})
}
break
            case 'add':
                if (!m.isGroup) return KenvStickGroup()
                if(!KenvTheCreator) return KenvStickOwner()
                if (!isBotAdmins) return KenvStickBotAdmin()
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await KenvBotInc.groupParticipantsUpdate(m.chat, [blockwwww], 'add')
                replygckenv(mess.done)
                break
            case 'promote':
                if (!m.isGroup) return KenvStickGroup()
                if (!isAdmins && !isGroupOwner && !KenvTheCreator) return KenvStickAdmin()
                if (!isBotAdmins) return KenvStickBotAdmin()
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await KenvBotInc.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
                replygckenv(mess.done)
                break
            case 'demote':
                if (!m.isGroup) return KenvStickGroup()
                if (!isAdmins && !isGroupOwner && !KenvTheCreator) return KenvStickAdmin()
                if (!isBotAdmins) return KenvStickBotAdmin()
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await KenvBotInc.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
                replygckenv(mess.done)
                break
            case 'modnamegc':
            case 'modsubject':
                if (!m.isGroup) return KenvStickGroup()
                if (!isAdmins && !isGroupOwner && !KenvTheCreator) return KenvStickAdmin()
                if (!isBotAdmins) return KenvStickBotAdmin()
                if (!text) return replygckenv('Text ?')
                await KenvBotInc.groupUpdateSubject(m.chat, text)
                replygckenv(mess.done)
                break
                case 'userjid':{
          	if(! KenvTheCreator) return KenvStickOwner()
        const groupMetadata = m.isGroup ? await KenvBotInc.groupMetadata(m.chat).catch((e) => {}) : ""
		const participants = m.isGroup ? await groupMetadata.participants : ""
    let textt = `Voici l.adresse jid de toute les participants de_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `${themeemoji} ${mem.id}\n`
        }
      replygckenv(textt)
    }
    break
    case 'creergc': case 'creergroupe': {
if (!KenvTheCreator) return KenvStickOwner()
if (!args.join(" ")) return replygckenv(`Veuillez utiliser ${prefix+command} nom du groupe`)
try {
let cret = await KenvBotInc.groupCreate(args.join(" "), [])
let response = await KenvBotInc.groupInviteCode(cret.id)
const teksop = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}`
KenvBotInc.sendMessage(m.chat, { text:teksop, mentions: await KenvBotInc.parseMention(teksop)}, {quoted:m})
} catch {
	replygckenv(`Erreur`)
	}
}
break
    case 'modbotbio':{
if (!KenvTheCreator) return KenvStickOwner()
if (!text) return replygckenv(`O� est le texte ?\nExemple: ${prefix + command} Sylvers Bot`)
    await KenvBotInc.updateProfileStatus(text)
    replygckenv(`Bio du bot modifi�e avec succ�s`)
    }
    break
    case 'supppgroupe': case 'supppgc': case 'supprippgc': case 'supprippgroupe': {
if (!m.isGroup) return KenvStickGroup()
if (!isAdmins && !KenvTheCreator) return KenvStickAdmin()
if (!isBotAdmins) return KenvStickBotAdmin()
    await KenvBotInc.removeProfilePicture(from)
    }
    break
    case 'supprippbot': case 'supprippbot': {
if (!KenvTheCreator) return KenvStickOwner()
    await KenvBotInc.removeProfilePicture(KenvBotInc.user.id)
    replygckenv(`pp du bot supprim�e avec succ�s`)
    }
    break
            case 'moddesc':
            case 'moddesk':
                if (!m.isGroup) return KenvStickGroup()
                if (!isAdmins && !isGroupOwner && !KenvTheCreator) return KenvStickAdmin()
                if (!isBotAdmins) return KenvStickBotAdmin()
                if (!text) return replygckenv('Text ?')
                await KenvBotInc.groupUpdateDescription(m.chat, text)
                replygckenv(mess.done)
                break
            case 'modppgroupe':
            case 'modppgrupe':
            case 'modppgc':
            case 'modgroupepp':
            case 'modgrupepp':
            case 'modgcpp':
                if (!m.isGroup) return KenvStickGroup()
                if (!isAdmins) return replygcken(mess.admin)
                if (!isBotAdmins) return KenvStickBotAdmin()
                if (!quoted) return replygckenv(`Veuillez repondre � une image${prefix + command}`)
                if (!/image/.test(mime)) return replygckenv(`Veuillez repondre � une image ${prefix + command}`)
                if (/webp/.test(mime)) return replygckenv(`Veuillez repondre � une image ${prefix + command}`)
                var medis = await KenvBotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await KenvBotInc.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygckenv(mess.done)
                } else {
                    var memeg = await KenvBotInc.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygckenv(mess.done)
                }
                break
            case 'cherstous':
            case 'hey':
                if (!m.isGroup) return KenvStickGroup()
                if (!isAdmins && !isGroupOwner && !KenvTheCreator) return KenvStickAdmin()
                if (!isBotAdmins) return KenvStickBotAdmin()
                let me = m.sender
                let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝\n😶 *Tagger :*  @${me.split('@')[0]}\n🌿 *Message : ${q ? q : 'no message'}*\n\n`
                for (let mem of participants) {
                teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
                }
                KenvBotInc.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'tousdehors': {
 if (!m.isGroup) return KenvStickGroup()
 if (!isAdmins && !isGroupOwner && !KenvTheCreator) return KenvStickAdmin()
 if (!isBotAdmins) return KenvStickBotAdmin()
  const kenvkickall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 if (global.welcome === true) {
 welcome = false;
  }
 for (let remove of kenvkickall) {
 await KenvBotInc.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
 await sleep(100);
 }
 replygckenv(`Success`);
}
break
case 'nominations': {
 if (!m.isGroup) return KenvStickGroup()
 if (!isAdmins && !isGroupOwner && !KenvTheCreator) return KenvStickAdmin()
 if (!isBotAdmins) return KenvStickBotAdmin()
  const kenvpromoteall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 for (let promote of kenvpromoteall) {
 await KenvBotInc.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${promote}@s.whatsapp.net` : promote], "promote");
 await sleep(100);
 }
 replygckenv(`Success`);
}
break
case 'd�nominations': {
 if (!m.isGroup) return KenvStickGroup()
 if (!isAdmins && !isGroupOwner && !KenvTheCreator) return KenvStickAdmin()
 if (!isBotAdmins) return KenvStickBotAdmin()
  const kenvdemoteall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 for (let demote of kenvdemoteall) {
 await KenvBotInc.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${demote}@s.whatsapp.net` : demote], "demote");
 await sleep(100);
 }
 replygckenv(`Success`);
}
break
            case '�coutez':
                if (!m.isGroup) return KenvStickGroup()
                if (!isAdmins && !isGroupOwner && !KenvTheCreator) return KenvStickAdmin()
                if (!isBotAdmins) return KenvStickBotAdmin()
                KenvBotInc.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'totag':
                if (!m.isGroup) return KenvStickGroup()
                if (!isBotAdmins) return KenvStickBotAdmin()
                if (!isAdmins) return replygckenv(mess.admin)
                if (!m.quoted) return replygckenv(`Veuillez r�pondre � un fichier ${prefix + command}`)
                KenvBotInc.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
            break
            case 'groupe':
            case 'gc':
                if (!m.isGroup) return KenvStickGroup()
                if (!isAdmins && !isGroupOwner && !KenvTheCreator) return KenvStickAdmin()
                if (!isBotAdmins) return KenvStickBotAdmin()
                if (args[0] === 'ferm�') {
                    await KenvBotInc.groupSettingUpdate(m.chat, 'announcement').then((res) => replygckenv(`Fermeture du groupe`))
                } else if (args[0] === 'Ouvert') {
                    await KenvBotInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replygckenv(`Ouverture du groupe`))
                } else {
                    replygckenv(`Mode ${command}\n\n\nKetik ${prefix + command}ouvert/ferm�`)
                }
            break
            case 'editinfo':
                if (!m.isGroup) return KenvStickGroup()
                if (!isAdmins && !isGroupOwner && !KenvTheCreator) return KenvStickAdmin()
                if (!isBotAdmins) return KenvStickBotAdmin()
                if (args[0] === 'ouvert') {
                    await KenvBotInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => replygckenv(`Info du groupe modifiable`))
                } else if (args[0] === 'ferm�') {
                    await KenvBotInc.groupSettingUpdate(m.chat, 'locked').then((res) => replygckenv(`Info du groupe non modifiable`))
                } else {
                    replygckenv(`Mode ${command}\n\n\nentrez ${prefix + command}ouvert/ferm�`)
                }
            break
            case 'liendugroupe':
            case 'liengroupe':
            case 'liengc':
            case 'gclien':
            case 'groupelien':
            case 'gruopelien':
                if (!m.isGroup) return KenvStickGroup()
                if (!isAdmins && !isGroupOwner && !KenvTheCreator) return KenvStickAdmin()
                if (!isBotAdmins) return KenvStickBotAdmin()
                let response = await KenvBotInc.groupInviteCode(m.chat)
                KenvBotInc.sendText(m.chat, `👥 *GROUP LINK*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '+'+ groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
            break
            case 'modbio':{
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await KenvBotInc.fetchStatus(who)
    replygckenv(bio.status)
  } catch {
    if (text) return replygckenv(`la bio est priv�e veuillez ne pas r�pondre au message d'une autre personne!`)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await KenvBotInc.fetchStatus(who)
      replygckenv(bio.status)
    } catch {
      return replygckenv(`la bio est priv�e veuillez ne pas r�pondre au message d'une autre personne!`)
    }
  }
}
break
        break
        case 'vote': {
            if (!m.isGroup) return KenvStickGroup()
            if (m.chat in vote) return replygckenv(`_There are still votes in this chat!_\n\n*${prefix}supvote* - to delete votes`)
            if (!text) return replygckenv(`Veuillez entrer la raison de votre vote, Exemple: *${prefix + command} Kenv est trop beau*`)
            replygckenv(`Le vot commence!\n\n*${prefix}upvote* - for upvote\n*${prefix}downvote* - for downvote\n*${prefix}checkvote* - to check the vote\n*${prefix}supvote* - to delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `* VOTE *

*Raison:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

Veuillez Entrer 
*${prefix}upvote* - pour cast vote
*${prefix}downvote* -  pour downvote
*${prefix}supvote* - pour supprimer votre vote`
            KenvBotInc.sendMessage(m.chat, {text: teks_vote}, {quoted:m})
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return KenvStickGroup()
            if (!(m.chat in vote)) return replygckenv(`_*pas de vote dans ce groupe!*_\n\n*${prefix}vote* - pour commencer le vote`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replygckenv('Vou avez vot�')
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Raison:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Veuillez entrer 
*${prefix}upvote* - pour upvote
*${prefix}downvote* -  pour downvote
*${prefix}supvote* - pour supprimer votre vote`
            KenvBotInc.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	    }
             break
                case 'downvote': {
            if (!m.isGroup) return KenvStickGroup()
            if (!(m.chat in vote)) return replygckenv(`_*pas de vote dans ce groupe!*_\n\n*${prefix}vote* - pour commencer le vote`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replygckenv('Vous avez vot�')
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Raison:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Veuillez entrer 
*${prefix}upvote* - pour upvote
*${prefix}downvote* -  pour downvote
*${prefix}supvote* - pour supprimer votre vote`
            KenvBotInc.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	}
            break
                 
case 'checkvote':
if (!m.isGroup) return KenvStickGroup()
if (!(m.chat in vote)) return replygckenv(`_*pas de vote dans ce groupe!*_\n\n*${prefix}vote* - pour commenver le vote`)
teks_vote = `* VOTE *

*Raison:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}supvote* - pour supprimer votre votes


©${KenvBotInc.user.id}
`
KenvBotInc.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'supvote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return KenvStickGroup()
            if (!(m.chat in vote)) return replygckenv(`_*pas de group!*_\n\n*${prefix}vote* - pour commencer le vote`)
            delete vote[m.chat]
            replygckenv('Suppression de la session de vote r�ussie')
	    }
            break
break
            case 'r�voque':
            case 'r�initialiserlien':
                if (!m.isGroup) return KenvStickGroup()
                if (!isAdmins && !isGroupOwner && !KenvTheCreator) return KenvStickAdmin()
                if (!isBotAdmins) return KenvStickBotAdmin()
                await KenvBotInc.groupRevokeInvite(m.chat)
                    .then(res => {
                        replygckenv(`R�initialisation r�ussie`)
                    })
            break
                //statuts du bot
            case 'ping': case 'botstatuts': case 'statutsbot': case 'p': {
	const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
	KenvBotInc.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 999999999,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: respon,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
    }
	
	break
	case 'repo': case 'repository': {
  try {
    const [, username, repoName] = botscript.match(/github\.com\/([^/]+)\/([^/]+)/)
    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
    if (response.status === 200) {
      const repoData = response.data
      const formattedInfo = `
${themeemoji} Repository Name: ${repoData.name}
${themeemoji} Description: ${repoData.description}
${themeemoji} Owner: ${repoData.owner.login}
${themeemoji} Stars: ${repoData.stargazers_count}
${themeemoji} Forks: ${repoData.forks_count}
${themeemoji} URL: ${repoData.html_url}
     
 `.trim()
      await KenvBotInc.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 69000,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: formattedInfo,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
    } else {
      await replygckenv(`Impossible de trouver ces informations`)
    }
  } catch (error) {
    console.error(error)
    await replygckenv(`Repository pas disponible`)
  }
}
break
            case 'devporteur':
            case 'porteur': {
                let teks = `Hey ${pushname}👋\n voulez-vous devenir porteur?Veuillez contacter le proprio😉`
                await KenvBotInc.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'rentbot':
                replygckenv(`Veuillez entrer ${prefix}proprio et discutez avec lui`)
                break
            case 'testerapi': {
                replygckenv('Testeur de rapidit�...')
                let cp = require('child_process')
                let {
                    promisify
                } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let {
                        stdout,
                        stderr
                    } = o
                    if (stdout.trim()) KenvBotInc.sendMessage(m.chat, {
                        text: stdout,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                    if (stderr.trim()) KenvBotInc.sendMessage(m.chat, {
                        text: stderr,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'tempsactif':
                let pinga = `Le bot est actif depuis ${runtime(process.uptime())}`
                KenvBotInc.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
case 'sc': case 'script': case 'don': case 'donner': case 'cekupdate': case 'miseajour': case 'cekbot': case 'codesource': {
let me = m.sender
let teks = `*「  ${global.botname} Script 」*\n\nYouTube: ${global.websitex}\nGitHub: ${global.botscript}\n\nHi @${me.split('@')[0]} 👋\n n'oubliez pas de faire un geste🍜 👇 https://i.ibb.co/y6XmZ2b/donate.png`
sendKenvBotIncMessage(from, { 
text: teks,
mentions:[sender],
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./KenvFile/theme/sylverspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
            case 'proprio': {
                KenvBotInc.sendMessage(from, {
                    contacts: {
                        displayName: `${list.length} Contact`,
                        contacts: list
                    }, contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                }, {
                    quoted: m
                })
            }
            break
            //convert
case 's': case 'sticker': case 'stiker': {
if (!quoted) return replygckenv(`Veuillez r�pondre � Images/Videos/Gifs ${prefix+command}\nDur�e de la vid�o 1-9 Secondes`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await KenvBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygckenv('Veuillez repondre � Images/Videos/Gifs ${prefix+command}\nDur�e de la vid�o 1-9 Secondes')
let media = await quoted.download()
let encmedia = await KenvBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
replygckenv(`Veuillez r�pondre Images/Videos/Gifs ${prefix+command}\nDur�e de la vid�o 1-9 Seconds`)
}
}
break
            case 'swm': case 'voler': case 'detourner': case 'prendre':{
if (!isPremium) return replyprem(mess.premium)
if (!args.join(" ")) return replygckenv(`O� est le texte?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
KenvBotInc.downloadAndSaveMediaMessage(quoted, "gifee")
KenvBotInc.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")}, m, { packname: pcknm, author: atnm })
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await KenvBotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygckenv('Maximum 10 Secondes!')
let media = await quoted.download()
let encmedia = await KenvBotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygckenv(`Photo/Video?`)
}
}
break
            case 'enimage':
            case 'enimg': {
                if (!/webp/.test(mime)) return replygckenv(`Veuillez r�pondre � un sticker  *${prefix + command}*`)
                await KenvStickWait()
                let media = await KenvBotInc.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    KenvBotInc.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'enmp4':
            case 'envideo': {
                if (!/webp/.test(mime)) return replygckenv(`Veuilez r�pondre � un sticker anim� *${prefix + command}*`)
                await KenvStickWait()
                let media = await KenvBotInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await KenvBotInc.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'enaud':
            case 'enaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygckenv(`Veuillez r�pondre � Video/Audio ${prefix + command}`)
                await KenvStickWait()
                let media = await KenvBotInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                KenvBotInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'enmp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygckenv(`Veuillez r�pondre � Video/Audio ${prefix + command}`)
                await KenvStickWait()
                let media = await KenvBotInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                KenvBotInc.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `kenvofc.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'envn':
            case 'enptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygckenv(`Veuillez r�pondre � Video/Audio ${prefix + command}`)
                await KenvStickWait()
                let media = await KenvBotInc.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/convertir')
                let audio = await toPTT(media, 'mp4')
                KenvBotInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'engif': {
                if (!/webp/.test(mime)) return replygckenv(`Veuillez r�pondre � un sticker *${prefix + command}*`)
                await KenvStickWait()
                let media = await KenvBotInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await KenvBotInc.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'enurl': {
                await KenvStickWait()
                let media = await KenvBotInc.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    replygckenv(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    replygckenv(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return replygckenv(`Exemple : ${prefix + command} 😅+🤔`)
                if (!emoji2) return replygckenv(`Exemple : ${prefix + command} 😅+🤔`)
                await KenvStickWait()
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await KenvBotInc.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                }
            }
            break
            case 'emojimix2': {
                if (!text) return replygckenv(`Exemple : ${prefix + command} 😅`)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
                for (let res of anu.results) {
                    let encmedia = await KenvBotInc.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                }
            }
            break
            case 'enonce':
            case 'once': {
                if (!quoted) return replygckenv(`Veuillez r�pondre � une Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await KenvBotInc.downloadAndSaveMediaMessage(quoted)
                    KenvBotInc.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: mess.done,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await KenvBotInc.downloadAndSaveMediaMessage(quoted)
                    KenvBotInc.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: mess.done,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/audio/.test(mime)) {
                   bebasap = await KenvBotInc.downloadAndSaveMediaMessage(quoted)
                   KenvBotInc.sendMessage(m.chat, {
                     audio: {
                        url: bebasap
                     },
                     mimetype: 'audio/mpeg',
                     ptt: true,
                     viewOnce: true
                   })
                }
            }
            break
            case 'fliptext': {
                if (args.length < 1) return replygckenv(`Exemple:\n${prefix}fliptext kenvofc`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                replygckenv so(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
            case 'enqr':{
  if (!q) return replygckenv('Veuillez inclure un lien ou un texte!')
   const QrCode = require('qrcode-reader')
   const qrcode = require('qrcode')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await KenvBotInc.sendMessage(from, { image: medi, caption:"Nous sommes ensemble !"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
  case 'volaudio': {
if (!args.join(" ")) return replygckenv(`Exemple: ${prefix + command} 10`)
media = await KenvBotInc.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygckenv('Erreur!')
jadie = fs.readFileSync(rname)
KenvBotInc.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
case 'volvideo': {
if (!args.join(" ")) return replygckenv(`Exemple: ${prefix + command} 10`)
media = await KenvBotInc.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygckenv('Erreur!')
jadie = fs.readFileSync(rname)
KenvBotInc.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
  case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                await KenvStickWait()
                let media = await KenvBotInc.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return replygckenv(err)
                let buff = fs.readFileSync(ran)
                KenvBotInc.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else replygckenv(`Veuillez r�pondre � un audio *${prefix + command}*`)
                } catch (e) {
                replygckenv(e)
                }
                break
                //media db
  case 'listmauvaistalk':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of bad) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${bad.length}*`
replygckenv(teks)
}
break

            //game
            case 'ttc':
            case 'ttt':
            case 'tictactoe': {
                let TicTacToe = require("./lib/tictactoe")
                this.game = this.game ? this.game : {}
                if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replygckenv('Vous �tes d�j� dans le jeu')
                let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
                if (room) {
                    replygckenv('Partenaire de jeu non trouv�')
                    room.o = m.chat
                    room.game.playerO = m.sender
                    room.state = 'PLAYING'
                    let arr = room.game.render().map(v => {
                        return {
                            X: '❌',
                            O: '⭕',
                            1: '1️⃣',
                            2: '2️⃣',
                            3: '3️⃣',
                            4: '4️⃣',
                            5: '5️⃣',
                            6: '6️⃣',
                            7: '7️⃣',
                            8: '8️⃣',
                            9: '9️⃣',
                        } [v]
                    })
                    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Turn @${room.game.currentTurn.split('@')[0]}

Type *surrender* to give up and admit defeat`
                    if (room.x !== room.o) await KenvBotInc.sendText(room.x, str, m, {
                        mentions: parseMention(str)
                    })
                    await KenvBotInc.sendText(room.o, str, m, {
                        mentions: parseMention(str)
                    })
                } else {
                    room = {
                        id: 'tictactoe-' + (+new Date),
                        x: m.chat,
                        o: '',
                        game: new TicTacToe(m.sender, 'o'),
                        state: 'WAITING'
                    }
                    if (text) room.name = text
                    replygcxeon('En attente d'un partenaire' + (text ? ` veuillez entrer la commande ${prefix}${command} ${text}` : ''))
                    this.game[room.id] = room
                }
            }
            break
            case 'supttc':
            case 'supttt': {
                this.game = this.game ? this.game : {}
                try {
                    if (this.game) {
                        delete this.game
                        KenvBotInc.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
                    } else if (!this.game) {
                        replygckenv(`Session TicTacToe🎮 tidak ada`)
                    } else replygckenv('?')
                } catch (e) {
                    replygckenv('rusak')
                }
            }
            break
            case 'suitpvp':
            case 'suit': {
                this.suit = this.suit ? this.suit : {}
                let poin = 10
                let poin_lose = 10
                let timeout = 60000
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) replygckenv(`Veuillez finir votre suit pr�c�dent`)
                if (m.mentionedJid[0] === m.sender) return replygckenv(`Je ne peux pas jouer moi seul!`)
                if (!m.mentionedJid[0]) return replygckenv(`_Avec qui voulez-vous challenger ?_\nTag la personne...\n\nExemple : ${prefix}suit @${owner[1]}`, m.chat, {
                    mentions: [owner[1] + '@s.whatsapp.net']
                })
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return replygckenv(`La personne avec qui vous voulez challenger est d�j� entrain de jouer avec quelqu'un :(`)
                let id = 'suit_' + new Date() * 1
                let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} lance un challenge � @${m.mentionedJid[0].split`@`[0]} pour jouer � suits

@${m.mentionedJid[0].split`@`[0]} Veuillez entrer accept/reject, accept pour accepter ou reject pour rejetter le challenge`
                this.suit[id] = {
                    chat: await KenvBotInc.sendText(m.chat, caption, m, {
                        mentions: parseMention(caption)
                    }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(() => {
                        if (this.suit[id]) KenvBotInc.sendText(m.chat, `_Suit time is up_`, m)
                        delete this.suit[id]
                    }, 60000),
                    poin,
                    poin_lose,
                    timeout
                }
            }
            break
            case 'mathquiz': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) replygckenv(`Il y a toujours une session encours!`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return replygckenv(`Mode: ${Object.keys(modes).join(' | ')}\nUsage example: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                KenvBotInc.sendText(m.chat, `*Quel est le r�sultat de : ${result.soal.toLowerCase()}*?\n\nDur�e: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    replygckenv("Temps expir�\nR�ponse: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                replygckenv(`${m.pushName} *Has Gone AFK*${text ? ': ' + text : ''}`)
            }
            break	
            case 'openai': {
	            if (!q) return replygckenv(`Exemple : ${prefix + command} Qui est le meilleur joueur de tous les temps? et pourquoi Messi ?`)
			      var isiai = await fetchJson(`https://aemt.me/openai?text=${q}`)
			      var isi = isiai.result
		         await replygckenv(isi)
			   }
			   break
    case 'xxqc': {
if (!q) return replygckenv(`📌Exemple: ${prefix + command} pink hallo\n\n꒰ 🖌️ Color List ꒱ ೄྀ࿐ ˊˎ-\n━━━━━━⊱⋆⊰━━━━━━\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nsafron\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver`)
if (text.length > 100) return replygckenv(`Max 100 character.`)
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'blue':
backgroundColor = '#6cace4';
break;
case 'red':
backgroundColor = '#f44336';
break;
case 'green':
backgroundColor = '#4caf50';
break;
case 'yellow':
backgroundColor = '#ffeb3b';
break;
case 'purple':
backgroundColor = '#9c27b0';
break;
case 'darkblue':
backgroundColor = '#0d47a1';
break;
case 'lightblue':
backgroundColor = '#03a9f4'; 
break;
case 'ash':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'black':
backgroundColor = '#000000';
break;
case 'white':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'lightpink':
backgroundColor = '#FFC0CB';
break;
case 'chocolate':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'fire':
backgroundColor = '#B22222';
break;
case 'skyblue':
backgroundColor = '#00BFFF';
break; 
case 'orange':
backgroundColor = '#FF7F50';
break;
case 'brightskyblue':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'lightskyblue':
backgroundColor = '#87CEEB'; 
break; 
case 'seagreen':
backgroundColor = '#20B2AA'; 
break; 
case 'darkred':
backgroundColor = '#8B0000'; 
break; 
case 'orangered':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'violet':
backgroundColor = '#BA55D3'; 
break; 
case 'mossgreen':
backgroundColor = '#00FF7F'; 
break; 
case 'darkgreen':
backgroundColor = '#008000'; 
break; 
case 'navyblue':
backgroundColor = '#191970'; 
break; 
case 'darkorange':
backgroundColor = '#FF8C00'; 
break; 
case 'darkpurple':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'darkmagenta':
backgroundColor = '#8B008B'; 
break;
case 'darkgray':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'darkishgreen':
backgroundColor = '#BDB76B'; 
break;
case 'darkishred':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'darkishgray':
backgroundColor = '#696969'; 
break;
case 'darkishpurple':
backgroundColor = '#483D8B'; 
break;
case 'gold':
backgroundColor = '#FFD700'; 
break;
case 'silver':
backgroundColor = '#C0C0C0'; 
break;
default:
return replygckenv('La couleur s�lectionn�e n.est pas dispo.')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await KenvBotInc.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: message,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
KenvBotInc.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
    case '�phem�re': {
                if (!m.isGroup) return KenvStickGroup()
                if (!isBotAdmins) return KenvStickBotAdmin()
                if (!isAdmins) return KenvStickAdmin()
                if (!text) return replygckenv('Veuillez entrer un valeur oui/non')
                if (args[0] === 'oui') {
                    await KenvBotInc.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
                    await replygckenv(`Effectu�`)
                } else if (args[0] === 'non') {
                    await KenvBotInc.sendMessage(m.chat, { disappearingMessagesInChat: false })
                    await replygckenv(`Effectu�`)
                }
            }
            break
            case 'supprimer': case 'sup': case 'eff':{
            	 let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 KenvBotInc.sendMessage(m.chat, { delete: key })
}
break
    case 'lectautostt':
    case 'lectautostatut':{
             if (!KenvTheCreator) return KenvStickOwner()
               if (args.length < 1) return replygckenv('oui/non?')
               if (args[0] === 'oui') {
                  antiswview = true
                  replygckenv(`${command} activ�`)
               } else if (args[0] === 'non') {
                  antiswview = false
                  replygckenv(`${command} d�sactiv�`)
               }
            }
            break
    case 'antiappel': {
             if (!KenvTheCreator) return KenvStickOwner()
               if (args.length < 1) return replygckenv('oui/non?')
               if (args[0] === 'oui') {
                  anticall = true
                  replygckenv(`${command} activ�`)
               } else if (args[0] === 'non') {
                  anticall = false
                  replygckenv(`${command} d�sactiv�`)
               }
            }
            break
             break
case 'addvideo':{
if (!KenvTheCreator) return KenvStickOwner()
if (args.length < 1) return replygckenv('Quel est le nom de la vid�o ?')
if (VideoKenv.includes(q)) return replygckenv("Ce nom existe d�j�")
let delb = await KenvBotInc.downloadAndSaveMediaMessage(quoted)
VideoKenv.push(q)
await fsx.copy(delb, `./KenvFile/video/${q}.mp4`)
fs.writeFileSync('./KenvFile/database/kenvvideo.json', JSON.stringify(VideoKenv))
fs.unlinkSync(delb)
replygckenv(`Vid�o add avec succ�s\nVeuillez entrer ${prefix}listvideo pour v�rifier`)
}
break
case 'supvideo':{
if (!KenvTheCreator) return KenvStickOwner()
if (args.length < 1) return replygckenv('Veuiller entrer le nom de la vid�o')
if (!VideoKenv.includes(q)) return replygckenv("Ce nom est inexistant dans la base de donn�es")
let wanu = VideoKenv.indexOf(q)
VideoKenv.splice(wanu, 1)
fs.writeFileSync('./KenvFile/database/kenvvideo.json', JSON.stringify(VideoKenv))
fs.unlinkSync(`./KenvFile/video/${q}.mp4`)
replygckenv(`Video ${q} supprime avec succ�s`)
}
break
case 'listvideo':{
let teks = '┌──⭓「 *Video List* 」\n│\n'
for (let x of VideoKenv) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VideoKenv.length}*`
replygckenv(teks)
}
break
case 'addimage':{
if (!KenvTheCreator) return KenvStickOwner()
if (args.length < 1) return replygckenv('Quel est le nom de l.image?')
if (ImageKenv.includes(q)) return replygckenv("Ce nom existe d�j�")
let delb = await KenvBotInc.downloadAndSaveMediaMessage(quoted)
ImageKenv.push(q)
await fsx.copy(delb, `./KenvFile/image/${q}.jpg`)
fs.writeFileSync('./KenvFile/database/kenvimage.json', JSON.stringify(ImageKenv))
fs.unlinkSync(delb)
replygckenv(`Image add avec succ�s\n Veuillez entrer ${prefix}listimage pour v�rifier`)
}
break
case supimage':{
if (!KenvTheCreator) return KenvStickOwner()
if (args.length < 1) return replygckenv('Veuillez entrer le nom de l.image')
if (!ImageKenv.includes(q)) return replygckenv("Le nom entr� n'existe pas")
let wanu = ImageKenv.indexOf(q)
ImageKenv.splice(wanu, 1)
fs.writeFileSync('./KenvFile/database/kenvimage.json', JSON.stringify(ImageKenv))
fs.unlinkSync(`./KenvFile/image/${q}.jpg`)
replygckenv(`Image ${q} supprime avec succ�s`)
}
break
case 'listimage':{
let teks = '┌──⭓「 *Image List* 」\n│\n'
for (let x of ImageKenv) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${ImageKenv.length}*`
replygckenv(teks)
}
break
case 'addsticker':{
if (!KenvTheCreator) return KenvStickOwner()
if (args.length < 1) return replygckenv('Quel est le nom du sticker?')
if (StickerKenv.includes(q)) return replygckenv("Ce nom existe d�j�")
let delb = await KenvBotInc.downloadAndSaveMediaMessage(quoted)
StickerKenv.push(q)
await fsx.copy(delb, `./KenvFile/sticker/${q}.webp`)
fs.writeFileSync('./KenvFile/database/kenvsticker.json', JSON.stringify(StickerKenv))
fs.unlinkSync(delb)
replygckenv(`Sticker add avec succ�s\nVeuillez entrer ${prefix}liststicker pour v�rifier`)
}
break
case 'supsticker':{
if (!KenvTheCreator) return KenvStickOwner()
if (args.length < 1) return replygckenv('Veuillez entrer le nom du sticker')
if (!StickerKenv.includes(q)) return replygckenv("Ce nom n'existe pas")
let wanu = StickerKenv.indexOf(q)
StickerKenv.splice(wanu, 1)
fs.writeFileSync('./KenvFile/database/kenvsticker.json', JSON.stringify(StickerKenv))
fs.unlinkSync(`./KenvFile/sticker/${q}.webp`)
replygckenv(`Sticker ${q} supprim� avec succ�s`)
}
break
case 'liststicker':{
let teks = '┌──⭓「 *Sticker List* 」\n│\n'
for (let x of StickerKenv) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${StickerKenv.length}*`
replygckenv(teks)
}
break
case 'addmsg': {
	if (!KenvTheCreator) return KenvStickOwner()
                if (!m.quoted) return replygckenv('R�pondre au message que vous souhaitez sauvegarder')
                if (!text) return replygckenv(`Exemple : ${prefix + command} nom du fichier`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return replygckenv(`'${text}' enregistr�`)
                msgs[text.toLowerCase()] = quoted.fakeObj
replygckenv(`Enregistr� avec succ�s comme '${text}'
    
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) return replygckenv(`Exemple : ${prefix + command} nom du fichier\n\nVoir la liste des messages avec ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return replygckenv(`'${text}' inexistant`)
                KenvBotInc.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Nom :* ${i.nama}\n${themeemoji} *Veuillez entrer :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        replygckenv(teks)
	    }
	    break 
	case 'supmsg': case 'deletemsg': {
		if (! KenvTheCreator) return KenvStickOwner()
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return replygckenv(`'${text}' inexistant`)
		delete msgs[text.toLowerCase()]
		replygckenv(`'${text}' Supprim� avec succ�s`)
            }
	    break
case 'addvn':{
if (!KenvTheCreator) return KenvStickOwner()
if (args.length < 1) return replygckenv('Quel est le nom de l.audio?')
if (VoiceNoteKenv.includes(q)) return replygckenv("Ce nom existe d�j�")
let delb = await KenvBotInc.downloadAndSaveMediaMessage(quoted)
VoiceNoteKenv.push(q)
await fsx.copy(delb, `./KenvFile/audio/${q}.mp3`)
fs.writeFileSync('./KenvFile/database/kenvvn.json', JSON.stringify(VoiceNoteKenv))
fs.unlinkSync(delb)
replygckenv(`Audio add avec succ�s\nVeuilez v�rifier en entrant ${prefix}listvn`)
}
break
case 'supvn':{
if (!KenvTheCreator) return KenvStickOwner()
if (args.length < 1) return replygckenv('Veuillez entrer le nom de votre voice note')
if (!VoiceNoteKenv.includes(q)) return replygckenv("Ce nom est inexistant")
let wanu = VoiceNoteKenv.indexOf(q)
VoiceNoteKenv.splice(wanu, 1)
fs.writeFileSync('./KenvFile/database/kenvvn.json', JSON.stringify(VoiceNoteKenv))
fs.unlinkSync(`./KenvFile/audio/${q}.mp3`)
replygckenv(`Suppression ${q} r�ussie`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of VoiceNoteKenv) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VoiceNoteKenv.length}*`
replygckenv(teks)
}
break
case 'addzip':{
if (!KenvTheCreator) return KenvStickOwner()

if (args.length < 1) return replygckenv(`Quel est le nom du fichier zip?`)
let teks = `${text}`
{
if (ZipKenv.includes(teks)) return replygckenv("Ce nom existe d�j�")
let delb = await KenvBotInc.downloadAndSaveMediaMessage(quoted)
ZipKenv.push(teks)
await fsx.copy(delb, `./KenvFile/zip/${teks}.zip`)
fs.writeFileSync('./KenvFile/database/zip.json', JSON.stringify(ZipKenv))
fs.unlinkSync(delb)
replygckenv(`Fichier zip add avec succ�s\nVeuillez entrer${prefix}listzip pour verifier`)
}
}
break
case 'supzip':{
if (!KenvTheCreator) return KenvStickOwner()

if (args.length < 1) return replygckenv('Veuillez entrer le nom du fichier zip')
let teks = `${text}`
{
if (!ZipKenv.includes(teks)) return replygckenv("Ce nom est inexistant")
let wanu = ZipKenv.indexOf(teks)
ZipKenv.splice(wanu, 1)
fs.writeFileSync('./KenvFile/database/zip.json', JSON.stringify(ZipKenv))
fs.unlinkSync(`./KenvFile/zip/${teks}.zip`)
replygckenv(`Fichier zip ${teks} supprim� avec succ�s`)
}
}
break
case 'listzip': {

let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
for (let x of ZipKenv) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipKenv.length}*`
replygckenv(teksooooo)
}
break
case 'addapk':{
if (!KenvTheCreator) return KenvStickOwner()

if (args.length < 1) return replygckenv('Quel est le nom de l.apk?')
let teks = `${text}`
{
if (ApkKenv.includes(teks)) return replygckenv("Ce nom existe d�j�")
let delb = await KenvBotInc.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./KenvFile/apk/${teks}.apk`)
fs.writeFileSync('./KenvFile/database/apk.json', JSON.stringify(ApkKenv))
fs.unlinkSync(delb)
replygckenv(`Apk add avec succ�s\nVeuillez entrer ${prefix}listapk pour verifier`)
}
}
break
case 'supapk':{
if (!KenvTheCreator) return KenvStickOwner()

if (args.length < 1) return replygckenv('Le nom de l.apk?')
let teks = `${text}`
{
if (!ApkKenv.includes(teks)) return replygckenv("Ce nom est inexistant")
let wanu = ApkKenv.indexOf(teks)
ApkKenv.splice(wanu, 1)
fs.writeFileSync('./KenvFile/database/apk.json', JSON.stringify(ApkKenv))
fs.unlinkSync(`./KenvFile/apk/${teks}.apk`)
replygckenv(`Apk ${teks} supprim�e avec succ�s`)
}
}
break
case 'listapk': {

let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
for (let x of ApkKenv) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkKenv.length}`
replygckenv(teksoooooo)
}
break
case 'addpdf':{
if (!KenvTheCreator) return KenvStickOwner()

if (args.length < 1) return replygckenv('Quel est le nom du pdf')
let teks = `${text}`
{
if (DocKenv.includes(teks)) return replygckenv("Ce nom existe d�j�")
let delb = await KenvBotInc.downloadAndSaveMediaMessage(quoted)
DocKenv.push(teks)
await fsx.copy(delb, `./KenvFile/doc/${teks}.pdf`)
fs.writeFileSync('./KenvFile/database/doc.json', JSON.stringify(DocKenv))
fs.unlinkSync(delb)
replygckenv(`Pdfadd avec succ�s\n Veuillez entrer ${prefix}listpdf pour v�rifier`)
}
}
break
case 'suppdf':{
if (!KenvTheCreator) return KenvStickOwner()

if (args.length < 1) return replygckenv('Veuillez entrer le nom')
let teks = `${text}`
{
if (!DocKenv.includes(teks)) return replygckenv("Ce nom existe d�j�")
let wanu = DocKenv.indexOf(teks)
DocKenv.splice(wanu, 1)
fs.writeFileSync('./KenvFile/database/doc.json', JSON.stringify(DocKenv))
fs.unlinkSync(`./KenvFile/doc/${teks}.pdf`)
replygckenv(`Pdf ${teks} supprim� avec succ�s`)
}
}
break
case 'listpdf': {

let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
for (let x of DocKenv) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${DocKenv.length}*`
replygckenv(teksoooo)
}
break
case 'friend':
case 'rechercheami':{
await KenvStickWait()
let teman = pickRandom(kenvverifieduser)
setTimeout(() => {
}, 1000)
setTimeout(() => {
replygckenv('R�ussi � avoir une personne')
}, 5000)
setTimeout(() => {
KenvBotInc.sendMessage(from, {text: `Ici @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
}
break
case 'q': case 'pr�c�dent': {
if (!m.quoted) return replygckenv('Veuillez r�pondre � un message !!!')
let kenvquotx= await KenvBotInc.serializeM(await m.getQuotedObj())
if (!kenvquotx.quoted) return replygckenv('Ce message n.a pas �t� envoy� par le bot')
await kenvquotx.quoted.copyNForward(m.chat, true)
}
break
case 'obfus': case 'obfuscate':{
if (!q) return replygckenv(`Exemple ${prefix+command} const kenvbot = require('baileys')`)
let meg = await obfus(q)
replygckenb(`Success
${meg.result}`)
}
break
case 'style': case 'styletexte': {
		let { styletext } = require('./lib/scraper')
		if (!text) return replygckenv('Veuillez entrer le texte !')
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                replygckenv(teks)
	    }
	    break
case 'yt': case 'rechyt': {
                if (!text) return replygcxeon(`Exemple : ${prefix + command} Pourquoi Kenv est trop beau?`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Titre : ${i.title}\n${themeemoji} Vues : ${i.views}\n${themeemoji} Dur�e : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
                }
                KenvBotInc.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
            case 'play':  case 'song': {
if (!text) return replygckenv(`Exemple : ${prefix + command} coller la petite`)
const kenvplaymp3 = require('./lib/ytdl')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await kenvplaymp3.mp3(anup3k.url)
await KenvBotInc.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            sourceUrl: websitex,
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break
case 'ytmp3': case 'ytaudio':
let kenvaudp3 = require('./lib/ytdl')
if (args.length < 1 || !isUrl(text) || !kenvaudp3.isYTUrl(text)) return replygckenv(`O� est le lien ?\nExemple: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`)
let audio = await kenvaudp3.mp3(text)
await KenvBotInc.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }

    },
},{quoted:m})
await fs.unlinkSync(audio.path)
break
case 'ytmp4': case 'ytvideo': {
const kenvvidoh = require('./lib/ytdl')
if (args.length < 1 || !isUrl(text) || !kenvvidoh.isYTUrl(text)) replygckenv(`O� est le lien???\n\nExemple : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
const vid=await kenvvidoh.mp4(text)
const ytc=`
*${themeemoji}Titre:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Dur�e:* ${vid.duration}
*${themeemoji}Qualit�:* ${vid.quality}`
await KenvBotInc.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
case 'git': case 'gitclone':
if (!args[0]) return replygckenv(`O� est le lien ???\nExemple :\n${prefix}${command} https://github.com/kenvofc/Sylvers-md`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygckenv(`Lien invalide!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    KenvBotInc.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replygckenv(mess.error))
break
case'tiktok':{
if (!text) return replygckenv(`Use it by the way: ${prefix+command} *query*\n\n_Example_\n\n${prefix+command} khaby lame`)
KenvBotInc.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://api.junn4.my.id/search/tiktoksearch?query=${text}`)
const capt = anu.result.title
await KenvBotInc.sendMessage(m.chat, { video: { url: anu.result.no_watermark}, caption: `🔖TITLE : ${capt}`}, {quoted: m})
await KenvBotInc.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
}catch (error) {
replygckenv(`Sorry cette vid�o ne peut pas �tre t�l�charg�e\n\nRequest failed with status code *400*`);
}
}
break
case 'tiktokvideo':
case 'tiktokmp4': {
if (!q) return replygckenv( `Exemple : ${prefix + command} lien`)
if (!q.includes('tiktok')) return replygckenv(`Lien Invalide!!`)
require('./lib/tiktok').Tiktok(q).then( data => {
KenvBotInc.sendMessage(m.chat, { caption: `On est ensemble !`, video: { url: data.watermark }}, {quoted:m})
})
}
break
case 'tiktokmp3':
case 'tiktokaudio':{
if (!q) return replygckenv( `Exemple : ${prefix + command} lien`)
if (!q.includes('tiktok')) return replygckenv(`Lien Invalide!!`)
require('./lib/tiktok').Tiktok(q).then( data => {
const kenvtikmp3 = {url:data.audio}
KenvBotInc.sendMessage(m.chat, { audio: kenvtikmp3, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
})
}
break
case'ttslide': case 'tiktokslide':{
if (!text) return replygckenv(`Use it by the way ${prefix+command} *url*\n\n_Example_\n\n${prefix+command} https://vt.tiktok.com/ZSL36LfEP/`)
KenvBotInc.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://aemt.me/download/tiktokslide?url=${text}`)
await KenvBotInc.sendMessage(m.chat, { image: { url: anu.result.data.origin_cover}, caption: ``}, {quoted: m})
await KenvBotInc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await KenvBotInc.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break
case 'google': {
if (!q) return replygcxeon(`Exemple : ${prefix + command} ${botname}`)
await KenvStickWait()
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Titre* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Lien* : ${g.link}\n\n────────────────────────\n\n`
} 
replygckenv(teks)
})
}
break
case 'm�t�o':{
if (!text) return replygckenv('Quelle zone m�t�orologique ?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️M�t�o de ${text}*\n\n`
            textw += `*M�t�o :-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Temps :-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pression:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Pays:-* ${wdata.data.sys.country}\n`

           KenvBotInc.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break
           case 'facebook2': case 'fb2':{
if (!text) return replygckenv(`Veuillez entrer le lien !!!`)
if (!isUrl(args[0])) return replygckenv(`O� est le lien ?`)
await KenvBotInc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
try{
let anu = await fetchJson(`https://aemt.me/download/fbdown?url=${text}`)
KenvBotInc.sendMessage(m.chat, { video: { url: anu.result.url.urls[0].hd }, caption: 'On est ensemble!' }, { quoted: m })
await KenvBotInc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await KenvBotInc.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break
           case 'fb':
           case 'facebook':
case 'facebookvid': {
           if (!args[0]) {
    return replygckenv(`Veuillez entrer le lien de votre vid�o Facebook\n\nEXEMPLE :\n*${prefix + command}* https://fb.watch/pLLTM4AFrO/?mibextid=Nif5oz`)
  }
  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    return replygckenv('Url invalide')
  }
  try {
    const result = await fg.fbdl(args[0]);
    const tex = `
        [ FACEBOOK DL ]
${themeemoji} Titre: ${result.title}`;
    const response = await fetch(result.videoUrl)
    const arrayBuffer = await response.arrayBuffer()
    const videoBuffer = Buffer.from(arrayBuffer)
    KenvBotInc.sendMessage(m.chat, {video: videoBuffer, caption: tex}, {quoted: m})
  } catch (error) {
    replygckenv('Il se peut qu.il s.agisse d.une vid�o priv�e !')
  }
  }
  break
case 'tiktokstalk': {
	  if (!text) return replygckenv(`Nom d'utilisateur? `)
  let res = await fg.ttStalk(args[0])
  let txt = `
┌──「 *TIKTOK STALK* 
──「 *TIKTOK STALK* 
▢ *🔖Num�ro:* ${res.name}
▢ *🔖Utilisateur:* ${res.username}
▢ *👥followers:* ${res.followers}
▢ *🫂following:* ${res.following}
▢ *📌Desc:* ${res.desc}

▢ *🔗 Lien* : https://tiktok.com/${res.username}
└────────────`
  await KenvBotInc.sendMessage(m.chat, {image: { url: res.profile}, caption: txt}, {quoted: m})
}
break
case 'xxxigstalk': {
if (!text) return replygckenv(`Veuillez entrer le nom d'utilisateur IG\n\nExemple: ${prefix + command} kenv8070`)
    let res = await fg.igStalk(text)
    let te = `
┌──「 *STALKING* 
▢ *🔖Nom:* ${res.name} 
▢ *🔖Utilisateur:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Lien* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await KenvBotInc.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
}
break
case 'ghstalk': case 'githubstalk':{
if (!q) return replygckenv(`Exemple ${prefix+command} kenvofc`)
await KenvStickWait()
let githubstalk = require('./lib/scraper')
aj = await githubstalk.githubstalk(`${q}`)
KenvBotInc.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break
case 'npmstalk':{
if (!q) return replygckenv(`Exemple ${prefix+command} kenvapi`)
await KenvStickWait()
let npmstalk = require('./lib/scraper')
eha = await npmstalk.npmstalk(q)
replygckenv(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
case 'ffstalk':{
if (!q) return replygckenv(`Exemple ${prefix+command} 946716486`)
await KenvStickWait()
let ffstalk = require('./lib/scraper')
eeh = await ffstalk.ffstalk(`${q}`)
replygckenv(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
case 'mlstalk': {
if (!q) return replygckenv(`Exemple ${prefix+command} 530793138|8129`)
await KenvStickWait()
let mlstalk = require('./lib/scraper')
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
replygckenv(`*/ Mobile Legend Stalker \\*

Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`)
}
break
case 'spotify':{
	if (!text) return replygckenv(`*Veuillez entrer le titre d'une musique*`)
    try {
        const apiUrl = `https://www.guruapi.tech/api/spotifyinfo?text=${encodeURIComponent(text)}`
        const response = await fetch(apiUrl);
        if (!response.ok) {
            console.log('Error searching for song:', response.statusText)
            return replygckenv('Error searching for song')
        }
        const data = await response.json()
        const coverimage = data.spty.results.thumbnail
        const name = data.spty.results.title
        const slink = data.spty.results.url
        const dlapi = `https://www.guruapi.tech/api/spotifydl?text=${encodeURIComponent(text)}`
        const audioResponse = await fetch(dlapi)
        if (!audioResponse.ok) {
            console.log('Error fetching audio:', audioResponse.statusText)
            return replygckenv('Error fetching audio')
        }
        const audioBuffer = await audioResponse.buffer()
        const tempDir = os.tmpdir()
        const audioFilePath = path.join(tempDir, 'audio.mp3')
        try {
            await fs.promises.writeFile(audioFilePath, audioBuffer)
        } catch (writeError) {
            console.error('Error writing audio file:', writeError)
            return replygckenv( 'Error writing audio file')
        }
        let doc = {
            audio: {
              url: audioFilePath
            },
            mimetype: 'audio/mpeg',
            ptt: true,
            waveform:  [100, 0, 100, 0, 100, 0, 100],
            fileName: "kenvofc",
            contextInfo: {
              mentionedJid: [m.sender],
              externalAdReply: {
                title: `PLAYING TO ${name}`,
                body: botname,
                thumbnailUrl: coverimage,
                sourceUrl: websitex,
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
        }        
        await KenvBotInc.sendMessage(m.chat, doc, { quoted: m })
    } catch (error) {
        console.error('Error fetching Spotify data:', error)
        return replygckenv('*Error*')
    }
    }
    break
case 'imdb':
if (!text) return replygckenv(`Veuiller enter le nom du film ou de la s�rie`)
await KenvStickWait()
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           KenvBotInc.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
            break
            case 'ebinary': {
if (!q) return replygckenv(`Veuiller r�pondre � un texte ${prefix + command}`)
let { eBinary } = require('./lib/binary')
let eb = await eBinary(`${q}`)
replygckenv(eb)
}
break
case 'dbinary': {
if (!q) return replygckenv(`Veuillez r�pondre � un texte ${prefix + command}`)
let { dBinary } = require('./lib/binary')
let db = await dBinary(`${q}`)
replygckenv(db)
}
break
case 'happymod':{
if (!q) return replygckenv(`Exemple ${prefix+command} Sufway surfer mod`)
await KenvStickWait()
let kat = await scp2.happymod(q)
replygckenv(util.format(kat))
}
break
case 'gdrive': {
		if (!args[0]) return replygckenv(`Veuillez entrer le lien Google Drive`)
	await KenvStickWait()
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await replygckenv(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	KenvBotInc.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	replygckenv('Error: V�rifier votre lien ou essayez en un autre') 
  }
}
break
case 'pinterest': {
if (!text) return replygckenv(`Enter Query`)
let { pinterest } = require('./lib/scraper')
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
KenvBotInc.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
}
break
case 'ringtone': {
		if (!text) return replygckenv(`Exemple : ${prefix + command} black rover`)
        let ringtone = require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		KenvBotInc.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case 'couplepp': case 'ppcouple': {
let anu = require('./src/media/randompics/ppcouple.json')
let random = anu[Math.floor(Math.random() * anu.length)]
KenvBotInc.sendMessage(from, { image: { url: random.male }, caption: `Couple pp pour m�le` }, { quoted: m })
KenvBotInc.sendMessage(from, { image: { url: random.female }, caption: `Couple pp pour femelle` }, { quoted: m })
}
break
case 'tofprofile':  case 'photoprofile':
await KenvStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/profile.json'))
var hasil = pickRandom(notnot)
KenvBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
await KenvStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
KenvBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
            case 'remini': {
			if (!quoted) return replygckenv(`O� est la tof?`)
			if (!/image/.test(mime)) return replygckenv(`Veuillez r�pondre � une photo ${prefix + command}`)
			await KenvStickWait()
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			KenvBotInc.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: m})
			}
			break
			case 'definir': 
if (!q) return replygckenv(`Que voulez-vous d�finir ?`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return replygckenv(mess.error)
const reply = `
*${themeemoji} Mot:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Exemple:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   KenvBotInc.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return replygckenv(`*${q}* est un texte invalide`)
    }
    break
                case 'puisje': {
            	if (!text) return replygckenv(`Veuillez entrer votre question\n\nExemple : ${prefix + command} puis-je trouver une bassa.a vierge ?`)
            	let bisa = [`Tu peux`,`Tu ne peux pas`,`Peut-�tre`,`Biensure que tu peux !!!`]
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Can ${text}*\nR�ponse : ${keh}`
            await replygckenv(jawab)
            }
            break
            case 'c.est': {
            	if (!text) return replygckenv(`Veuillez entrer votre question\n\nExemple : ${prefix + command} est-ce normal que lorsqu.une bassa.a dit qu.elle est vierge c.est qu.elle parle de son signe astrologique ?`)
            	let apa = [`Oui`, `Non`, `Peut-�tre`, `En effet`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*C'est ${text}*\nR�ponse : ${kah}`                
            await replygckenv(jawab)
            }
            break
            case 'quand': {
            	if (!text) return replygckenv(`Veuillez entrer votre question\n\nExemple : ${prefix + command} est-ce que les femmes bassa.a vont cesser de nous mettre dans la bouteille ?`)
            	let kapan = ['Dans 5 jours', 'Dans 10 heures', 'Dans 15 jours','Dans 50 ans', 'Dans 25 jours','Dans 30 Jours','Dans 35 jours','Dans 40 jours','Dans 45 jours','Dans 50 jours','Dans 55 jours','Dans 60 jours',' Dans 65 jours','Dans 70 jours','Dans 75 jours','Dans 80 jours','Dans 85 jours','Dans 90 jours','Dans 100 jours','Dans 5 mois', ' Dans 10 mois', 'Dans 15 mois','Dans 20 mois', 'Dans 25 mois','Dans 30 mois','Dans 35 mois','Dans 40 mois','Dans 45 mois','Dans 50 mois','Dans 55 mois','Dans 60 mois','Dans 65 mois','Dans 70 mois', 'Dans 75  mois','Dans 80 mois','Dans 85  mois','Dans 90 mois','Dans100 mois','Dans 1 An','Dans 2  ans','Dans 3 ans','Dans 4  ans','Dans 5 ans','Demain','Apr�s demain']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nR�ponse : ${koh}`                
            await replygckenv(jawab)
            }
            break
case 'quoi': {
            	if (!text) return replygckenv(`Veuillez entrer votre question\n\nExemple : ${prefix + command} est mon nom?`)
            	let lel = [`Demande � ta maman `, `Je ne sais pas`, `Demande a ta ma�tresse du ce1`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `*quoi ${text}*\nR�ponse : ${kah}`                
            await replygckenv(jawab)
            }
            break
case 'o�': {
if (!text) return replygckenv(`Veuillez entrer votre question\n\nExemple : ${prefix + command} est-ce que Kenv peut-il trouver une meuf s�rieuse ?`)
            	let wherelol = [`Dans ta famille`, `Sur mars`, `Sur la lune`,`A mini ferme`,`Demande � ta m�re`,`Ce que tu veux savoir est partout`]
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = `*O� ${text}*\nR�ponse : ${kah}`              
            await replygckenv(jawab)
            }
            break
case 'comment': {
            	if (!text) return replygckenv(`Veuillez entrer votre question\n\nExemple : ${prefix + command} comment coucher avec ta s�ur ?`)
            	let gimana = [`Ummm...`, `Tres facile bro`, `Desol� je ne peux pas t.aider sur ce coup`, `va chercher sur Google`,`Demande � ta m�re`,`Je ne reponds pas`,`la requ�te pourra prendre quelques annn�e sois patient`,`Garde la m�me position je te reviens`,`T.es r�ellement pas au courant 🙄`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `*comment ${text}*\nReponse : ${kah}`                
            await replygckenv(jawab)
            }
            break
case 'rate': {
            	if (!text) return replygckenv(`Exemple : ${prefix + command} Quel est le pourcentage des fille vierges de ce groupe ?`)
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${text}*\nR�ponse : ${kah}%`                
            await replygckenv(jawab)
            }
            break
            case 'tempsactif': {
            	let lowq = `*Le Bot est actif depuis:*\n*${runtime(process.uptime())}*`
                replygckenv(lowq)
            	}
            break
            case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const kenvkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
KenvBotInc.sendMessage(m.chat, { text: xeonkak }, { quoted: m })
break
            case 'ames�ur': {
            if (!m.isGroup) return KenvStickGroup()
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
KenvBotInc.sendMessage(m.chat,
{ text: `👫Ton �me s�ur est

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./KenvFile/theme/sylverspic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
 case 'couple': {
            if (!m.isGroup) return KenvStickGroup()
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
KenvBotInc.sendMessage(m.chat,
{ text: ` incroyable @${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
sortent ensemble ❤️💖👀`,
contextInfo:{
mentionedJid:[orang, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./KenvFile/theme/sylverspic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
                        case 'om': case 'momo': {
                KenvBotInc.sendMessage(m.chat, {caption: mess.success, image: { url: 'https://wa.me/237656774511' }}, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) return replygckenv('Veuillez entrer un titre')
                await KenvStickWait()
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]                
                KenvBotInc.sendMessage(m.chat, {caption: `${themeemoji} Titre : ${result.title}\n${themeemoji} Categorie : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] }} , { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) return replygcxeon('Veuillez entrer un titre')
                await KenvStickWait()
		let { wikimedia } = require('./lib/scraper')
                let anumedia = await wikimedia(text)
                result = anumedia[Math.floor(Math.random() * anumedia.length)]
                KenvBotInc.sendMessage(m.chat, {caption: `${themeemoji} Titre : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`, image: { url: result.image }} , { quoted: m })
            }
            break
            case 'loli': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      KenvBotInc.sendMessage(m.chat, {image:  imageBuffer, caption: `Random ${command} pour vous !✨`}, {quoted: m})    
            }
            break
            case 'waifu': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      KenvBotInc.sendMessage(m.chat, {image:  imageBuffer, caption: `Random ${command} pour vous !✨`}, {quoted: m})    
            }
            break
            case 'neko': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      KenvBotInc.sendMessage(m.chat, {image:  imageBuffer, caption: `Random ${command} pour vous !✨`}, {quoted: m})    
            }
            case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli2': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu2': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
await KenvStickWait()
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
KenvBotInc.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
case 'lyrics': {
if (!text) return replygckenv(`Quel lyric voulez-vous ?\nExemple usage: ${prefix}lyrics Coller la petite`)
await KenvStickWait()
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
replygckenv(`
*Titre :* ${result.title}
*Auteur :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim())
}
break
case 'piquer': {
            	if (!m.isGroup) return KenvStickGroup()
            	if (!text) return replygckenv(`Que voulez-vous piquer ?\nExemple: ${prefix + command} idiot`)
             const groupMetadata = m.isGroup ? await KenvBotInc.groupMetadata(m.chat)
                 .catch((e) => {}) : ""
             const participants = m.isGroup ? await groupMetadata.participants : ""
             let member = participants.map((u) => u.id)
             let me = m.sender
             let kenvshimts = member[Math.floor(Math.random() * member.length)]
             KenvBotInc.sendMessage(from, { 
text: `Le plus *${text}* ici c.est *@${kenvshimts.split("@")[0]}*`,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[kenvshimts],
"externalAdReply": {
"showAdAttribution": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"containsAutoReply": true,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./KenvFile/theme/sylverspic.jpg`),
"sourceUrl": `${wagc}`
}
}
}, { quoted: m })
         }
     break
     case 'dis': case 'tts': case 'gtts':{
if (!text) return replygckenv('Veuillez entrer le texte ?')
            let texttts = text
            const kenvrl = googleTTS.getAudioUrl(texttts, {
                lang: "fr",
                slow: false,
                host: "https://translate.google.com",
            })
            return KenvBotInc.sendMessage(m.chat, {
                audio: {
                    url: kenvrl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`
            }, {
                quoted: m,
            })
        }
        break
    case 'fact': {
    	const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return replygckenv(`${themeemoji} *Fact:* ${data.fact}\n`)   
    }
    break
    case 'quotes':
const quotekevinou = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quotekevinou.data.quote.body}\n\n*${themeemoji} Auteur :* ${quotekevinou.data.quote.author}`
return replygckenv(textquotes)
break
  
        case 'kiss': {

        if (!m.isGroup) return KenvStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygckenv(`Tag une personne`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/kiss`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} kissed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} kissed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          KenvBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        
case 'anime': {
if (!text) return replygcxeon(`Quel anime recherchez-vous ?`)
const malScraper = require('mal-scraper')
await KenvStickWait()
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return replygckenv(`Introuvable`)
let animetxt = `
🎀 *Titre: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 * Nombre Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularit�: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`
                await KenvBotInc.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                }
                break
case 'hentaivid': case 'hentai': case 'hentaivideo': {
	if (!m.isGroup) return KenvStickGroup()
if (!AntiNsfw) return replygckenv(mess.nsfw)
                await KenvStickWait()
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                KenvBotInc.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Titre : ${result912.title}\n${themeemoji} Categorie : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Vues : ${result912.views_count}\n${themeemoji} Partages : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
if (!m.isGroup) return KenvStickGroup()
if (!AntiNsfw) return replygckenv(mess.nsfw)
await KenvStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
KenvBotInc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :
if (!m.isGroup) return KenvStickGroup()
if (!AntiNsfw) return replygckenv(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
KenvBotInc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!m.isGroup) return KenvStickGroup()
if (!AntiNsfw) return replygckenv(mess.nsfw)
await KenvStickWait()
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
KenvBotInc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'gasm':
if (!m.isGroup) return KenvStickGroup()
	if (!AntiNsfw) return replygckenv(mess.nsfw)
await KenvStickWait()						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
KenvBotInc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break  
case 'milf':
if (!m.isGroup) return KenvStickGroup()
await KenvStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/milf.json'))
var kevinouresult = pickRandom(ahegaonsfw)
KenvBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: kevinouresult.url } }, { quoted: m })
break 
case 'animespank':
if (!m.isGroup) returnKenvStickGroup()
if (!AntiNsfw) return replygckenv(mess.nsfw)
await KenvStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await KenvBotInc.sendMessage(m.chat, { caption:  `Nous sommes ensemble!`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'checkmoi':
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ['Fine','Unfriendly','Chapri','Nibba/nibbi','Annoying','Dilapidated','Angry person','Polite','Burden','Great','Cringe','Liar']
					var hoby = ['Cooking','Dancing','Playing','Gaming','Painting','Helping Others','Watching anime','Reading','Riding Bike','Singing','Chatting','Sharing Memes','Drawing','Eating Parents Money','Playing Truth or Dare','Staying Alone']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Yes','No','Very Ugly','Very Handsome']
					var wetak= ['Caring','Generous','Angry person','Sorry','Submissive','Fine','Im sorry','Kind Hearted','Patient','UwU','Top','Helpful']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Nom :* ${pushname}
*Caract�ristiques :* ${sipat}
*Hobby :* ${biho}
*Symp :* ${bhucin}%
*Politesse :* ${senga}%
*Beaut� :* ${chakep}
*Caracteyr :* ${watak}
*Bonne Morals :* ${baik}%
*Mauvaise Morale :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afreux :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`
					try {
ppuser = await KenvBotInc.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppxeon = await getBuffer(ppuser)
KenvBotInc.sendMessage(from, { image: ppxeon, caption: profile, mentions: [bet]},{quoted:m})

break
case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{
if (!q) return replygcxeon(`Exemple : ${prefix+command} Kenv BG77`) 
await KenvStickWait()
const photooxy = require('./lib/photooxy')
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
KenvBotInc.sendMessage(m.chat, { image: { url: dehe }, caption: mess.success}, { quoted: m })
}
break
case 'modcmd': {
                if (!m.quoted) return replygckenv('Veuillez r�pondre � un message')
                if (!m.quoted.fileSha256) return replygckenv('SHA256 Hash Missing')
                if (!text) return replygckenv(`Pour Quelle Commande ?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return replygckenv('Vous n.avez pas la permission de modifier cette commande')
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                replygckenv(`Effectu�!`)
            }
            break
case 'supcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return replygckenv(`No hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return replygckenv('Vous n.avez pas la permission de supprimer cette commande')             
                delete global.db.data.sticker[hash]
                replygckenv(`Effectu�!`)
            }
            break
case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                KenvBotInc.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break 
case 'blockcmd': {
                if (!KenvTheCreator) return KenvStickOwner()
                if (!m.quoted) return replygckenv('Veuillez r�pondre � un message !')
                if (!m.quoted.fileSha256) return replygckenv('SHA256 Hash Missing')
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return replygckenv('Hash introuvable dans la base de donn�es')
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                replygckenv('Effectu�!')
            }
            break
            case 'ss': case 'ssweb': {
if (!q) return replygckenv(`Exemple ${prefix+command} lien`)
await KenvStickWait()
let krt = await scp2.ssweb(q)
KenvBotInc.sendMessage(from,{image:krt.result,caption:mess.succes}, {quoted:m})
}
break
  case 'bible': {
  	const { translate } = require('@vitalets/google-translate-api')
  	const BASE_URL = 'https://bible-api.com'
  try {
    // Extract the chapter number or name from the command text.
    let chapterInput = m.text.split(' ').slice(1).join('').trim()
    if (!chapterInput) {
      throw new Error(`Veuillez specifier le num�ro du chapitre. Exemple : ${prefix + command} jean 3:16`)
    }
    // Encode the chapterInput to handle special characters
    chapterInput = encodeURIComponent(chapterInput);
    // Make an API request to fetch the chapter information.
    let chapterRes = await fetch(`${BASE_URL}/${chapterInput}`)
    if (!chapterRes.ok) {
      throw new Error(`Veuillez specifier le num�ro du chapitre. Exemple : ${prefix + command} jean 3:16`)
    }
    let chapterData = await chapterRes.json();
    let translatedChapterFrench = await translate(chapterData.text, { to: 'fr', autoCorrect: true })
    let bibleChapter = `
📖 *La sainte bible*\n
📜 *Chapitre ${chapterData.reference}*\n
Type: ${chapterData.translation_name}\n
Num�ro du verset: ${chapterData.verses.length}\n
🔮 *Contenu du chapitre :*\n
${translatedChapterFrench.text}\n
    replygckenv(bibleChapter)
  } catch (error) {
    replygckenv(`Error: ${error.message}`)
  }
  }
  break
  case 'dalle': {
  if (!text) return replygckenv(`*Cette commande g�n�re des images � partir d'un texte*\n\n*𝙴*exemple *\n*${prefix + command} Beau personage d.anime*\n*${prefix + command} meuf habill�e en rose*`)
  try {
  	replygckenv('*Veuillez patienter...*')
    const endpoint = `https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=${encodeURIComponent(text)}`
    const response = await fetch(endpoint)
    if (response.ok) {
      const imageBuffer = await response.buffer()
      await KenvBotInc.sendMessage(m.chat, { image: imageBuffer }, {quoted: m})
    } else {
      throw '*Image generation failed*';
    }
  } catch {
    replygckenv('*Nous rencontrons des difficult�s, veuillez r�essayer plus tard.*')
  }
  }
  break
  case 'traduction':{
  	if (!q) return replygckenv(`*O� est le texte ?*\n\n*𝙴xemple*\n*${prefix + command} <language id> <text>*\n*${prefix + command} ja yo wassup*`)
  	const defaultLang = 'fr'
const tld = 'cn'
    let err = `
 *Exemple:*

*${prefix + command}* <id> [text]
*${prefix + command}* en Hello World

≡ *List of supported languages:* 
https://cloud.google.com/translate/docs/languages
`.trim()
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    try {
       let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
       replygckenv(result.text)
    } catch (e) {
        return replygckenv(err)
    } 
    }
    break
  case 'mediafire': {
  	if (!args[0]) return replygckenv(`Veuillez entrer un lien mediafire`)
    if (!args[0].match(/mediafire/gi)) return replygckenv(`Lien incorrecte`)
    const { mediafiredl } = require('@bochilteam/scraper')
    let full = /f$/i.test(command)
    let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
   ≡ *MEDIAFIRE*

▢ *Number:* ${filename}
▢ *Size:* ${filesizeH}
▢ *Extension:* ${ext}
▢ *Uploaded:* ${aploud}
`.trim()
    KenvBotInc.sendMessage(m.chat, { document : { url : url}, fileName : filename, mimetype: ext }, { quoted : m })
    }
    break
case 'tagadmin': case 'listeadmin': case 'admin':{
    	if (!m.isGroup) return KenvStickGroup()
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `   
*Group Admins:*
${listAdmin}
`.trim()
    KenvBotInc.sendMessage(m.chat, {text : text, mentions: [...groupAdmins.map(v => v.id), owner] }, {quoted: m})
}
break
case 'instagram': case 'ig': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': {
	  if (!text) return replygckenv(`Veuillez entrer l'url d'un poste Instagram`)
  let res
  try {
    res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${text}`)
  } catch (error) {
    return replygckenv(`Une erreur en occurence : ${error.message}`)
  }
  let api_response = await res.json()
  if (!api_response || !api_response.data) {
    return replygckenv(`fichier introuvable`)
  }
  const mediaArray = api_response.data;
  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type
    const mediaURL = mediaData.url_download
    let cap = `HERE IS THE ${mediaType.toUpperCase()}`
    if (mediaType === 'video') {
      KenvBotInc.sendMessage(m.chat, {video: {url: mediaURL}, caption: cap}, {quoted: m})
    } else if (mediaType === 'image') {
      KenvBotInc.sendMessage(m.chat, { image: {url: mediaURL}, caption: cap}, {quoted: m})
    }
  }
}
break
case 'gimage':{
if (!text) return replygckenv(`Usage: ${prefix}gimage kenvofc github`);
KenvBotInc.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let ini = await fetchJson(`https://aemt.me/googleimage?query=${q}`);
try{
for (let bing of ini.result) {
await sleep(500)
await KenvBotInc.sendMessage(m.chat, { image: { url: bing }, caption: ``}, {quoted: m})
KenvBotInc.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
}
} catch (e) {
KenvBotInc.sendMessage(m.chat, { react: { text: `✖️`, key: m.key }})
}
}
break
case 'removebg': case 'nobg':{
if (!quoted) return replygckenv(`Veuillez r�pondre � une image/vid�o ${prefix + command}`)
if (!/image/.test(mime)) return replygckenv(`Veuillez r�pondre � une image/vid�o ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/removebg?url=${url}`)
let data = await anu.json()
await KenvBotInc.sendMessage(m.chat, {image: {url: data.url.result}, caption: `Nous sommes ensemble !`}, {quoted: m})
}
break
case'enzombie':{
if (!quoted) return replygckenv(`Veuillez r�pondre � une image/vid�o ${prefix + command}`)
if (!/image/.test(mime)) return replygckenv(`Veuillez r�pondre � une image/vid�o ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/converter/zombie?url=${url}`)
let data = await anu.json()
await KenvBotInc.sendMessage(m.chat, {image: {url: data.url}, caption: `Nous sommes ensemble!`}, {quoted: m})
}
break
case 'capcut':{
if (!text) return replygckenv(`Veuillez entrer le lien\nExemple\nhttps://www.capcut.net/sharevideo?template_id=7239111787965205762&language=in&region=ID`)
await KenvBotInc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
try{  
let anu = await fetchJson(`https://aemt.me/download/capcut?url=${text}`)
KenvBotInc.sendMessage(m.chat, { video: { url: anu.result.video_ori}, caption: `Nous sommes ensemble !`}, {quoted: m})
await KenvBotInc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await KenvBotInc.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break 
case 'smeme': case 'stickermeme': case 'stickmeme': {

if (!/webp/.test(mime) && /image/.test(mime)) {
if (!text) return replygckenv(`Usage: ${prefix + command} text1|text2`)
let { TelegraPh } = require('./lib/uploader')

atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await KenvBotInc.downloadAndSaveMediaMessage(quoted)

mem = await TelegraPh(mee)

meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`

memek = await KenvBotInc.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })


} else {
replygckenv(`Veuillez r�pondre � une image ${prefix + command} text1|text2`)
}
}

break

case'smeta': {
if (!/webp/.test(mime)) return replygckenv('Veuillez r�pondre � un sticker!')
  var stiker = false
    try {
        let [packname, ...author] = q.split('|')
            //var author = (author  []).join('|')
                let mime = m.quoted.mimetype || ''
                        //let img = await q.download()
                            let img = await KenvBotInc.downloadAndSaveMediaMessage(quoted, makeid(5))
                                if (!img) return replygckenv('Veuillez r�pondre � un sticker!')
                                    var stiker = await addExifAvatar(img, `Made by`, `Sylvers Bot`)
                                      } catch (e) {
                                          console.error(e)
                                              if (Buffer.isBuffer(e)) stiker = e
                                                } finally {
                                                    if (stiker) KenvBotInc.sendMessage(m.chat, {
                                                          sticker: stiker
                                                              }, {
                                                                    quoted: m
                                                                        })
                                                                            else return replygckenv('Veuillez r�pondre � un sticker')
                                                                              }
                                                                              }       
                                                                              break
case 'instagram2': case 'ig2':{
if (!text) return replygckenv(`Veuillez entrer le lien!!!`)
if (!isUrl(args[0])) return replygckenv(`O� est le lien?`)
await KenvBotInc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try{   
let anu = await fetchJson(`https://aemt.me/download/igdl?url=${text}`)
KenvBotInc.sendMessage(m.chat, { video: { url: anu.result[0].url }, caption: `Nous sommes ensemble!` }, { quoted: m })
await KenvBotInc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})  
}catch (error) {
await KenvBotInc.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break
case 'spam':
				if (!KenvTheCreator) return KenvStickOwner()
					if (!text) return replygckenv(`Usage ${prefix +command} text|nombre`)
				kenvarg = text.split("|")
				if (!kenvarg) return replygckenv(`Usage ${prefix+ command} text|nombre`)
				if (Number(kenvarg[1]) >= 50) return replygckenv('Max 50!')
				if (isNaN(kenvarg[1])) return replygckenv(`ne vous retenez pas`)
				for (let i = 0; i < xeonarg[1]; i++){
					KenvBotInc.sendMessage(from, {text: kenvarg[0]})
				}
				break
case 'simisimi': case 'simi':
if (!text) replygckenv('Que voulez-vous savoir ?')
let simi = await fetchJson(`https://aemt.me/simi?text=${text}`)
const simi2 = simi.result
KenvBotInc.sendMessage(m.chat, {text: simi2}, {quoted: m})
break
case 'touteffacer': {
if (!KenvTheCreator) return KenvStickOwner()
KenvBotInc.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
}
break
case 'pinchat': {
if (!KenvTheCreator) return KenvStickOwner()
if (m.isGroup) return KenvStickPrivate()
KenvBotInc.chatModify({ pin: true }, m.chat)
}
break
case 'unpinchat': {
if (!KenvTheCreator) return KenvStickOwner()
if (m.isGroup) return KenvStickPrivate()
KenvBotInc.chatModify({ pin: false }, m.chat)
}
break
case 'database': {
if (!KenvTheCreator) return KenvStickOwner()
totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    replygckenv(`*${totalreg} Utilisateur du bot*`)
}
break 
case 'twitter': case 'twitterdl': case 'twitterdl': {
	if (!args[0]) return replygckenv(`📌 Exemple : \n*${prefix + command}* https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19`)
	if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return replygckenv('Lien Invalide!')
          try {
          let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
          let te = ` 
┌─⊷ *TWITTER DL*
▢ Description: ${desc}
└───────────`
KenvBotInc.sendMessage(m.chat, {video: {url:HD}, caption: te}, {quoted: m})
} catch (e) {
  	replygckenv(`Veuillez v�rifier qu.il s.agit bien d.un lien Twitter`)
	}
}
break
case 'xvideodl': case 'xvideosearch': case 'xvideo': case 'xvideos': case 'xvideosdl': {
	if (!m.isGroup) return KenvStickGroup()
	if (!AntiNsfw) return replygckenv(mess.nsfw)
  if (!text) return replygckenv(`Que voulez-vous chercher ?\nUsage: *${prefix + command} <search>*\n\nExemple: ${prefix+command} Baise � l'amphi\nVous pouvez �galement utiliser un lien\nExample: ${prefix+command} link *`);
    if (!text) return replygckenv('Veuillez specifier votre recherche ou alors entrez un lien correct.');
    // Check if the input is a valid Xvideos URL
    const isURL = /^(https?:\/\/)?(www\.)?xvideos\.com\/.+$/i.test(text);
   try {
      if (isURL) {
        // If it's a valid URL, directly download the video
        const result = await xvideosdl(text);
        const { title, url } = result.result; 
        // Send the video file
        const response = await fetch(url);
        const buffer = await response.arrayBuffer();
        KenvBotInc.sendMessage(
          m.chat,
          {video: Buffer.from(buffer),
          caption: `Nous sommes ensemble !!\nTitre: ${title}`} ); 
      } else {
        // If it's not a valid URL, perform a search and display the search results
        const results = await xvideosSearch(text);
        if (results.length === 0) {
          replygckenv('Recherche introuvable.');
        } else {
          const searchResults = results.map((result, index) => {
            return `${index + 1}. *${result.title}*\nDur�e: ${result.duration}\nQualit�: ${result.quality}\nURL: ${result.url}`;
          }).join('\n\n');  
          replygckenv(`*Recherche du r�sultat de "${text}":*\n\n${searchResults}`);
        }
      }
    } catch (error) {
      console.error(error);
      return replygckenv('impossible de rafra�chir la recherche.');
    }
  };
  break
case 'apk': {
	try {
    if (command === 'apk') {
      if (!text) return replygckenv(`*[❗] Veuillez entrer le nom de l.apk*`);
      let data = await download(text);
      if (data.size.replace(' MB', '') > 200) {
        return await KenvBotInc.sendMessage(m.chat, { text: '*[⛔] Le fichier est assez grand.*' }, { quoted: m });
      }
      if (data.size.includes('GB')) {
        return await KenvBotInc.sendMessage(m.chat, { text: '*[⛔] Le fichier est assez grand.*' }, { quoted: m });
      }
      await KenvBotInc.sendMessage(
        m.chat,
        { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null },
        { quoted: m }
      )
    }
  } catch {
    return replygckenv(`*[❗] Une erreur en occurence. veuillez saisir un lien correct.*`);
  }
};
break
case 'cmr-ai': {
	if (!text) return replygckenv(`*• Exemple:* ${prefix + command} halo`)
try {
let gpt = await (await fetch(`https://itzpire.site/ai/gpt-web?q=${text}`)).json()
replygckenv("*[ Indo-Ai ]* " + '\n' + gpt.result)
 } catch(e) {
 return replygckenv("`*Erreur*`")
}
}
break
case 'photoleap': {
	if (!text) return replygckenv(`*• Exemple:* ${usedPrefix + command} blue sea`);
  let currentTime = Date.now();
  let lastUsed = 0;
  if (currentTime - lastUsed < 10000) return replygckenv("Cooldown 10 seconds, try again later");
  lastUsed = currentTime;
  try {
    let gpt = await (await fetch(`https://tti.photoleapapp.com/api/v1/generate?prompt=${text}`)).json();
    KenvBotInc.sendMessage(m.chat, {image: { url: gpt.result_url}, caption: text}, {quoted: m});
  } catch(e) {
    return replygckenv("`*Erreur*`");
  }
}
break
case 'ai':
case 'openai': {
	if (!text) return replygckenv(`*• Exemple:* ${prefix + command} comment baiser ta s�ur le premier soir?`);   
        let name = KenvBotInc.getName(m.sender);
        try {
            const response = await axios.post("https://deepenglish.com/wp-json/ai-chatbot/v1/chat", {
                messages: [
                    { role: "system", content: `${name}` },
                    { role: "user", content: text }
                ]
            });
            const hasil = response.data;   
            replygckenv(hasil.answer);
        } catch (error) {
            console.error("Error fetching data:", error);
            return replygcxeon(erreur);
        }
    }
    break
case 'wikipedia': case 'wiki': {
	if (!text) return replygckenv(` Veuillez entrer l'objet de votre recherche sur Wikipedia`)
	
    try {
	const link =  await axios.get(`https://en.wikipedia.org/wiki/${text}`)
	const $ = cheerio.load(link.data)
	let wik = $('#firstHeading').text().trim()
	let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
	replygckenv(`▢ *Wikipedia*

‣ Titre : ${wik}

${resulw}`)
} catch (e) {
  replygckenv('⚠️ Pas de r�sultat trouv�')
}
}
break
                    case 'menu':
            case 'aide': {
            let ownernya = ownernumber + '@s.whatsapp.net'
            let timestampe = speed()
            let latensie = speed() - timestampe
            let a = db.data.users[sender]
            let me = m.sender
            let kmenu_oh2 = `┌─❖
│ Hey 👋 
└┬❖  ${pushname} 
┌┤✑  ${kevinoutimewisher} 😄${readmore} 
│└────────────┈ ⳹
│
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊 
│𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
│𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│𝗕𝗼𝘁 : ${botname}
│𝗢𝘄𝗻𝗲𝗿 𝗡𝗼: +${ownernumber}
│𝗣𝗿𝗲𝗳𝗶𝘅 :  [ ${kprefix} ]
│𝗠𝗼𝗱𝗲 : ${KenvBotInc.public ? 'Publique' : `Priv�`}
│𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length} User
│𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 : ${global.db.data.settings[botNumber].totalhit} Hit
│𝗧𝗼𝘁𝗮𝗹 𝗖𝗵𝗮𝘁 : ${Object.keys(global.db.data.chats).length} Chat/Gc
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊
│𝗡𝗮𝗺𝗲 : ${pushname}
│𝗡𝘂𝗺𝗯𝗲𝗿 : +${me.split('@')[0]}
│𝗟𝗶𝗺𝗶𝘁 : ${a.limit}
│𝗧𝗶𝘁𝗹𝗲 : ${a.title ? a.title : '-'}
│𝗦𝗲𝗿𝗶𝗮𝗹: ${a.serialNumber}
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝗧𝗶𝗺𝗲 : ${ktime}
│𝗗𝗮𝘁𝗲 : ${kdate}
└┬───────────────── ⳹
   │✑  Veuillez cliquer sur *MENU 🌺*
   │✑  Given *BELOW*
   └─────────────┈ ⳹`
            let kmenu_oh = `┌─❖
│ Hey 👋 
└┬❖  ${pushname} 
┌┤✑  ${kevinoutimewisher} 😄${readmore} 
│└────────────┈ ⳹
│
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊 
│𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
│𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│𝗕𝗼𝘁 : ${botname}
│𝗢𝘄𝗻𝗲𝗿 𝗡𝗼: +${ownernumber}
│𝗣𝗿𝗲𝗳𝗶𝘅 :  [ ${kprefix} ]
│𝗠𝗼𝗱𝗲 : ${KenvBotInc.public ? 'Publique' : `Priv�`}
│𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length} User
│𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 : ${global.db.data.settings[botNumber].totalhit} Hit
│𝗧𝗼𝘁𝗮𝗹 𝗖𝗵𝗮𝘁 : ${Object.keys(global.db.data.chats).length} Chat/Gc
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊
│𝗡𝗮𝗺𝗲 : ${pushname}
│𝗡𝘂𝗺𝗯𝗲𝗿 : +${me.split('@')[0]}
│𝗟𝗶𝗺𝗶𝘁 : ${a.limit}
│𝗧𝗶𝘁𝗹𝗲 : ${a.title ? a.title : '-'}
│𝗦𝗲𝗿𝗶𝗮𝗹: ${a.serialNumber}
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝗧𝗶𝗺𝗲 : ${xtime}
│𝗗𝗮𝘁𝗲 : ${xdate}
└┬───────────────── ⳹
   │✑  Veuillez entrer *MENU*
   │✑  Given *BELOW*
┌└─────────────┈ ⳹
│❏${prefix}toutmenu
│❏${prefix}menurecherche
│❏${prefix} menut�l�chargement 
│❏${prefix}menujeux
│❏${prefix}menufun
│❏${prefix}menuia
│❏${prefix}menugroupe
│❏${prefix}menuproprio
│❏${prefix}menuconvert
│❏${prefix}listemenu
│❏${prefix}menuphotooxy
│❏${prefix}menuanime
│❏${prefix}menunsfw
│❏${prefix}menurandomphoto
│❏${prefix}menurandomvideo
│❏${prefix}menusticker
│❏${prefix}menudatabase
│❏${prefix}menustalker
│❏${prefix}autremenu
└─────────────────┈ ⳹`
if (typemenu === 's1') {
                    KenvBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    KenvBotInc.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    KenvBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, {})
                } else if (typemenu === 's6') {
                    KenvBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'XAF',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 's7') {
                    KenvBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	KenvBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://ibb.co/VHzbSjr',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }}, {
                        quoted: m
                    })
      } else if (typemenu === 's9') {
                	KenvBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://ibb.co/VHzbSjr",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/xeonbotinc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"toutmenu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          })
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('.KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"toutmenu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}propio"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh2
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${botname}",
"rows":[{"header":"TOUTMENU",
"title":" veuillez cliquer",
"description":"Afficher la liste de toutes les options",
"id":"${prefix}toutmenu"},
{"header":" MENU DE RECHERCHE",
"title":"veuillez cliquer",
"description":"Afficher les options de recherche",
"id":"${prefix}menurecherche"},
{"header":"MENU DE T�L�CHARGEMENT",
"title":"veuillez cliquer",
"description":"Afficher les options de t�l�chargement",
"id":"${prefix}menut�l�chargement"},
{"header":"MENU DE JEUX",
"title":"veuillez cliquer",
"description":"Afficher les options de jeux",
"id":"${prefix}menujeux"},
{"header":"MENU FUN",
"title":"Veuillez cliquer",
"description":"Afficher les options fun",
"id":"${prefix}menufun"},
{"header":"MENU IA",
"title":"Veuillez cliquer",
"description":"Afficher les options d'ia",
"id":"${prefix}menuia"},
{"header":"MENU DE GROUPE",
"title":"Veuillez cliquer",
"description":"Afficher les options du groupe",
"id":"${prefix}menugroupe"},
{"header":"MENU PROPRIO",
"title":"Veuillez cliquer",
"description":"Afficher les options du proprio",
"id":"${prefix}menuproprio"},
{"header":"MENU CONVERT",
"title":"Veuillez cliquer",
"description":"Afficher les options de conversion",
"id":"${prefix}menuconvert"},
{"header":"LISTE MENU",
"title":"Veuillez cliquer",
"description":"Afficher la liste de menu",
"id":"${prefix}listemenu"},
{"header":"MENU PHOTOXY",
"title":"Veuillez cliquer",
"description":"Afficher le menu photoxy,
"id":"${prefix}menuphotoxy"},
{"header":"MENUNSFW",
"title":"Veuillez cliquer",
"description":"Afficher les options ",
"id":"${prefix}menunsfw"},
{"header":"MENU ANIME",
"title":"Veuillez cliquer",
"description":"Afficher le menu d'animes",
"id":"${prefix}menuanime"},
{"header":" MENU DE STICKERS",
"title":"Veuillez cliquer",
"description":"Afficher le menu de stickers",
"id":"${prefix}menusticker"},
{"header":"MENU DATABASE",
"title":"Veuillez cliquer",
"description":"Afficher les options de la database",
"id":"${prefix}menudatabase"},
{"header":"MENU STALKER",
"title":"Veuillez cliquer",
"description":"Afficher le menu stalker",
"id":"${prefix}menustalker"},
{"header":"AUTRE MENU",
"title":"Veuillez cliquer",
"description":"Afficher les autres options",
"id":"${prefix}autremenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
            case 'toutmenu': {
let kmenu_oh = `Hey ${pushname}${readmore}\n\n${allmenu(prefix, hituet)}`
if (typemenu === 's1') {
                    KenvBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    KenvBotInc.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    KenvBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, {})
                } else if (typemenu === 's6') {
                    KenvBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'XAF',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 's7') {
                    KenvBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	KenvBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://ibb.co/VHzbSjr',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	KenvBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://ibb.co/VHzbSjr",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Toutmenu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          })
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Toutmenu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"Veuillez cliquer",
"description":"Afficher toutes les options",
"id":"${prefix}toutmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
            case 'menuproprio': {
let kmenu_oh = `Hey ${pushname}${readmore}\n\n${ownermenu(prefix, hituet)}`
if (typemenu === 's1') {
                    KenvBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    KenvBotInc.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    KenvBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, {})
                } else if (typemenu === 's6') {
                    KenvBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'XAF',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 's7') {
                    KenvBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	KenvBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://ibb.co/VHzbSjr',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	KenvBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://ibb.co/VHzbSjr",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          })
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUTMENU",
"title":"Veuillez cliquer",
"description":"Afficher toutes les options",
"id":"${prefix}toutmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'autremenu': {
let kmenu_oh = `Hey ${pushname}${readmore}\n\n${othermenu(prefix, hituet)}`
if (typemenu === 's1') {
                    KenvBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                   KenvBotInc.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                   KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    KenvBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, {})
                } else if (typemenu === 's6') {
                    KenvBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'XAF',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 's7') {
                    KenvBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	KenvBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://ibb.co/VHzbSjr',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	KenvBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://ibb.co/VHzbSjr",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          })
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./Kenv/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"Tout MENU",
"title":"click to display",
"description":"Afficher toutes les options",
"id":"${prefix}toutmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menut�l�chargement': {
let kmenu_oh = `Hey ${pushname}${readmore}\n\n$menut�l�chargemen(prefix, hituet)}`
if (typemenu === 's1') {
                    KenvBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    KenvBotInc.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    KenvBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, {})
                } else if (typemenu === 's6') {
                    KenvBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'XAF',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 's7') {
                    KenvBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	KenvBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://ibb.co/VHzbSjr',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	KenvBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://ibb.co/VHzbSjr",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          })
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"veuillez cliquer",
"description":"Afficher toutes les options",
"id":"${prefix}toutmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menugroupe': {
let kmenu_oh = `Hey ${pushname}${readmore}\n\n${menugroupe(prefix, hituet)}`
if (typemenu === 's1') {
                    KenvBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    KenvBotInc.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    KenvBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, {})
                } else if (typemenu === 's6') {
                    KenvBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'XAF',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 's7') {
                    KenvBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	KenvBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://ibb.co/VHzbSjr',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	KenvBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://ibb.co/VHzbSjr",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          })
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"veuillez cliquer",
"description":"Afficher toutes les options",
"id":"${prefix}toutmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menujeux': {
let kmenu_oh = `Hey ${pushname}${readmore}\n\n${gamemenu(prefix, hituet)}`
if (typemenu === 's1') {
                    KenvBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    KenvBotInc.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    KenvBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, {})
                } else if (typemenu === 's6') {
                    KenvBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'XAF',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 's7') {
                    KenvBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                KenvBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://ibb.co/VHzbSjr',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	KenvBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://ibb.co/VHzbSjr",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          })
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"Veuillez cliquer",
"description":"Afficher toutes les options",
"id":"${prefix}toutmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menufun': {
let kmenu_oh = `Hey ${pushname}${readmore}\n\n${menufun(prefix, hituet)}`
if (typemenu === 's1') {
                    KenvBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    KenvBotInc.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    KenvBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, {})
                } else if (typemenu === 's6') {
                    KenvBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'XAF',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 's7') {
                    KenvBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	KenvBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://ibb.co/VHzbSjr',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	KenvBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://ibb.co/VHzbSjr",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          })
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"Veuillez cliquer",
"description":"Afficher toutes les options",
"id":"${prefix}toutmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menustalker': {
let kmenu_oh = `Hey ${pushname}${readmore}\n\n${menustalker(prefix, hituet)}`
if (typemenu === 's1') {
                    KenvBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    KenvBotInc.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    KenvBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, {})
                } else if (typemenu === 's6') {
                    KenvBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'XAF',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 's7') {
                    KenvBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	KenvBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://ibb.co/VHzbSjr',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	KenvBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://ibb.co/VHzbSjr",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: xmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          })
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toumenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"Veuillez cliquer",
"description":"Afficher toutes les options",
"id":"${prefix}toutmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menuphotooxy': {
let kmenu_oh = `Hey ${pushname}${readmore}\n\n${photooxymenu(prefix, hituet)}`
if (typemenu === 's1') {
                    KenvBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    KenvBotInc.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    KenvBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, {})
                } else if (typemenu === 's6') {
                    KenvBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'XAF',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 's7') {
                    KenvBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	KenvBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://ibb.co/VHzbSjr',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	KenvBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://ibb.co/VHzbSjr",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          })
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"click to display",
"description":"Afficher toutes les options",
"id":"${prefix}toutmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menunsfw': {
let kmenu_oh = `Hey ${pushname}${readmore}\n\n${nsfwmenu(prefix, hituet)}`
if (typemenu === 's1') {
                    KenvBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    KenvBotInc.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    KenvBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, {})
                } else if (typemenu === 's6') {
                    KenvBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'XAF',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 's7') {
                    KenvBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	KenvBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://ibb.co/VHzbSjr',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	KenvBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://ibb.co/VHzbSjr",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          })
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"Veuillez cliquer",
"description":"Afficher toutes les options",
"id":"${prefix}toutmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menuanime': {
let kmenu_oh = `Hey ${pushname}${readmore}\n\n${animemenu(prefix, hituet)}`
if (typemenu === 's1') {
                    KenvBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    KenvBotInc.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    KenvBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, {})
                } else if (typemenu === 's6') {
                    KenvBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'XAF',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 's7') {
                    KenvBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	KenvBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://ibb.co/VHzbSjr',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	KenvBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://ibb.co/VHzbSjr",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          })
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"Veuillez cliquer",
"description":"Afficher toutes les options",
"id":"${prefix}toutmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menusticker': {
let kmenu_oh = `Hey ${pushname}${readmore}\n\n${stickermenu(prefix, hituet)}`
if (typemenu === 's1') {
                    KenvBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    KenvBotInc.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    KenvBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, {})
                } else if (typemenu === 's6') {
                    KenvBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'XAF',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 's7') {
                    KenvBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	KenvBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://ibb.co/VHzbSjr',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	KenvBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://ibb.co/VHzbSjr",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Toutmenu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          })
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"Veuillez cliquer",
"description":"Afficher toutes les options",
"id":"${prefix}toutmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menudatabase': {
let kmenu_oh = `Hey ${pushname}${readmore}\n\n${databasemenu(prefix, hituet)}`
if (typemenu === 's1') {
                    KenvBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    KenvBotInc.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    KenvBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, {})
                } else if (typemenu === 's6') {
                    KenvBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'XAF',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 's7') {
                    KenvBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	KenvBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://ibb.co/VHzbSjr',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	KenvBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://ibb.co/VHzbSjr",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Toutmenu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          })
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"Tout MENU",
"title":"Veuillez cliquer",
"description":"Afficher toutes les options",
"id":"${prefix}toutmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menurecherche': {
let kmenu_oh = `Hey ${pushname}${readmore}\n\n${searchmenu(prefix, hituet)}`
if (typemenu === 's1') {
                    KenvBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    KenvBotInc.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    KenvBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, {})
                } else if (typemenu === 's6') {
                    KenvBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'XAF',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 's7') {
                    KenvBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	KenvBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://ibb.co/VHzbSjr',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	KenvBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://ibb.co/VHzbSjr",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          })
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"Veuillez cliquer",
"description":"Afficher toutes les options",
"id":"${prefix}toutmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break

case 'menuia': {
let kmenu_oh = `Hey ${pushname}${readmore}\n\n${aimenu(prefix, hituet)}`
if (typemenu === 's1') {
                    KenvBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    KenvBotInc.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    KenvBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, {})
                } else if (typemenu === 's6') {
                    KenvBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'XAF',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 's7') {
                    KenvBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	KenvBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://ibb.co/VHzbSjr',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	KenvBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://ibb.co/VHzbSjr",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          })
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"Veuillez cliquer",
"description":"Afficher toutes les options",
"id":"${prefix}toutmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'listemenu': {
let kmenu_oh = `Hey ${pushname}${readmore}\n\n${listemenu(prefix, hituet)}`
if (typemenu === 's1') {
                    KenvBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    KenvBotInc.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    KenvBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, {})
                } else if (typemenu === 's6') {
                    KenvBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'XAF',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 's7') {
                    KenvBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	KenvBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://ibb.co/VHzbSjr',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	KenvBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://ibb.co/VHzbSjr",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          })
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: XeonBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"Veuillez cliquer",
"description":"Afficher toutes les options",
"id":"${prefix}toutmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
case 'menuconvert': {
let kmenu_oh = `Hey ${pushname}${readmore}\n\n${menuconvert(prefix, hituet)}`
if (typemenu === 's1') {
                    KenvBotInc.sendMessage(m.chat, {
                        image: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's2') {
                    KenvBotInc.sendMessage(m.chat, {
                        text: kmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 's3') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's4') {
                    KenvBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
                        caption: kmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 's5') {
                    KenvBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: kmenu_oh
                        }
                    }, {})
                } else if (typemenu === 's6') {
                    KenvBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'XAF',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: kmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 's7') {
                    KenvBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: kmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./KenvFile/theme/sylverspic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 's8') {
                	KenvBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
      gifPlayback: true,
      caption: kmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://ibb.co/VHzbSjr',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 's9') {
                	KenvBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./KenvFile/theme/Sylvers-bot.mp4'),
caption: kmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://ibb.co/VHzbSjr",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} else if (typemenu === 's10') {
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ownername
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: kmenu_oh,
            subtitle: themeemoji,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
           ],
          })
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
} else if (typemenu === 's11') {
let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: kmenu_oh
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: botname
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
             {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },              
              {
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Tout menu 🗂️","id":"${prefix}toutmenu"}`
   },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              }
                                  ],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        } else if (typemenu === 's12') {
        let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: kmenu_oh
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./KenvFile/theme/sylverspic.jpg')}, { upload: KenvBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"MENU 🌺",
"sections":[{"title":"${ownername}",
"highlight_label":"${botname}",
"rows":[{"header":"TOUT MENU",
"title":"Veuillez cliquer",
"description":"Afficher toutes les options",
"id":"${prefix}toutmenu"}]
}]
}`
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube 🌹\",\"url\":\"https://youtube.com/@Kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Telegram 💧\",\"url\":\"https://t.me/+1e2AuejQBkxmNDg8\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"GitHub 🔘\",\"url\":\"https://github.com/kenvofc\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"WhatsApp ☘️\",\"url\":\"https://whatsapp.com/channel/0029VadduTqGufIpvG44NP18\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Proprio 👤","id":"${prefix}proprio"}`
              },
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await KenvBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break

            case 'v�rifcompte':
            case 'compte': {
               let a = db.data.users[sender]
               let b = `Below is your account information\n`
               b += `================================\n`
               b += `Serial Code:\n*[${a.serialNumber}]*\n`
               b += `Title: ${a.title}\n`
               b += `Afk Time: ${a.afkTime}\n`
               b += `Afk Reason: ${a.afkReason}\n` 
               b += `Nickname: ${a.nick}\n`
               b += `Statuts Porteur: ${a.premium}\n`
               b += `Votre Limite: ${a.limit}\n`
               b += `================================`
               KenvBotInc.sendMessage(sender, { text: b }, { quoted: m })
               replygckenv('Les d�tails du compte ont �t� envoy� en priv�.')
            }
            break
            case 'limite':
            case 'v�rifierlimite': {
               let a = db.data.users[sender]
               let b = `Votre limite est ${a.limit}\n` 
               b += `Premium Status ${isPremium ? 'oui' : 'non' }\n` 
               b += `Serial Code:\n*[${a.serialNumber}]*\n`
               replygckenv(b)
            }
            break

            default:
                if (budy.startsWith('=>')) {
                    if (!KenvTheCreator) return KenvStickOwner()
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replygckenv(bang)
                    }
                    try {
                        replygckenv(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replygckenv(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!KenvTheCreator) return KenvStickOwner()
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replygckenv(evaled)
                    } catch (err) {
                        await replygcxeon(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!KenvTheCreator) return KenvStickOwner()
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replygckenv(err)
                        if (stdout) return replygckenv(stdout)
                    })
                }
                if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
KenvBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {quoted: m})
}
            }
    } catch (err) {
        console.log(util.format(err))
        let e = String(err)
KenvBotInc.sendMessage("237656774511@s.whatsapp.net", { text: "Hey Boss, il para�t su'il y ait une erreur. veuillez la r�parer svp." + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
if (e.includes("conflict")) return
if (e.includes("Cannot derive from empty media key")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
if (e.includes("Socket connection timeout")) return
    }
}
