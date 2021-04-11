const mongoose = require('mongoose');


const playersSchema = new mongoose.Schema({
 
  player: {
    id: {
      type: Number,
      unique: true
    },
    name: {
      type: String,
    },
    firtsname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    age: {
      type: Number,
    },
    birth: {
      date: {
        type: Date,
      },
      place: {
        Type: String
      },
      country: {
        type: String
      },
    },
    nationality: {
      type: String,
    },
    injured: {
      type: Number,
    },
    photo: {
      type: String,
    },
  },
  statistics: [{

  team: {
    id: {
      type: Number,
    },
    name: {
      type: String,
    },
    logo: {
      type: String,
    } 
  },
  league: {
      id: {
        type: Number,
      },
      name: {
        type: String,
      },
      country: {
        type: String,
      },
      logo: {
        type: String,
      },
      flag: {
        type: String,
      },
      season: {
        type: Number,
      } 
  },
  games: {
    appearences: {
      type: Number,
    },
    lineups: {
      type: Number,
    },
    minutes: {
      type: Number,
    },
    number: {
      type: Number,
    },
    position: {
      type: String,
    },
    rating: {
      type: Number,
    },
    captain: {
      type: Boolean,
    },
  },
  substitutes: {
    in: {
      type: Number,
    },
    out: {
      type: Number,
    },
    bench: {
      type: Number,
    },
  },
  shots: {
    total: {
      type: Number,
    },
    onanimationiteration: {
      type: Number, 
  },
  },
  goals: {
    total: {
      type: Number,
    },
    conceded: {
      type: String
    },
    assists: {
      type: Number,
    },
    saves: {
      type: Number,
    },
  },
  passes: {
    total: {
      type: Number,
    },
    key: {
      type: Number,
    },
    accuracy: {
      type: Number,
    },
  },
  tackles: {
    total: {
      type: Number,
    },
    blocks: {
      type: Number,
    },
    interceptions: {
      type: Number,
    },
  },
  duels: {
    total: {
      type: String,
    },
    won: {
      type: String,
    },
  },
  dribbles: {
    attempts: {
      type: Number,
    },
    success: {
      type: Number,
    },
    past: {
      type: String,
    },
  },
  fouls: {
    draw: {
      type: Number,
    },
    committed: {
      type: Number,
    },
  },
  cards: {
    yellow: {
      type: Number,
    },
    yellowred: {
      type: Number,
    },
    red: {
      type: Number,
    },
  },
  penalty: {
    won: {
      type: Number,
    },
    commited: {
      type: String,
    },
    scored: {
      type: Number,
    },
    missed: {
      type: Number,
    },
    saved: {
      type: Number,
    },
  },
}]
   
});


const Players = mongoose.model('Players', playersSchema)

module.exports = Players;
