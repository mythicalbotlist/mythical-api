const wump = require('wumpfetch');

module.exports = class API {
  constructor (token) {
    if (typeof token !== 'string') throw new SyntaxError('Invalid Token');
    this.token = token
  };
  postStats(servercount, botid) {
    if (!this.token) throw new TypeError('API token not provided');
    if (typeof servercount !== 'number') throw new TypeError('Server count must be a number');
    if (typeof botid !== 'string') throw new TypeError('Bot ID must be a string');
    return new Promise(async (resolve, reject) => {
      try {
         const res = await wump(`https://beta.mythicalbots.xyz/api/bot/${botid}`, {
          method: 'POST', 
          headers: { 'Authorization': this.token },
          data: { 'server_count': servercount  }
        }).send();
        resolve(res.json());
      } catch (err) { reject(new Error(err)); }
    });
  }
};
