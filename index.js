const Discord = require('discord.js');
const bot = new Discord.Client();
const ourg = require('./index.json');
const prefix = ("/");

bot.on('ready', function (){
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('Protéger 𝗚𝗜𝗩𝗘𝗪𝗔𝗬𝗦 𝗛/𝟮𝟰').catch(console.error)
})

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur 𝗚𝗜𝗩𝗘𝗪𝗔𝗬𝗦 𝗛/𝟮𝟰 !' + member.displayName)
        console.log(`${member.displayName} à rejoind le serveur.`)
    }).catch(console.error)
})

bot.on('message', msg => {
    if (msg.content === "salut"){
        msg.reply("Bonjour mon ami !")
    }
    if (msg.content.match(/salut/i)){
            msg.reply("Bonjour mon ami !") 
    }
    if (msg.content === prefix + "discord"){
        msg.channel.send("__ https://discord.gg/qV6FmJJ __")
        console.log("Une personne à fait la commande DISCORD !")
    }


});

bot.login(ourg.token);  