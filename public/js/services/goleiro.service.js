(function () {
    'use strict';

    angular
        .module('convoqueme')
        .factory('GoleiroService', GoleiroService);

    GoleiroService.$inject = ['$http'];
    function GoleiroService($http) {
        var URL = '/api/goleiros'
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

        function save(goleiro) {
            return goleiro._id ? $http.put(URL + '/' + goleiro._id, goleiro) : $http.post(URL, goleiro);
        }

        function remove(id) {
            return $http.delete(URL + '/' + id);
        }
    }
})();