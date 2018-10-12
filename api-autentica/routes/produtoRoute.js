    const express = require('express')
    const router   = express.Router()
    const produtoController = require('../controller/produtoController')

    const usuarioController = require('../controller/usuarioController') //importar para pode utilzar o metodo de auth

    function pegarToken (req, res, next){
        let header  = req.headers['authorization']

        if(typeof  header !== 'undefined'){
            req.token = header
            next()
        }else{
            res.status(403)
        }

}

    router.get('/',pegarToken, function(req,res){

        const token = req.token
         usuarioController.auth(token, function(resp){
            if(resp === true){
                produtoController.buscar(function(resp){
                    res.json(resp)
                })
            }else{
                res.sendStatus(403)
            }         
         })      
    })

    router.post('/adicionar', function(req,res){
        let nome  = req.body.nome
        let descricao = req.body.descricao
        let valor = req.body.valor
    
        produtoController.adicionar(nome, descricao, valor,function(resp){
            res.json(resp)
        })
    })

    router.delete('/excluir/:id',function(req,res){
        let id = req.params.id
        produtoController.excluir(id, function(resp){
            res.json(resp)
        })
    })

    module.exports = router