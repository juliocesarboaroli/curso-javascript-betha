(function () {
    'use strict';

    angular
        .module('convoqueme')
        .controller('GoleiroFormController', GoleiroFormController);

    GoleiroFormController.$inject = ['GoleiroService', '$routeParams', '$location'];
    function GoleiroFormController(GoleiroService, $routeParams, $location) {
        var vm = this;

        vm.goleiro = {};
        vm.titulo = 'Adicionando goleiro';
        vm.tipos = [
            { key: 'Campo', label: 'Campo', valor: false },
            { key: 'Society', label: 'Society', valor: false },
            { key: 'Futsal', label: 'Futsal', valor: false },
            { key: 'Areia', label: 'Areia', valor: false }
        ];

        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                GoleiroService.findById($routeParams.id).success(function (data) {
                    vm.goleiro = data;
                    vm.titulo = 'Editando goleiro';
                    if (vm.goleiro.tipoJogo && vm.goleiro.tipoJogo.length) {
                        _.forEach(vm.goleiro.tipoJogo, function (tipoSalvo) {
                            _.find(vm.tipos, function (tipoPadrao) {
                                if (tipoPadrao.key === tipoSalvo) {
                                    tipoPadrao.valor = true;
                                }
                            });
                        });
                    }
                });
            }
        }

        function salvar() {
            var tiposSelecionados = _.filter(vm.tipos, function (tipo) {
                return tipo.valor;
            });
            if (tiposSelecionados.length) {
                vm.goleiro.tipoJogo = _.map(tiposSelecionados, 'key');
            }
            GoleiroService.save(vm.goleiro).success(function () {
                $location.path('/goleiros');
            });
        }
    }
})();