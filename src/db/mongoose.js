const mongoose = require('mongoose');
require('dotenv').config();

const connectionURL =  `mongodb+srv://Leafar:${process.env.DATAKEY}@onefive.cl6sx.mongodb.net/onefive`;

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
