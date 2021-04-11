var request = require('request');
require('dotenv').config();


const getLeague =  (callback) => {

  request({
    method: 'GET',
    url: `https://${process.env.HOST}/leagues?country=portugal`,
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


module.exports = getLeague;
