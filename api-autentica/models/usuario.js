const mongoose = require('mongoose')
const schema = mongoose.Schema

const bcrypt = require('bcrypt-nodejs')

const jwt = require('jsonwebtoken')

const usuarioSchema = new schema({
        nome: String,
        senha: String,
        token:String
})

// usuarioSchema.methods.gerarToken = function(nome,senha){
//     return jwt.sign({'nome':nome, 'senha':senha}, 'segredo') 
// }
usuarioSchema.methods.gerarToken = function(nome){
    return jwt.sign({'nome':nome}, 'segredo') 
}

usuarioSchema.methods.gerarSenha = function(senha){
    return bcrypt.hashSync(senha, bcrypt.genSaltSync(9))
}

usuarioSchema.methods.validarSenha =  function(senha){
    return bcrypt.compareSync(senha, this.senha) 
}



module.exports = mongoose.model("Usuario", usuarioSchema)