const Discord = require('discord.js');
const TenmaGabriel = new Discord.Client();

TenmaGabriel.on('ready', () => {
    console.log('I am ready!');
});

TenmaGabriel.on("message", message => {
    if(message.content === 'ping'){
        message.reply('pong');
    }
});
