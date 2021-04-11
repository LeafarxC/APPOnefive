var request = require('request');
require('dotenv').config();



const getCountries =  (callback) => {

  request({
    method: 'GET',
    url: `https://${process.env.HOST}/countries`,
    headers: {
    'x-rapidapi-host': process.env.HOST,
    'x-rapidapi-key': process.env.KEY,
    }, 
    json: true}, 
    function async (err, res) {
    if (err) {
      throw err;
    }
    
    callback (res.body.response);
  });
}


module.exports = getCountries;

