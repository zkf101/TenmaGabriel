const Discord = require("discord.js");
const TenmaGabriel = new Discord.Client();
const google = require("google");
const YTDL = require("ytdl-core");
const { Client, Attachment } = require('discord.js');
const fs = require('fs');
const commando = require('discord.js-commando');
const bot = new commando.Client();

TenmaGabriel.on("message", (message)=> {
    if(message.content == "가브릴"){
        message.reply("왜?");
    }
})

TenmaGabriel.on('message', message => {
    if(!message.guild) return;
    if (message.content === '/가브릴'){
        if (message.member.voiceChannel){
            message.member.voiceChannel.join()
            .then(connection => {
                message.reply('나왔다!!');
            })
            .catch(console.log);
        } else {
            message.reply('먼저방에들어가');
        }
    }
});

TenmaGabriel.on('message', message => {
    if(message.content == '/우마루'){
        message.reply("우마루는 코딩안함");
    }
})


TenmaGabriel.on('message', message => {
    if(message.content == '안녕'){
        message.reply("안녕:D ");
    }
})

TenmaGabriel.on('message', message => {
    if(message.content == 'ㅋㅋㅋ'){
        message.reply("뭘빠게");
    }
})

TenmaGabriel.on('message', message => {
    if(message.content == '키니'){
        message.reply("키작은 호빗");
    }
})



TenmaGabriel.on('message', message => {
    if(message.content == '배그망겜'){
        message.reply("ㅇㅈ");
    }
})



TenmaGabriel.on('message', message => {
    if(message.content == 'ㅎㅇ'){
        message.reply("ㅎㅇ ");
    }
})

TenmaGabriel.on('message', message => {
    if(message.content == '가조쿠냐'){
        message.reply("ㅇㅇ ㅂㅇㄹ");
    }
})

TenmaGabriel.on('message', message => {
    if(message.content == '가조쿠냐?'){
        message.reply("ㅇㅇ ㅂㅇㄹ");
    }
})


TenmaGabriel.on('ready', () => {
    console.log('I am ready!');
  });
  
  TenmaGabriel.on('message', message => {
    if (message.content === 'grip') {
        const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
        message.channel.send(attachment);
    }
});



TenmaGabriel.on('ready', () => {
    console.log('I am ready!');
  });
  
  TenmaGabriel.on('message', message => {
    if (message.content === 'g원본이미지') {
        const attachment = new Attachment('http://blogfiles.naver.net/MjAxNzAyMTRfMjgw/MDAxNDg3MDc5ODI1NTQ1.6MLcaOqY5dQIZAoxVTl4rCE2iUCROpD3VmMWULKZnQEg.yenjhVZmOOm_f2rO2m1pFhrmgoy60NWqx-3y_PeoH2Yg.PNG.sooyong1492/%B0%A1%BA%EA%B8%B1_%B5%E5%B7%D3%BE%C6%BF%F4_06.mp4_001201434.png');
        message.channel.send(attachment);
    }
});


TenmaGabriel.on('message', message => {
    if (message.content === 'ㅂㅇㄹ') {
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/378117883160428544/479627514046709761/received_1952074638448418.jpeg');
        message.channel.send(attachment);
    }
});


TenmaGabriel.on('message', message => {
    if (message.content === 'ㅁㄸ') {
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/434763264165937183/479628059264417807/received_1954560718199810.jpeg');
        message.channel.send(attachment);
    }
});

TenmaGabriel.on('message', message => {
    if (message.content === '미띤') {
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/434763264165937183/479628059264417807/received_1954560718199810.jpeg');
        message.channel.send(attachment);
    }
});


TenmaGabriel.on("ready", async() => {
    console.log('${bot.user.username} is online!');

TenmaGabriel.user.setActivity("'g'로 명령어대기중", {type: "WATCHING"});
});



TenmaGabriel.on("guildMemberAdd", async member => {
    conso.log('${member.id} joined the server.');
    
    let welcomechannel = member.guild.channels.find('name', "welcome_leave");
    welcomechannel.send('LOOK OUT EVERYONE! ${member} has joines the party!');
})

TenmaGabriel.on("guildMemberAdd", async member => {

    console.log('${member.id} left the server.');

    let welcomechannel = member.guild.channels.find('name', "welcome_leave");
    welcomechannel.send('GOOD RIDDANCE! ${member} has bailed on the server!');
});


TenmaGabriel.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = bot.comands.get(cmd.slice(prefix.legth));
    if(commandfile) commandfile.run(bot,message,args);
});



















class LeaveChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'Leaves the voice channel of the commaner'
        });
    }

async run(message, args)
{
    if(message.guild.voiceConnection)
    {
        message.guild.voiceConnection.disconnect();
    }
    else
    {
        message.reply("I must be in a voice channel to be banished!");
    }
}
}
module.exports = LeaveChannelCommand;



TenmaGabriel.login("NDc4OTM4NjE5ODg5OTc1MzA0.DlR-vg.T8KZudcTGhYDySth8r3ATqhmgEM");
