const Discord = require('discord.js');
const TenmaGabriel = new Discord.Client();


TenmaGabriel.on("message", (message)=> {
    if(message.content == "가브릴"){
        message.reply("왜?");
    }
})


TenmaGabriel.on('ready', () => {
    console.log('I am ready!');
});

TenmaGabriel.on("message", message => {
    if(message.content === 'ping'){
        message.reply('pong');
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



TenmaGabriel.login(process.env.BOT_TOKEN);
