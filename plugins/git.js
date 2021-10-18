const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("Devil_dragon.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Pikachu bot created by Ameer Suhail*
*Creator number : wa.me/919188171178?text=Hi%20Amalesh%20unnichan.%20*

*Team SIRMFC VERIFICATION : https://chat.whatsapp.com/Kth1OvLFx9rEdN2G9OPcZC*

*Githublink (Setup)  :    https://github.com/Killady/Devil_dragon*

*Audio commads :   https://github.com/Killady/Devil_dragon/tree/master/uploads*

*Sticker commads : https://github.com/Killady/Devil_dragon/tree/master/uploads*

*Devil_dragon supporting army : https://chat.whatsapp.com/GUQv2nnaei08nxUEHnIG26* 

*For More Updates Subscribe The Channel ☝*
`}) 

}));
