let token = "MTAxNzg4NTYxMjc5NzM0MTc2Ng.GQDvEB.NktKMWZ5CoMG-0MQ2hWdH0ixkfO2LOHZxVw22U"
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const Discord = require('discord.js');
const { Client, Intents} = require('discord.js');
import { joinVoiceChannel } from "@discordjs/voice";
const clientb = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES] });
import { SlashCommandBuilder } from '@discordjs/builders';
const wait = require('node:timers/promises').setTimeout;
let dateandtime = Math.round(new Date().getTime() / 1000).toString()
const fs = require('fs');
function uuids() {return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);return v.toString(16);});}
async function writelogs(text,uuid){
    let bid = uuids()
    let taim = new Date().toLocaleString("en-US", { timeZone: "Asia/Tbilisi" });
    const channel = clientb.channels.cache.get('1019607882465030255');
    channel.send(`[${taim}] ${bid}: ${text}`)
	fs.appendFile("./logs/logs-"+dateandtime+".txt", `(${bid}): ${text} \n`, function(err) {
    if(err) {
        return console.log(err);
    }
}); 
}
process.on('uncaughtException', function (err) {	
  let bid = uuids()	
  let taim = new Date().toLocaleString("en-US", { timeZone: "Asia/Tbilisi" });	
  const channel = clientb.channels.cache.get('1019607882465030255');	
    console.log(err)
  channel.send(`[${taim}] ${bid}: Warmoishva Shecdoma > ${err}`)	
});

function delay (x) {
    return new Promise((done, fail) => setTimeout(done,x));
  } 

const SteamUser = require("steam-user");
const SteamID   = require('steamid');
function logger(text, color, parm) {let time = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');console.log(`\x1b[32mZeroSense \x1b[37m| ${time} - \x1b[37m[${color}${parm}\x1b[0m] \x1b[37m: ${text}\x1b[37m`)}
class log {static info(text) {logger(text, "\x1b[36m", "INFO")}static error(text) { logger(text, "\x1b[31m", "ERROR")}static warn(text) {logger(text, "\x1b[33m", "WARN")}static debug(text) {logger(text, "\x1b[44m", "DEBUG")}}

const commands = [
  {
    name: 'boost',
    description: 'აბუსტეთ სტიმის საათები.',
    options: [
        {
            "name": "username",
            "description": "სტიმის მომხმარებლის სახელი",
            "type": 3,
            "required": true
        },
        {
            "name": "password",
            "description": "სტიმის მომხმარებლის პაროლი",
            "type": 3,
            "required": true
        },
        {
            "name": "games",
            "description": "აქ დაწერეთ თამაშების ID გამოყოფილი მძიმეებით (730,440) CS და TF2",
            "type": 3,
            "required": true
        },
        {
            "name": "chatmsg",
            "description": "როცა ვინმე მოგწერთ რითი უპასუხოს",
            "type": 3,
            "required": false
        },
        {
            "name": "customstatus",
            "description": "დააყენეთ მესიჯი სტატუსად",
            "type": 3,
            "required": false
        }
        
    ]
    },
    {
        name: 'stop',
        description: 'გააჩერეთ ჩართული ბუსტი',
    },
    {
        name: 'profile',
        description: 'ინფორმაცია თქვენზე',
    },
    /*{
        name: 'grant',
        description: 'მიანიჭეთ პაკეტის ძალები (ADMIN ONLY)',
        options: [
            {
                "name": "id",
                "description": "პიროვნების ID",
                "type": 6,
                "required": true
            },
        ]
    },*/
];
const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    log.info('Irtvirteba Aplikaciebi');
    await rest.put(Routes.applicationGuildCommands("1017885612797341766", "1017887314564874310"), { body: commands });
  } catch (error) {
    console.error(error);
  }
})();

const { QuickDB } = require("quick.db");
const db = new QuickDB();
let accounts = {stuff:{}}
/*
NONE 0
BASIC 1
STANDART 2
PREMIUM 3
PRO 4
ULTIMATE 5
ADMIN 6
*/


clientb.on('ready', async () => {
    const connection = joinVoiceChannel(	
  {	
      channelId: "1017852391388876901",	
      guildId: "872557561172348978",	
      adapterCreator: clientb.guilds.cache.get("872557561172348978").voiceAdapterCreator,
      selfDeaf:false
  });
    log.info("Boti Chairto")
    clientb.user.setActivity(`Boosting ${Object.keys(accounts.stuff).length} Accounts`);
    setInterval(() => {
            clientb.user.setActivity(`Boosting ${Object.keys(accounts.stuff).length} Accounts`);  
    }, 1000);  
});


