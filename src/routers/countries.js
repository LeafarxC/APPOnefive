const express = require('express');
const Countries = require('../models/countries')
const router = new express.Router();
const auth = require('../middleware/auth')
const getCountries = require('../controllers/countries')


router.post("/secret/countries", auth, async (req, res) => {
   
    try{
        getCountries((countries) => {
            countries.forEach(countrie => {
                const ct = new Countries (countrie)
                ct.save();
            });
            res.status(201).send({Message: "Países criados com sucesso!"});
        });
    } catch(error) {
            res.status(400).send({error: "Algo de errado aconteceu"});
        };
    });


router.get('/countries', auth, async (req, res) => {
    try {
        const countrie = await Countries.find({})
        res.send(countrie);
    } catch(error) {
        res.status(400).send({error: "Algo de errado aconteceu"});
    }
})

router.get('/countrie/:id', auth, async (req, res) => {
    try {
        const name = req.params.id
        const countrie = await Countries.findOne({name: name}) 
        res.send(countrie);
    } catch(error) {
        console.log(error);
        res.status(400).send({error: "Algo de errado aconteceu"});
    }
})


router.delete('/countries', auth, async (req, res) => {
    try{
        await req.countries.remove()
        res.send(req.countries)
    }catch(error){
        res.status(404).send({error: "Algo de errado aconteceu"});
    }
})

module.exports = router
