/**
 * @author Alpha Sall
 */
(function() {
  'use strict';

  angular.module('angularVimondAssetsApp')
    .controller('UpdateController', function(restService, $state, asset) {

      this.asset = asset.asset;
var self = this;
      this.updateAsset = function() {
        restService.updateAsset(self.asset).then(function(){
          console.log('success');
          $state.go('listassets');
        });
      };
    });
})();
