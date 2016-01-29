'use strict';

/**
 * @ngdoc overview
 * @name corlate2App
 * @description
 * # corlate2App
 *
 * Main module of the application.
 */
angular
  .module('corlate2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/nosotros', {
        templateUrl: 'views/nosotros.html',
        controller: 'NosotrosCtrl',
        controllerAs: 'about'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .when('/servicios', {
        templateUrl: 'views/servicios.html',
        controller: 'ServiciosCtrl',
        controllerAs: 'servicios'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl',
        controllerAs: 'portfolio'
      })
      .when('/contacto', {
        templateUrl: 'views/contacto.html',
        controller: 'ContactoCtrl',
        controllerAs: 'contacto'
      })
      .when('/miniblog', {
        templateUrl: 'views/miniblog.html',
        controller: 'MiniblogCtrl',
        controllerAs: 'miniblog'
      })
      .when('/precios', {
        templateUrl: 'views/precios.html',
        controller: 'PreciosCtrl',
        controllerAs: 'precios'
      })
      .when('/error', {
        templateUrl: 'views/error.html',
        controller: 'ErrorCtrl',
        controllerAs: 'error'
      })
      .when('/shortcodes', {
        templateUrl: 'views/shortcodes.html',
        controller: 'ShortcodesCtrl',
        controllerAs: 'shortcodes'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
