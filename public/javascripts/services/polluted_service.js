'use strict';

angular.module('worldsensing')
    .service('pollutionService', function ($http) {
        var store = this;

        store.cities = [];

/*
        var observerCallbacks = [];
        this.registerObserverCallback = function (callback) {
            observerCallbacks.push(callback);
        };

        var notifyObservers = function () {
            angular.forEach(observerCallbacks, function (callback) {
                callback();
            });
        };
*/

        $http.get('countryPollution').success(function (data) {
            for (var key in data.data){
                store.cities[key] = data.data[key];
            }
            console.log(store.cities);
        });

    });
