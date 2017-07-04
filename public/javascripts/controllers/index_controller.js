/**
 * Created by Javier on 04/07/2017.
 */

angular.module('worldsensing')
    .controller('IndexController', ['$state', '$http', 'pollutionService',function($state, $http, pollutionService){

        var controller = this;

        controller.pollution = pollutionService;


        controller.goTo = function(name){
            $state.go(name);
            console.log(name);
        };

        controller.isState= function(name){
            return name == $state.current.name;
        };

    }]);