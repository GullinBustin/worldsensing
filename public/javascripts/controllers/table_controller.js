
'use strict';

angular.module('worldsensing')
    .controller('TableController', ['$state', '$http', 'pollutionService',function($state, $http, pollutionService){

        var controller = this;

        controller.pollution = pollutionService;

    }]);