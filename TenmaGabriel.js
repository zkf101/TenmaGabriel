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
  
  TenmaGabriel.on('message', message => {
    if (message.content == 'g원본이미지') {
        message.replay("http://blogfiles.naver.net/MjAxNzAyMTRfMjgw/MDAxNDg3MDc5ODI1NTQ1.6MLcaOqY5dQIZAoxVTl4rCE2iUCROpD3VmMWULKZnQEg.yenjhVZmOOm_f2rO2m1pFhrmgoy60NWqx-3y_PeoH2Yg.PNG.sooyong1492/%B0%A1%BA%EA%B8%B1_%B5%E5%B7%D3%BE%C6%BF%F4_06.mp4_001201434.png");
    }
})


TenmaGabriel.login(process.env.BOT_TOKEN);
