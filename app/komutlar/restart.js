const Discord = require('discord.js');

exports.run = async(client, message, args) => {


    const restart = new Discord.MessageEmbed()
    .setDescription('SUNUCUYA RESTART GELIYOR AKTIF OLDUGU ZAMAN AKTIF VERILECEKTIR.')
    .setImage(`https://cdn.discordapp.com/attachments/913772518836432967/914546849950613595/20211128_190119.png`)
    .setFooter(`${message.author.username} Tarafından Kullanıldı.`)
    .setTimestamp()
    .setColor('RANDOM')
    message.channel.send(restart)
    message.channel.send(`@everyone`).then(x => x.delete({timeout: 1500}));


}

exports.conf = {enabled: true, guildOnly: true, aliases: ["restart"]};
exports.help = {name: 'restart'};