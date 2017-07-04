'use strict';

angular.module('worldsensing', ['ui.router'])
    .config(function ($urlRouterProvider, $stateProvider) {

        $urlRouterProvider
            .otherwise('/');
        $stateProvider
            .state('table',{
                url: '/',
                templateUrl: 'views/tableView.html',
                controller: "TableController",
                controllerAs: "TableCtrl"
            })
            .state('chart',{
                url: '/',
                templateUrl: 'views/chartView.html',
                controller: "ChartController",
                controllerAs: "ChartCtrl"
            })
        ;
    })
    .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams ) {

        $rootScope.$on('$stateChangeStart', function (evt, to, params) {
            if (to.redirectTo) {
                evt.preventDefault();
                $state.go(to.redirectTo, params, {location: 'replace'});
            }
        });

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }]);