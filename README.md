Hello there Mythical User!
=================

- This API is for Mythical Bot List! [Found Here](https://mythicalbots.xyz)

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

- Get a Bots Info.
```
let Info = API.getBot("ID");
console.log(Info)
```

- Get a Users Info.
```
let Info = API.getUser("ID");
console.log(Info)
```

- Get All the Bots on our site.
```
let Bots = API.getBots
console.log(bots)
```

[![NPM](https://nodei.co/npm/mythical-api.png)](https://nodei.co/npm/mythical-api/)
