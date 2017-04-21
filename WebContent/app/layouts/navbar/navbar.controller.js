(function() {
    'use strict';

    angular
        .module('angularSampleApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$state'];

    function NavbarController ($state) {
        var vm = this;
        console.log("Nav Bar Controller Created.");

    }
})();