clientb.on('interactionCreate', async interaction => {
    if (interaction.commandName === 'grant') {
        let dbtype = await db.get("license.type."+interaction.user.id);
        if(dbtype > 6 || !dbtype){
            writelogs(interaction.user.username +'-M Cada Rom Gamoeyenebina Grant Brzaneba Gamoekenebina.');
            const noadmin = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle("ZeruaS")
            .setDescription("თქვენ არ ხართ ადმინისტრატორი.") // turn off msg
            return await interaction.reply({ embeds: [noadmin], ephemeral:true})
        }
        let id = interaction.options.getUser('id').id
        let type = interaction.options.getString('type');
        const packetw = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle("ZeruaS")
            .setDescription("აირჩიეთ პაკეტი.")
        let balls = new Discord.MessageActionRow().addComponents(
            new Discord.MessageSelectMenu()
            .setCustomId('balls')
            .setPlaceholder('არაფერია არჩეული')
        );
        balls.components[0].addOptions([
        {
            label: `NONE`,
            value: "0",
        },
        {
            label: `BASIC`,
            value: "1",
        },
        {
            label: `STANDART`,
            value: "2",
        },
        {
            label: `PREMIUM`,
            value: "3",
        },
        {
            label: `PRO`,
            value: "4",
        },
        {
            label: `ULTIMATE`,
            value: "5",
        },
        {
            label: `ADMIN`,
            value: "6",
        },
        ]);
        await interaction.reply({ embeds: [packetw], components: [balls],ephemeral:true })
        const filter = x => x.customId == "balls" && x.user.id == interaction.user.id
    const collector = await interaction.channel.createMessageComponentCollector({ filter, time: 60000, max: 1 })
    collector.on("collect", async (i) => {
        await i.update({ components: [] });
        let halol = parseInt(i.values[0])
        console.log(i.values[0],halol)
        await db.set("license.type."+id, halol);
        await db.set("license.spent."+id, 0);
        switch(halol) {
            case 1:
                await db.set("license.duration."+id, 500);
                break
            case 2:
                await db.set("license.duration."+id, 1000);
                break
            case 3:
                await db.set("license.duration."+id, 2000);
                break
            case 4:
                await db.set("license.duration."+id, 5000);
                break
            case 5:
                await db.set("license.duration."+id, 9999999999999);
                break
            case 6:
                await db.set("license.duration."+id, 9999999999999);
                break
            
        }
        const done = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle("ZeruaS")
            .setDescription("მას წარმატებით გადაეცა პაკეტი.")
            writelogs(`${interaction.user.username}-M Gadasca ${interaction.options.getUser('id').username}-S Paketi.`);
        await interaction.followUp({ embeds: [done], ephemeral:true })
    })
    }
})
clientb.on('interactionCreate', async interaction => {
    if (interaction.commandName === 'profile') {
        let type = 6
        let currenet = 0
        let total = 9999999999999
        if(type == 0 || !type){
            const nolicense = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle("ZeruaS")
            .setDescription("თქვენ არ გაქვთ არცერთი პაკეტი ნაყიდი, იმისთვის რომ იყიდოთ გახსენით ბილეთი <#1017899511743512586> ში") // turn off msg
            return await interaction.reply({ embeds: [nolicense], ephemeral:true})
        }else if (currenet/3600 >= total) {
            const timelimit = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle("ZeruaS")
            .setDescription("თქვენ ამოგეწურათ პაკეტის დრო, მოგიწევთ ახალი პაკეტის ყიდვა.") // turn off msg
            return await interaction.reply({ embeds: [timelimit], ephemeral:true})
        }
        let paketi = ""
        let asdg = 6
        let timespent = 0
        let time = 9999999999999
        switch(asdg) {
            case 1:
                paketi = "BASIC"
                break
            case 2:
                paketi = "STANDART"
                break
            case 3:
                paketi = "PREMIUM"
                break
            case 4:
                paketi = "PRO"
                break
            case 5:
                paketi = "ULTIMATE"
                break
            case 6:
                paketi = "ADMIN"
                break
            
        }
        function secondsToHms(d) {
            d = Number(d);
            var h = Math.floor(d / 3600);
            var m = Math.floor(d % 3600 / 60);
            var s = Math.floor(d % 3600 % 60);
        
            var hDisplay = h > 0 ? h + (h == 1 ? " საათი, " : " საათი, ") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? " წუთი, " : " წუთი, ") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " წამი" : " წამი") : "";
            return hDisplay + mDisplay + sDisplay; 
        }
        console.log(time,timespent)
        let adsihn = secondsToHms(time*3600-timespent)
        console.log(adsihn)
        const timelimit = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle("ZeruaS")
            .addFields(
                { name: 'პაკეტი', value: `**${paketi}**`,inline: true },
                { name: 'დარჩენილი დრო', value: secondsToHms(time*3600-timespent), inline: true },
            )
            let clent = accounts.stuff[(interaction.user.id).toString()]
            if(clent){
                /*
                var xdxd;
                let adh = clent.users
                for(var key in adh){
                    if(adh.hasOwnProperty(key)){
                        xdxd = key;
                    }
                }*/
                timelimit.addFields(
                    { name: 'მომხმარებლის სახელი', value: `[${clent.client.accountInfo.name}](https://steamcommunity.com/id/${clent.client.vanityURL})`, inline:true },
                    { name: 'სტატუსი', value: `${clent.parametrebi.status}`, inline:true },
                    { name: 'მესიჯი', value: `${clent.parametrebi.msg}`, inline:true },
                    //tamashebi
                )
            }
            writelogs(interaction.user.username +'-M Gamoiyena Brzaneba Profile.');
            return await interaction.reply({ embeds: [timelimit], ephemeral:true})
        /*
        customstatussac ugdebs da autoreplysac) (API LIMITS)
        */

    }
})
clientb.on('interactionCreate', async interaction => {
    if (interaction.commandName === 'stop') {
        let type = 6
        let currenet = 0
        let total = 9999999999999
        if(type == 0 || !type){
            const nolicense = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle("ZeruaS")
            .setDescription("თქვენ არ გაქვთ არცერთი პაკეტი ნაყიდი, იმისთვის რომ იყიდოთ გახსენით ბილეთი <#1017899511743512586> ში") // turn off msg
            return await interaction.reply({ embeds: [nolicense], ephemeral:true})
        }else if (currenet/3600 >= total) {
            const timelimit = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle("ZeruaS")
            .setDescription("თქვენ ამოგეწურათ პაკეტის დრო, მოგიწევთ ახალი პაკეტის ყიდვა.") // turn off msg
            return await interaction.reply({ embeds: [timelimit], ephemeral:true})
        } //else if(Math.floor(new Date() / 1000) > duration) {}  azrze ar var ra ari ar maxsovs da imedia tkula ar vshli
        if(accounts.stuff[(interaction.user.id).toString()]){
            const adfjadfjdfj = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle("ZeruaS")
            .setDescription("სერვისი გაითიშა.") // turn off msg
            await interaction.reply({ embeds: [adfjadfjdfj], ephemeral:true})
            writelogs(`${interaction.user.username}-M Gatisha Servisi.`);
            return delete accounts.stuff[(interaction.user.id).toString()]
        } else {
            writelogs(interaction.user.username +'-M Cada Rom Gaetisha Servisi Magram Mas Ar Konda Chartuli.');
            const adfjadfjdfj = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle("ZeruaS")
            .setDescription("თქვენ არ გაქვთ ჩართული სერვისი.") // nothing started
            return await interaction.reply({ embeds: [adfjadfjdfj], ephemeral:true})
        }
    }
})

