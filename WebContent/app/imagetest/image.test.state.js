(function() {
    'use strict';

    angular
        .module('angularSampleApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('imageTest', {
            parent: 'app',
            url: '/imagetest',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/imagetest/image.test.html',
                    controller: 'ImageTestController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
