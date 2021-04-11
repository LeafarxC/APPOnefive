const express = require('express');
const League = require('../models/leagues')
const router = new express.Router();
const auth = require('../middleware/auth')
const getLeague = require('../controllers/league')



router.post("/secret/league", auth,  async (req, res) => {
  try{
    getLeague((leagues) => {
        leagues.forEach(league => {
            const lg = new League (league)
            lg.save();
        });
        res.status(201).send({Message: "Países criados com sucesso!"});
    });
} catch(error) {
        res.status(400).send({error: "Algo de errado aconteceu"});
    };
});

router.get('/league', auth, async (req, res) => {
    try {
        res.send(req.league);
    } catch(error) {
        res.status(400).send({error: "Algo de errado aconteceu"});
    }
})

router.get('/league/:id', auth, async (req, res) => {
  try {
      const name = req.params.id
      const league = await leagues.findOne({name: name}) 
      res.send(league);
  } catch(error) {
      console.log(error);
      res.status(400).send({error: "Algo de errado aconteceu"});
  }
})


router.patch('/league', auth, async (req, res) => {
    const keys = Object.keys(req, body)
    const allowUpdates = ['name', 'season', 'teams'];
    const isValidOperation = updates.every((key) => allowUpdates.includes(key));

    if(!isValidOperation){
        return res.status(400).send({error: 'Update(s) inválido(s)'});
    }
    try{
        keys.forEach((key) => request.league[key] = req.body[key])
        await req.league.save()
        res.send(req.league); 
    } catch(error){
        res.status(400).send({error: "Algo de errado aconteceu"});
    }
})


router.delete('/league', auth, async (req, res) => {
    try{
        await req.league.remove()
        res.send(req.league)
    }catch(error){
        res.status(404).send({error: "Algo de errado aconteceu"});
    }
})

module.exports = router
