(function () {
    'use strict';

    angular
        .module('convoqueme')
        .factory('ConvocacaoService', ConvocacaoService);

    ConvocacaoService.$inject = ['$http'];
    function ConvocacaoService($http) {
        var URL = '/api/convocacoes'
        var service = {
            find: find,
            findById: findById,
            save: save,
            remove: remove
        };

        return service;

        function find(query) {
            return $http.get(URL, { params: { filter: JSON.stringify(query) } })
        }

        function findById(id) {
            return $http.get(URL + '/' + id);
        }

        function save(convocacao) {
            return convocacao._id ? $http.put(URL + '/' + convocacao._id, convocacao) : $http.post(URL, convocacao);
        }

        function remove(id) {
            return $http.delete(URL + '/' + id);
        }
    }
})();