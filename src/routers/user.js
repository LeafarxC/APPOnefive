const express = require('express');
const User = require('../models/users')
const router = new express.Router();
const auth = require('../middleware/auth')



router.post('/auth/register', async (req, res) => {
    const user = new User(req.body);

    try{
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({Message: "Usuário criado com sucesso!", Token: "o teu token é " + token});
    } catch(e) {
        console.log(e);
            res.status(400).send({error: "Algo de errado aconteceu"});
        };
    });



router.post('/auth/login', auth, async (req, res) => {
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.send({user: user.getPublicProfile(), token})

    }catch(error){
        res.status(500).send({error: "Algo de errado aconteceu"});
    }
});

router.get('/user/me', auth, async (req, res) => {
    try {
        res.send(req.user);
    } catch(error) {
        res.status(400).send({error: "Algo de errado aconteceu"});
    }
})


router.post('/auth/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        })
        await req.user.save()
        res.send();


    } catch (error){
        res.status(400).send({error: "Algo de errado aconteceu"})
    }
})


router.patch('/user/me', auth, async (req, res) => {
    const keys = Object.keys(req, body)
    const allowUpdates = ['name', 'password', 'age'];
    const isValidOperation = updates.every((key) => allowUpdates.includes(key));

    if(!isValidOperation){
        return res.status(400).send({error: 'Update(s) inválido(s)'});
    }
    try{
        keys.forEach((key) => request.user[key] = req.body[key])
        await req.user.save()
        res.send(req.user); 
    } catch(error){
        res.status(400).send({error: "Algo de errado aconteceu"});
    }
})


router.delete('/users/me', auth, async (req, res) => {
    try{
        await req.user.remove()
        res.send(req.user)
    }catch(error){
        res.status(404).send({error: "Algo de errado aconteceu"});
    }
})

module.exports = router
