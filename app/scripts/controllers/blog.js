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
    	alert('has escrito ' + busqueda);
    }
  });
