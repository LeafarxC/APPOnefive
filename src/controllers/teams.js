var request = require('request');
require('dotenv').config();


const getTeams =  (callback) => {

  request({
    method: 'GET',
    url: `https://${hostKey}/teams?league=39&season=2020`,
    headers: {
    'x-rapidapi-host': process.env.HOST,
    'x-rapidapi-key': process.env.KEY,
    
    }, 
    json: true}, 
    function async (err, res) {
    if (err) {
      throw err;
    }
    console.log(res.body.response[0]);
    console.log(res.body.response[1]);
    callback (res.body.response);
  });
}


module.exports = getTeams;