clientb.on('interactionCreate', async interaction => {
    if (interaction.commandName === 'boost') {
        let type = 6
        let currenet = 0
        let total = 9999999999999
        if(type == 0 || !type){
            const nolicense = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle("ZeruaS")
            .setDescription("თქვენ არ გაქვთ არცერთი პაკეტი ნაყიდი, იმისთვის რომ იყიდოთ გახსენით ბილეთი <#1017899511743512586> ში") // turn off msg
            return await interaction.reply({ embeds: [nolicense], ephemeral:true})
        } else if (currenet/3600 >= total) {
            const timelimit = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle("ZeruaS")
            .setDescription("თქვენ ამოგეწურათ პაკეტის დრო, მოგიწევთ ახალი პაკეტის ყიდვა.") // turn off msg
            return await interaction.reply({ embeds: [timelimit], ephemeral:true})
        }
        let username = interaction.options.getString('username');
        let password = interaction.options.getString('password');
        let games = interaction.options.getString('games');
        let custommessage = interaction.options.getString('chatmsg');
        let customstatus = interaction.options.getString('customstatus')
        if(type < 3 && customstatus){
            const statuslimitation = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle("ZeruaS")
            .setDescription("თქვენ არ გაქვთ ამის გამოყენების უფლება, მეტი ინფორმაციისთვის ეწვიეთ <#1017887451479552081> არხს.") // turn off msg
            return await interaction.reply({ embeds: [statuslimitation], ephemeral:true})
        }
        if(type < 5 && custommessage){
            const statuslimitation = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle("ZeruaS")
            .setDescription("თქვენ არ გაქვთ ამის გამოყენების უფლება, მეტი ინფორმაციისთვის ეწვიეთ <#1017887451479552081> არხს.") // turn off msg
            return await interaction.reply({ embeds: [statuslimitation], ephemeral:true})
        }
        const adfjadadfkhdmahfjdfj = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("ZeruaS")
        .setDescription("თქვენ აჭარბებთ თქვენი თამაშების ლიმიტს, მეტი ინფორმაციისთვის ეწვიეთ <#1017887451479552081> არხს.")
        if(type == 1 && games.split(',').length > 1){
            return await interaction.reply({ embeds: [adfjadadfkhdmahfjdfj], ephemeral:true})
        }  else if(type == 2 && games.split(',').length > 5){
            return await interaction.reply({ embeds: [adfjadadfkhdmahfjdfj], ephemeral:true})
        }else if(type == 3 && games.split(',').length > 10){
            return await interaction.reply({ embeds: [adfjadadfkhdmahfjdfj], ephemeral:true})
        }else if(type == 4 && games.split(',').length > 15){
            return await interaction.reply({ embeds: [adfjadadfkhdmahfjdfj], ephemeral:true})
        }else if(type == 5 && games.split(',').length > 25){
            return await interaction.reply({ embeds: [adfjadadfkhdmahfjdfj], ephemeral:true})
        }else if(type == 6 && games.split(',').length > 25){
            return await interaction.reply({ embeds: [adfjadadfkhdmahfjdfj], ephemeral:true})
        }
        const adfjadfjdfj = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("ZeruaS")
        .setDescription("თქვენ უკვე ჩართული გაქვთ სერვისი.")
        let stringid = (interaction.user.id).toString()
        if(accounts.stuff[(interaction.user.id).toString()]){
            return await interaction.reply({ embeds: [adfjadfjdfj], ephemeral:true})
        }
        if(games.match(/([A-z])\w+/g)){
            const stuff = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle("ZeruaS")
            .setDescription("თამაშები არასწორადაა.\nმაგალითი: [CSGO](https://steamdb.info/app/730/),[TF2](https://steamdb.info/app/440/) იქნება როგორც [730](https://steamdb.info/app/730/),[440](https://steamdb.info/app/440/)")
            return await interaction.reply({ embeds: [stuff], ephemeral:true})
        }
        const stuff = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("ZeruaS")
        .setDescription("მადლობთ რომ ხმარობთ ჩვენ სერვისს.")
        await interaction.reply({ embeds: [stuff], ephemeral:true})
        const client = new SteamUser();
        const logOnOptions = {
            accountName: username,
            password: password,
            machineName: "ZeruaS",
        };
        client.logOn(logOnOptions);
        let b = true;
        client.on('steamGuard', async function(domain, callback,lastCodeWrong) {
            const momxmarebeli = await clientb.users.fetch(interaction.user.id);
            if(lastCodeWrong) {
                const wrongcode = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle("ZeruaS")
                .setDescription("სტიმ გუარდის კოდი არასწორია.")
        
                return await momxmarebeli.send({ embeds: [wrongcode]})
            }
            let msg = await momxmarebeli.send("გთხოვთ დაწერეთ სტიმ გუარდის კოდი.").catch( async e=>{
                const wrongcode = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle("ZeruaS")
                .setDescription("სამწუხაროდ პირადში ვერ გიგზავნი მესიჯს, ჩართე Direct Messages!")
        
                return await interaction.followUp({ embeds: [wrongcode], ephemeral:true})
            });
            let filter = (message) => {
                return message.author.id === interaction.user.id;
            };
            msg.channel.awaitMessages({ filter, max: 1, time: 120000, errors: ['time'] })
            .then( async (b) => {
                if(domain == null){
                    writelogs(`${interaction.user.username} Cdilobs Gaiaros Steam Guard Telefonit.`);
                }else{
                    writelogs(`${interaction.user.username} Cdilobs Gaiaros Steam Guard Emailit.`);
                }
                await momxmarebeli.send("გასაგებია თქვენი კოდი დაფიქსირებულია, გადამოწმდება და მალე ჩაგერთვებათ.")
                callback(b.first().content)
            }).catch(async (collected) => {
                writelogs(interaction.user.username +'-S SteamGuardis Chaweris Dros Amovarda Aseti Ram: '+collected);
                await momxmarebeli.send("დრო ამოიწურა")
            });
        });
    
        let gms = games.split(',');
        var intgames = gms.map(function (x) { 
            return parseInt(x, 10); 
        });
        let fdhdh;
        let xdxd;
        if(!customstatus) {
            fdhdh = "ZeruaS Hour Boosting https://discord.gg/Ssmf7QNj4e"
            intgames.unshift("ZeruaS Hour Boosting https://discord.gg/Ssmf7QNj4e")
        } else {
            fdhdh = customstatus
            intgames.unshift(customstatus)
        }
        if(custommessage){
            xdxd = custommessage
        } else {
            xdxd = "I'm Currently Using ZeruaS Best Hour Boosting Service, Join Us: https://discord.gg/Ssmf7QNj4e"
        }
        client.on("loggedOn", async (e) => {
            client.setPersona(1)
            client.gamesPlayed(intgames);
            const parametrebi = {
                tamashebi: games,
                msg: xdxd,
                status: fdhdh,
            };
            accounts.stuff[(interaction.user.id).toString()] = {client:client,parametrebi}
            writelogs('Boti Warmatebulad Shevida '+interaction.user.username+'-S Aqauntze Rogorc ' + logOnOptions.accountName);
            let lol = setInterval( async () => {
                await db.add("license.spent."+interaction.user.id, 1)
                console.log(await db.get("license.spent."+interaction.user.id))
                //let currenet = await db.get("license.spent."+interaction.user.id)
                if(!accounts.stuff[(interaction.user.id).toString()]) {
                        console.log("Itisheba")
                        client.gamesPlayed([]);
                        client.logOff()
                    	return clearInterval(lol);
                    }
            }, 1000)
        });
        client.on("friendMessage", function(steamID, message) {
                client.chatMessage(steamID, xdxd);
        });
        client.on('error', async function (error) {
            const dummy = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle("ZeruaS")
            switch (error.eresult) {
              case SteamUser.EResult.InvalidPassword:
                writelogs(interaction.user.username +'-M Chawera Araswori Paroli.');
                dummy.setDescription("პაროლი არასწორია.")
                await interaction.followUp({ embeds: [dummy], ephemeral:true});
                break;
              case SteamUser.EResult.LoggedInElsewhere:
                writelogs(interaction.user.username +'-S Stimis Aqauntze Gamovedi Mokle Chartvis Gamo.');
                const momxmarebeli = await clientb.users.fetch(interaction.user.id);
				const moklechartva = new Discord.MessageEmbed()
				.setColor('#0099ff')
				.setTitle("ZeruaS")
				.setDescription("ბოტი ავტომატურად გაითიშა რადგანაც მოკლე ჩართვა მოხდა.")
				await momxmarebeli.send({ embeds: [moklechartva]})
                delete accounts.stuff[(interaction.user.id).toString()]
                client.gamesPlayed([]);
                client.logOff()
                break;
              case SteamUser.EResult.AccountDeleted:
                writelogs(interaction.user.username +'-S Stimis Momxmarebeli Washlilia.');
                dummy.setDescription("სტიმის მომხმარებელი წაშლილია.")
                await interaction.followUp({ embeds: [dummy], ephemeral:true});
                client.logOff();
                break;
              default:
                writelogs('Ucnobi Shecdoma ' +error);
                dummy.setDescription("ამოვარდა უცნობი შეცდომა: " +error)
                await interaction.followUp({ embeds: [dummy], ephemeral:true});
                break;
            }
    
          });


    }
    })

clientb.login(token);