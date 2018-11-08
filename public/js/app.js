(function () {
    'use strict';

    angular.module('convoqueme', ['ngRoute'])
        .config(states);

    states.$inject = ['$routeProvider'];
    function states($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: 'partials/main.html'
        }).when('/goleiros', {
            templateUrl: 'partials/goleiro-list.html',
            controller: 'GoleiroListController',
            controllerAs: 'vm'
        }).when('/goleiros/adicionar', {
            templateUrl: 'partials/goleiro-form.html',
            controller: 'GoleiroFormController',
            controllerAs: 'vm'
        }).when('/goleiros/editar/:id', {
            templateUrl: 'partials/goleiro-form.html',
            controller: 'GoleiroFormController',
            controllerAs: 'vm'
        }).when('/convocacoes', {
            templateUrl: 'partials/convocacao-list.html',
            controller: 'ConvocacaoListController',
            controllerAs: 'vm'
        }).when('/convocacoes/convocar/:goleiroId', {
            templateUrl: 'partials/convocacao-form.html',
            controller: 'ConvocacaoFormController',
            controllerAs: 'vm'
        }).when('/convocacoes/editar/:id', {
            templateUrl: 'partials/convocacao-form.html',
            controller: 'ConvocacaoFormController',
            controllerAs: 'vm'
        }).when('/ops', {
            templateUrl: 'partials/url-invalida.html'
        });

        $routeProvider.otherwise('/ops');
    }
})();