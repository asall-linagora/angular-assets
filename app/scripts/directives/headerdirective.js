/**
 * @author Alpha Sall
 */
(function () {
  'use strict';

  /**
   * directive for the header
   */
  angular.module('angularVimondAssetsApp')
    .directive('vmdHeader', function () {
      return {
        restrict: 'EA',
        templateUrl: 'views/header.html'
      };
    });
})();
