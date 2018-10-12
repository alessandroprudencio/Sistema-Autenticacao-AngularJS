const mongoose = require('mongoose')

const schema = mongoose.Schema

const produtoSchema = new schema({
    nome: String,
    descricao:String,
    valor:String
})

module.exports = mongoose.model('Produto', produtoSchema)