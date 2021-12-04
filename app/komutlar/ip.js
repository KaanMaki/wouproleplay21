const Discord = require('discord.js');

exports.run = async(client, message, args) => {

    const ip = new Discord.MessageEmbed()
    .setDescription(' Sunucu IP Adresi : connect 45.82.122.233 \n Sunucu TS3 IP : 62.104.20.73:9995')
    .setImage(`https://cdn.discordapp.com/attachments/865519968740835389/895147948390891570/redline.png`)
    .setFooter(`${message.author.username} Tarafından Kullanıldı.`)
    .setTimestamp()
    .setColor('RANDOM')
    message.channel.send(ip).then(x => x.delete({timeout: 51000}));

}

exports.conf = {enabled: true, guildOnly: true, aliases: ["ip","ıp"]};
exports.help = {name: 'ts3'};
