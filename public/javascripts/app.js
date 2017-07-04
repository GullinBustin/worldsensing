'use strict';

angular.module('worldsensing', ['ui.router'])
    .config(function ($urlRouterProvider, $stateProvider) {

        $urlRouterProvider
            .otherwise('/');
        $stateProvider
            .state('home',{
                url: '',
                templateUrl: 'views/home.html',
                controller: "HomeController",
                controllerAs: "HomeCtrl"
            });
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