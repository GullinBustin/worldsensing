/**
 * Created by Javier on 27/09/2016.
 */

'use strict';

angular.module('worldsensing')
    .controller('HomeController', ['$state', '$http', 'pollutionService',function($state, $http, pollutionService){

        var controller = this;

        controller.pollution = pollutionService;




    }]);