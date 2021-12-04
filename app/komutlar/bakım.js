const Discord = require('discord.js')

exports.run = async(client, message, args) => {


const bakım = new Discord.MessageEmbed()
.setDescription('SUNUCU BAKIMDA AKTIF OLDUGU ZAMAN AKTIF VERILECEKTIR.')
.setImage(`https://cdn.discordapp.com/attachments/865519968740835389/895147948390891570/redline.png`)
.setFooter(`${message.author.username} Tarafından Kullanıldı.`)
.setTimestamp()
.setColor('RANDOM')
 message.channel.send(bakım)
 message.channel.send(`@everyone`).then(x => x.delete({timeout: 1500}));


}
exports.conf = {enabled: true, guildOnly: true, aliases: ["bakım"]};
exports.help = {name: 'bakım'};