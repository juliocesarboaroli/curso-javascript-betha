(function () {
    'use strict';

    angular
        .module('convoqueme')
        .controller('ConvocacaoListController', ConvocacaoListController);

    ConvocacaoListController.$inject = ['ConvocacaoService'];
    function ConvocacaoListController(ConvocacaoService) {
        var vm = this;

        vm.convocacoes = [];

        vm.remover = remover;

        activate();

        function activate() {
            ConvocacaoService.find().success(function (data) {
                vm.convocacoes = data;
            });
        }

        function remover(convocacao) {
            if (!confirm('Deseja realmente remover a convocação?'))
                return;

            ConvocacaoService.remove(convocacao._id).success(function () {
                activate();
            });
        }
    }
})();