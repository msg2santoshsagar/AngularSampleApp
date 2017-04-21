(function() {
    'use strict';

    angular
        .module('angularSampleApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('contactUs', {
            parent: 'app',
            url: '/contactUs',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/contactus/contact_us.html',
                    controller: 'ContactUsController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
