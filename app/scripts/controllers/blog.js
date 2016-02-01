'use strict';

/**
 * @ngdoc function
 * @name corlate2App.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the corlate2App
 */
angular.module('corlate2App')
  .controller('BlogCtrl', function ($scope) {
    
    $scope.buscar = function(busqueda){
    	/*alert('has escrito ' + $scope.busqueda);*/

    	if ($scope.busqueda == undefined || $scope.busqueda == ''){
    		alert('Escribe algo');
    	}
    	else{
    		alert('has escrito ' + $scope.busqueda);
    	}
    }
  });
