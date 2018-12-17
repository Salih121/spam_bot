const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523664383965134858")
setInterval(function() {
channel.send(`#daily`);
}, 10)
})

client.login("NTI0MTA2NDMwMzk2MTA0NzE1.DvjbwA.EetC-wcCcYYJAZP2lvWBdeztYyU");
