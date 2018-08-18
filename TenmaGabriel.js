const Discord = require("discord.js");
const TenmaGabriel = new Discord.Client();
const google = require("google");
const YTDL = require("ytdl-core");
const { Client, Attachment } = require('discord.js');
const fs = require('fs');
const commando = require('discord.js-commando');
const bot = new commando.Client();

enmaGabriel.on("message", (message)=> {
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

TenmaGabriel.login(process.env.BOT_TOKEN);
