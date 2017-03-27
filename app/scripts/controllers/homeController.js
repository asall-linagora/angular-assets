(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name angularVimondAssetsApp.controller:HomeController
   * @description
   * # HomeController
   * Controller of the angularVimondAssetsApp
   */
  angular.module('angularVimondAssetsApp')
    .controller('HomeController', function ($state, $timeout) {

      //to redirect to assets list page
      $timeout(function() {
        $state.go('listassets');
      }, 5000);
    });
})();
