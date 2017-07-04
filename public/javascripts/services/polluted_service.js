'use strict';

angular.module('worldsensing')
    .service('pollutionService', function ($http) {
        var store = this;

        store.cities = [];


        $http.get('countryPollution').success(function (data) {
            for (var key in data.data){
                store.cities[key] = data.data[key];
            }

        });

    });
