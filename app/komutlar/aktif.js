const Discord = require('discord.js');

exports.run = async(client,message,args) => {
    message.channel.send(new Discord.MessageEmbed()
    .setTitle("Sunucu Aktif!")
    .setImage("https://cdn.discordapp.com/attachments/865519968740835389/895147948390891570/redline.png")
	.setThumbnail('https://cdn.discordapp.com/attachments/865519968740835389/895147948390891570/redline.png')
    .setDescription("İP:connect 45.82.122.233. TS:62.104.20.73:9995"))
  message.channel.send(`@everyone`).then(x => x.delete({timeout: 1500}));
}

exports.conf={
    enabled: true,
    guildOnly:false,
    aliases:[],
    kategori:""
}

exports.help = {
    name : "aktif",
    description:"açıklama",
    usage:"aktif"
}
