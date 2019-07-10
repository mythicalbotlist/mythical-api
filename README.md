Hello there Mythical User!
=================

- This API is for Mythica-Bots! [Found Here](https://mythicalbots.xyz)

- Post Stats

```
const MythicalAPI = require("mythical-api");
let API = new MythicalAPI("TOKEN");

const Discord = require('discord.js');
const client = new Discord.Client

client.on('ready', ()=> {
API.postStats(client.guilds.size, client.user.id);
  setInterval(function() {
API.postStats(client.guilds.size, client.user.id);
}, 900000);
});
```
- Get Info
```
let Info = API.getBot("ID");
console.log(Info)
```
[![NPM](https://nodei.co/npm/mythical-api.png)](https://nodei.co/npm/mythical-api/)
