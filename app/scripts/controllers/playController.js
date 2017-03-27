/**
 * @author Alpha Sall
 */
(function () {
  'use strict';
  /**
   * Controller for the video player
   */
  angular.module('angularVimondAssetsApp')
    .controller('PlayerController', function (assetplay) {

      this.playback = assetplay.data.playback;
      var self = this;

      this.config = {
        sources: [
          {src: self.playback.items.item.url}
        ],
       theme: {
          url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
        },
        plugins: {
          poster: "http://www.videogular.com/assets/images/videogular.png"
        }
      };
    });
})();
