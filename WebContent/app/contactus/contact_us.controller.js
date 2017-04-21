(function() {
    'use strict';

    angular
        .module('angularSampleApp')
        .controller('ContactUsController', ContactUsController);

    ContactUsController.$inject = ['$scope', '$state'];

    function ContactUsController ($scope, $state) {
        var vm = this;
    }
})();
