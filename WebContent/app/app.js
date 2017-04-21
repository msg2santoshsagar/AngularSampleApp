(function() {
    'use strict';
    
    angular
        .module('angularSampleApp', [
           /* 'ngStorage',
            'ngResource',
            'ngCookies',
            'ngAria',
            'ngCacheBuster',
            'ngFileUpload',
            'ui.bootstrap',
            'ui.bootstrap.datetimepicker',
            'ui.router',*/
            /*'infinite-scroll',
            'angular-loading-bar'*/
            'ngStorage',
            'ui.router'
            
        ])
        .run(run);

    run.$inject = ['stateHandler'];

    function run(stateHandler) {
        stateHandler.initialize();
    }
})();
