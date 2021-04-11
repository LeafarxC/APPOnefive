const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user')
const countries = require('./routers/countries');
const league = require('./routers/leagues');
const players = require('./routers/players');
const teams = require('./routers/teams');



const app = express();
const port = process.env.PORT || 3003;



app.use(express.json());
app.use(userRouter);
app.use(countries);
app.use(league);
app.use(players);
app.use(teams);



app.listen(port, () => {
  console.log("O servidor iniciou");
})
