/**
 * @author Alpha Sall
 */
(function() {
  'use strict';

  /**
   * controller to update an asset
   */
  angular.module('angularVimondAssetsApp')
    .controller('UpdateController', function(restService, $state, $stateParams, asset) {

      this.asset = asset.asset;
      var self = this;

      this.updateAsset = function() {
        restService.updateAsset(self.asset).then(function(){
          console.log('success');
          $state.go('listassets');
        });
      };

      this.gotoVideo = function() {
        $state.go('listassets.play', {id: $stateParams.id});
      };
    });
})();
