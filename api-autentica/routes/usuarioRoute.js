const express = require('express')
const router   = express.Router()
const usuarioController = require('../controller/usuarioController')


function pegarToken (req, res, next){
        var header  = req.headers['authorization']

        if(typeof  header !== 'undefined'){
            req.token = header
            next()
        }else{
            res.sendStatus(403)
        }

}

router.post('/cadastrar',function(req,res){
    let nome = req.body.nome
    let senha = req.body.senha
    usuarioController.adicionar(nome, senha, function(resp){
        res.json(resp)
    })
})


router.post('/login',function(req,res){
    let nome = req.body.nome
    let senha = req.body.senha
    usuarioController.login(nome, senha, function(resp){
        res.json(resp)
    })
})

router.get('/listar', pegarToken, function(req, res){
    let token = req.token
    usuarioController.listar(token, function(resp){
        res.json(resp)
    })
})


module.exports = router