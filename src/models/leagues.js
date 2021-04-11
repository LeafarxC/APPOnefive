const mongoose = require('mongoose');


const leagueSchema = new mongoose.Schema({

  league: {
      id:{
        type: Number
      },
      name: {
        type: String,
      },
      type: {
        type: String,
      },
      logo: {
        type: String,
      },
  },
  country: {
      name: {
        type: String,
      },
      code: {
        type: String,
      },
      flag: {
        type: String,
      },
  },
  seasons: [{

     year: {
      type: Number,
     },
     start: {
       type: Date,
     },
     end: {
       type: Date,
     },
     current: {
       type: Boolean,
     },
     coverage: {
       fixtures: {
         events:{
           type: Boolean,
         },
         lineups: {
           type: Boolean,
         },
         statistics_fixtures: {
           type: Boolean,
          },
         statistics_players: {
           type: Boolean
         },
       },
       standings: {
         type: Boolean,
       },
       players: {
         type: Boolean,
       },
       top_scorers: {
         type: Boolean,
       },
       top_assists: {
         type: Boolean,
       },
       top_cards: {
         type: Boolean,
       },
       predictions: {
         Boolean,
       },
       odds: {
         type: Boolean
       }
     },
  }]  
})



const League = mongoose.model('League', leagueSchema)

module.exports = League;

  
