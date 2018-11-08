(function () {
    'use strict';

    angular
        .module('convoqueme')
        .controller('ConvocacaoFormController', ConvocacaoFormController);

    ConvocacaoFormController.$inject = ['ConvocacaoService', '$routeParams', '$location', 'GoleiroService'];
    function ConvocacaoFormController(ConvocacaoService, $routeParams, $location, GoleiroService) {
        var vm = this;

        vm.goleiro = {};
        vm.convocacao = {};
        vm.titulo = 'Convocando';

        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.goleiroId) {
                GoleiroService.findById($routeParams.goleiroId).success(function (data) {
                    vm.goleiro = data;
                    vm.titulo += ' ' + vm.goleiro.nome;
                });
            }

            if ($routeParams.id) {
                ConvocacaoService.findById($routeParams.id).success(function (data) {
                    vm.convocacao = data;
                    vm.convocacao.data = new Date(data.data);
                    vm.titulo = 'Editando convocação';
                    GoleiroService.findById(vm.convocacao.goleiro).success(function (goleiro) {
                        vm.goleiro = goleiro;
                    });
                });
            }
        }

        function salvar() {
            vm.convocacao.goleiro = { _id: vm.goleiro._id };
            ConvocacaoService.save(vm.convocacao).success(function () {
                $location.path('/convocacoes');
            });
        }
    }
})();