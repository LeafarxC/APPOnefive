const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt')
const jwt = require ('jsonwebtoken')

const userSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  apelido: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
},
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
    validate(value){
    if(!validator.isEmail(value)){
        throw new Error('Introduza um email válido')
    }
},
lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value){
        if(value === 'pwd' || value.includes('pass')){
            throw new Error('Palavra passe inválida');
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]  
  }, {
    timestamps: true
})


// Usado para Registo e Login para a sua Autenticação //

userSchema.methods.generateAuthToken = async function() {
    const user = this;

    const token = jwt.sign({_id: user._id.toString()}, 'PrivateKey')
    user.tokens = user.tokens.concat({token})
    await user.save()

    return token
}


// Procurar na base de dados pelo user através do email //

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if(!user){
        throw new Error('Utilizado não encontrado!')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
        throw new Error('Password não é compatível!')
    }

    return user;
}


// Antes de gravar o user, Verificar se Password esta ser alterada ou criada para encriptar a Password //

userSchema.pre('save', async function(next) {
    const user = this

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }

    next();

})


const User = mongoose.model('User', userSchema)

module.exports = User;
