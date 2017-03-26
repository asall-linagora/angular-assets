/**
 * @author Alpha Sall
 */
(function () {
  'use strict';

  angular.module('angularVimondAssetsApp')
    .directive('vmdHeader', function () {
      return {
        restrict: 'EA',
        templateUrl: 'views/header.html'
      };
    });
})();
