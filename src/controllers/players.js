var request = require('request');
require('dotenv').config();


const getPlayers =  (callback) => {

  request({
    method: 'GET',
    url: `https://${hostKey}/players?season=2020&team=33`,
    headers: {
    'x-rapidapi-host': process.env.HOST,
    'x-rapidapi-key': process.env.KEY,
    }, 
    json: true}, 
    function async (err, res) {
    if (err) {
      throw err;
    }
   console.log(res.body.response);
    callback (res.body.response);
  });
}


module.exports = getPlayers;
