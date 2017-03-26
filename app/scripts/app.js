/**
 * @author Alpha Sall
 */
(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name angularVimondAssetsApp
   * @description
   * # angularVimondAssetsApp
   *
   * Main module of the application.
   */
  angular
    .module('angularVimondAssetsApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'ui.router',
      'ngMaterial'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider

        .state('home', {
          url: '/',
          templateUrl: 'views/home.html',
          controller: 'HomeController',
          controllerAs: 'main'
        })

        .state('listassets', {
          url: '/list',
          templateUrl: 'views/listAssets.html',
          controller: 'ListController',
          controllerAs: 'list',
          resolve: {
            allAssets: function (restService) {
              return restService.getAllAssets();
            }
          }
        })

        .state('listassets.update', {
          url: '/:id',
          templateUrl: 'views/updateAsset.html',
          controller: 'UpdateController',
          controllerAs: 'update',
          param: {
            id: null
          },
          resolve: {
            asset: function (restService, $stateParams) {
              return restService.getAsset($stateParams.id);
            }
          }
        });

    });
})();
