/**
 * @author Alpha Sall
 */
(function() {
  'use strict';

  /**
   * This service handle all the calls to the api
   */
  angular.module('angularVimondAssetsApp')
    .factory('restService', function(vimondConfig, $http, $q, $log) {
      return {
        getAllAssets: function() {
          var endpoint = '/search/categories/root/assets.json';
          var fullUrl = vimondConfig.baseUrl + endpoint;
          return $http.get(fullUrl).then(successCallback, errorCallback);
        },
        getAsset: function(assetId) {
          var endpoint = '/asset/' + assetId + '.json';
          var fullUrl = vimondConfig.baseUrl + endpoint;
          return $http.get(fullUrl).then(successCallback, errorCallback);
        },
        playVideo: function (id, protocol) {
          var endpoint = '/asset/' + id + '/play?protocol=' + protocol;
          var fullUrl = vimondConfig.baseUrl + endpoint;
          return $http.get(fullUrl );
        },
        updateAsset: function (formData) {
          return this.getAsset(formData['@id']);
        }
      };

      function successCallback(data) {
        var defered = $q.defer();
        var assets = data.data;
        $log.debug(data);
        defered.resolve(assets);
        return defered.promise;
      }

      function errorCallback(data) {
        var defered = $q.defer();
        if(data.status === -1) {
          $log.error('local error : (internet issues, ...)');
        }
        $log.debug(data);
        defered.reject(data);
        return defered.promise;
      }
    });


})();
