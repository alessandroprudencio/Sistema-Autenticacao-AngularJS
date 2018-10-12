(function(){
	'use strict';
	
	angular
	.module('myapp')
	.controller('produtoController', produtoController);
	
	produtoController.$inject=['produtoAPI','$scope'];
	
	function produtoController(produtoAPI,$scope){
        if(!localStorage.token){
            window.location.href = 'file:///C:/Users/ale/Documents/front-end-autentica/index.html'
        }
		
		$scope.listar = function(){
            produtoAPI.listar()
            .then(function(data){
                //console.log(data.data)
				$scope.produtos = data.data;
            })
        }
        $scope.listar()
	}
})();