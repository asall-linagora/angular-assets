/**
 * @author Alpha Sall
 */
(function() {
  'use strict';

  //controller to list all the assets
  angular.module('angularVimondAssetsApp')
    .controller('ListController', function($log, allAssets) {

      this.assets = allAssets.assets.asset;

    });
})();
