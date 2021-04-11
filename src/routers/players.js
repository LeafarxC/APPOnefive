const express = require('express');
const Players = require('../models/players')
const router = new express.Router();
const auth = require('../middleware/auth')
const getPlayers = require('../controllers/players')



router.post("/secret/players", auth, async (req, res) => {
  try{
    getPlayers((players) => {
        players.forEach(player => {
            const pl = new Players (player)
            pl.save();
        });
        res.status(201).send({Message: "Jogadores criados com sucesso!"});
    });
} catch(error) {
        res.status(400).send({error: "Algo de errado aconteceu"});
    };
});


router.get('/player', auth, async (req, res) => {
    try {
        res.send(req.player);
    } catch(error) {
        res.status(400).send({error: "Algo de errado aconteceu"});
    }
})


router.patch('/player', auth, async (req, res) => {
    const keys = Object.keys(req, body)
    const allowUpdates = ['name', 'teams'];
    const isValidOperation = updates.every((key) => allowUpdates.includes(key));

    if(!isValidOperation){
        return res.status(400).send({error: 'Update(s) inválido(s)'});
    }
    try{
        keys.forEach((key) => request.player[key] = req.body[key])
        await req.player.save()
        res.send(req.player); 
    } catch(error){
        res.status(400).send({error: "Algo de errado aconteceu"});
    }
})


router.delete('/player', auth, async (req, res) => {
    try{
        await req.player.remove()
        res.send(req.player)
    }catch(error){
        res.status(404).send({error: "Algo de errado aconteceu"});
    }
})

module.exports = router
