(function () {
    'use strict';

    angular
        .module('convoqueme')
        .controller('GoleiroListController', GoleiroListController);

    GoleiroListController.$inject = ['GoleiroService'];
    function GoleiroListController(GoleiroService) {
        var vm = this;

        vm.goleiros = [];
        vm.filtro = '';

        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.filtro ? { nome: vm.filtro } : {};
            GoleiroService.find(query).success(function (data) {
                vm.goleiros = data;
            });
        }

        function remover(goleiro) {
            if (!confirm('Deseja realmente remover o goleiro "' + goleiro.nome + '" ?'))
                return;

            GoleiroService.remove(goleiro._id).success(function () {
                activate();
            });
        }
    }
})();