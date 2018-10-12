(function(){
    'use strict'
    
    angular
    .module('myapp')
    .controller('usuarioController', usuarioController)

    usuarioController.$inject = ['usuarioAPI','$scope']

    function usuarioController(usuarioAPI, $scope){
        $scope.login = function(usuario){
            usuarioAPI.login(usuario)
            .then(function(data){
                console.log(data)
                data = JSON.stringify(data.data).replace('"', "")
                data = data.replace('"', "")
                localStorage.setItem('token',data) 
                window.location.href = 'file:///C:/Users/ale/Documents/front-end-autentica/exibir.html'
            })
        }

    $scope.logout = function(){
        localStorage.removeItem('token')
    }

    }
})()