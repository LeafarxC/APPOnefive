const mongoose = require('mongoose');


const teamsSchema = new mongoose.Schema({
  team: {
      id: {
        type: Number,
        unique: true
      },
      name: {
        type: String
      },
      country: {
        type: String,
      },
      founded: {
        type: Date,
      },
      national: {
        type: Boolean,
      },
      logo: {
        type: String
      }
},
    venue: {
        id: {
          type: Number,
        },
        name: {
          type: String,
        },
        address: {
          type: String,
        },
        city: {
          type: String,
        },
        capacity: {
          type: Number,
        },
        surface: {
          type: String,
        },
        image: {
          type: String,
        }, 
    },
  });

const Teams = mongoose.model('Teams', teamsSchema)

module.exports = Teams;
