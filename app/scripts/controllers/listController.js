/**
 * @author Alpha Sall
 */
(function() {
  'use strict';

  angular.module('angularVimondAssetsApp')
    .controller('ListController', function($log, allAssets) {

      this.assets = allAssets.assets.asset;

    });
})();
