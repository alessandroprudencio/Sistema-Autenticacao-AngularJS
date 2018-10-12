const Produto = require('../models/produto')

exports.adicionar =  function(nome,descricao, valor, callback){
	new Produto({
		'nome': nome,
		'descricao':descricao,
		'valor':valor
	}).save(function(error, produto){
		if(error){
			callback({error: 'Não foi possivel salvar'})
		}else{
			callback(produto);
		}
	});
}

exports.buscar = function(callback){
	Produto.find({}, function(error, produtos){
		if(error){
			callback({error: 'Não foi possivel encontrar os produtos'});
		}else{
			callback(produtos);
		}
	});
}

exports.excluir = function(id, callback){
	Produto.findById(id, function(error, produto){
		if (error){
			callback({error:'Não foi possivel excluir'});
		}else{
			produto.remove(function(error){
				if(!error){
					callback({resposta:"Produto excluido com sucesso"});
				}
			});
		}
	})
}