const express = require('express');
const Team = require('../models/teams')
const router = new express.Router();
const auth = require('../middleware/auth')
const getTeams = require('../controllers/teams')



router.post("/secret/teams", auth, async (req, res) => {
    try{
        getTeams((teams) => {
            teams.forEach(team => {
                const tm = new Team (team)
                tm.save();
            });
            res.status(201).send({Message: "Equipas criadas com sucesso!"});
        });
    } catch(error) {
            res.status(400).send({error: "Algo de errado aconteceu"});
        };
    });



router.get('/team', auth, async (req, res) => {
    try {
        res.send(req.team);
    } catch(error) {
        res.status(400).send({error: "Algo de errado aconteceu"});
    }
})


router.patch('/team', auth, async (req, res) => {
    const keys = Object.keys(req, body)
    const allowUpdates = ['name', 'players'];
    const isValidOperation = updates.every((key) => allowUpdates.includes(key));

    if(!isValidOperation){
        return res.status(400).send({error: 'Update(s) inválido(s)'});
    }
    try{
        keys.forEach((key) => request.team[key] = req.body[key])
        await req.team.save()
        res.send(req.team); 
    } catch(error){
        res.status(400).send({error: "Algo de errado aconteceu"});
    }
})


router.delete('/team', auth, async (req, res) => {
    try{
        await req.team.remove()
        res.send(req.team)
    }catch(error){
        res.status(404).send({error: "Algo de errado aconteceu"});
    }
})

module.exports = router

