
var app = angular.module('BuscaCep', []);

app.controller('CepCtrl', function ($scope, $http) {
  var CEP_URL = 'http://cep.correiocontrol.com.br/';

  $scope.cep = '58402000';

  $scope.buscar = function() {
    $http.get(CEP_URL + $scope.cep + '.json').then(function(endereco) {
      $scope.endereco = endereco.data;
    });
  };
});

