const wump = require('wumpfetch');
const Status = require("./StatusCodes.json")

module.exports = class API {
  constructor (token) {
    if (typeof token !== 'string') throw new SyntaxError('Invalid Token');
    this.token = token
  };

  getBot(botid) {
    if (typeof botid !== 'string') throw new TypeError('Bot ID must be a string');
    return new Promise(async (resolve, reject) => {
      try {
         const res = await wump(`https://mythicalbots.xyz/api/bot/${botid}/info`).send();
         resolve(res.json());
      } catch (err) { reject(new Error(err)); }
    });
  }

  getUser(userid) {
    if (typeof userid !== 'string') throw new TypeError('User ID must be a string');
    return new Promise(async (resolve, reject) => {
      try {
         const res = await wump(`https://mythicalbots.xyz/api/user/${userid}/info`).send();
         resolve(res.json());
      } catch (err) { reject(new Error(err)); }
    });
  }

  getBots() {
    return new Promise(async (resolve, reject) => {
      try {
         const res = await wump(`https://mythicalbots.xyz/api/bots`).send();
         resolve(res.json());
      } catch (err) { reject(new Error(err)); }
    });
  }

  postStats(servercount, botid) {
    if (!this.token) throw new TypeError('API token not provided');
    if (typeof servercount !== 'number') throw new TypeError('Server count must be a number');
    if (typeof botid !== 'string') throw new TypeError('Bot ID must be a string');
    return new Promise(async (resolve, reject) => {
      try {
         const res = await wump(`https://mythicalbots.xyz/api/bot/${botid}`, {
          method: 'POST', 
          headers: { 'Authorization': this.token },
          data: { 'server_count': servercount  }
        }).send();
        resolve(res.json());
        
        let callback = res.json();
        if(callback.success) {
        if(callback.success === "Server Count Updated") { return console.log("MBL API : Bot sever count updated & saved.") };
        }
        if(callback.error) {
        if(callback.error === "Bot not in database") { return console.log("MBL API Error : Bot not found, please check the bot ID you gave.") };
        if(callback.error === "Please give a valid API Key") { return console.log("MBL API Error : invalid api key, please Check your key.") };
        if(callback.error === "Too many requests, try again after 15 mins.") { return console.log("MBL API Error : You too many request please try again in 15 mins.") }
        } 
      } catch (err) { reject(new Error(err)); }
    });
  }
};
