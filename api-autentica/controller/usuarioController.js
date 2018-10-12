//salvar usuario  - fazer login  -  listar usuario

const modelUsuario = require('../models/usuario')

exports.adicionar = function(nome, senha, callback){
    modelUsuario.findOne({'nome':nome},function(error, usuario){
        if(error){
            callback('Deu erro')
        }else if(usuario){
            callback('Usuario ja cadastrado')
        }else{
            let novoUsuario =  new modelUsuario()
            novoUsuario.nome = nome
            novoUsuario.senha = novoUsuario.gerarSenha(senha)
            novoUsuario.token = novoUsuario.gerarToken(nome)
            novoUsuario.save(function(error  , usuario){
                if(error){
                    callback('deu erro')
                }else{
                     callback(usuario)
                }
            })
        }
    })
}

exports.login = function(nome,senha, callback){
    modelUsuario.findOne({'nome':nome},function(error, usuario){
        if(error){
            callback('deu erro')
        }else if (usuario){
            if(usuario.validarSenha(senha)){
                callback(usuario.token) // se o usuario existe ele passa um token do usuario para usar no front-end
            }else{
                callback('senha incorreta')
            }
        }else{
            callback('usuario não cadastado')
        }
    })
}

exports.listar = function(token, callback){
modelUsuario.findOne({'token':token},function(error, usuario) {
    if(error){
        callback("deu erro")
    }else if(usuario){
        callback({'nome':usuario.nome})
    }else{
        callback('nao existe este usuario')
        }
    })
}

exports.auth = function(token, callback){
    modelUsuario.findOne({'token':token},function(error, usuario) {
        if(error){
            callback(false)
        }else if(usuario){
            callback(true) //se o usuario existir
        }else{
            callback(false)
            }
        })
}