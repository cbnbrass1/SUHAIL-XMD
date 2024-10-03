const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347040387034";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_03_10_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MixcbiAgICAgICAgMTY2LFxuICAgICAgICA4NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4MixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDksXG4gICAgICAgIDQ2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgODYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDgzLFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDgxLFxuICAgICAgICA2NixcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA1OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDUxLFxuICAgICAgICA5NyxcbiAgICAgICAgODMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc3LFxuICAgICAgICA1OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDYxLFxuICAgICAgICA3MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzLFxuICAgICAgICA4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDM3LFxuICAgICAgICA3NixcbiAgICAgICAgMTY0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICA1NixcbiAgICAgICAgMTI2LFxuICAgICAgICAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxODQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE2LFxuICAgICAgICA5MixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDkyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9ZQXNqVUQ3WWlTRmdnczRzTGtUZThHWHJtWTBQS004WnZUVE1INHJINkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlQ4alNiNVdwUmNxTTU0bVVYRk1fbXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzg0ZGUzNjItNTczNy00ZmJjLTg5MmUtZDRjMzU5ZWM0NWJjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NCxcbiAgICAgIDc0LFxuICAgICAgMjE4LFxuICAgICAgMTM3LFxuICAgICAgMTk4LFxuICAgICAgODAsXG4gICAgICAyMDcsXG4gICAgICAyNTUsXG4gICAgICAxNTgsXG4gICAgICAxMDAsXG4gICAgICAxODYsXG4gICAgICA5OCxcbiAgICAgIDgwLFxuICAgICAgMTMzLFxuICAgICAgMTk5LFxuICAgICAgMTg0LFxuICAgICAgMTY3LFxuICAgICAgMTMsXG4gICAgICAxODYsXG4gICAgICAzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNyxcbiAgICAgIDEzMixcbiAgICAgIDE1MyxcbiAgICAgIDE1MSxcbiAgICAgIDE4NSxcbiAgICAgIDgxLFxuICAgICAgOTcsXG4gICAgICAyNTMsXG4gICAgICAxMTYsXG4gICAgICA0NCxcbiAgICAgIDExMixcbiAgICAgIDE3MixcbiAgICAgIDIzOCxcbiAgICAgIDIwNyxcbiAgICAgIDEzOSxcbiAgICAgIDEwOSxcbiAgICAgIDIzOCxcbiAgICAgIDE5MCxcbiAgICAgIDQ5LFxuICAgICAgNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMU5YUUpZR0hcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDAzODcwMzQ6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1NDA1NjMxNjE4MjU4MjoxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLeVJ1dWNGRU8zVSs3Y0dHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk9nZHRhWDFPVkUyQm0wSG1xd0k1ak5tckp6cEJFa0phTjk3VzFJclFBRTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNm95NmhHMmUweHBTM1lMaEM1TS9HT2NXY1cyaThHWmRDa2gvazdXVWZweVJENXgyaTF2bWJKRlJNWXFXLzJ2MmNEeWphOEZwT1NpTjdwT21rY3FrQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiemVTN1BXSjVXRUkvaWFTcllNR0x0NkdvQzhkN1JvbHpONDFLd2hnODB5TkhLL3dJZ2dUVGJpRkNLUzFiTEU1M0tjOG1EUG8rVDNWRlVZV1NhVm9WQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0MDM4NzAzNDoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc5ODIxOTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBQlFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFCUS5qc29uIjogIntcImtleURhdGFcIjpcIm8xS3QweUZpbDM4ZDBkRWROWG9qNTBWRktGZDlPdENsbThBTUF6QlNDUzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU1OTEzNjQyOCxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjc4NzE1MzM2MTRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "CBN",
  ownername:process.env.OWNER_NAME|| "CBN",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
