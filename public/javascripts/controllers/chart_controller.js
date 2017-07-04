/**
 * Created by Javier on 04/07/2017.
 */

'use strict';

angular.module('worldsensing')
    .controller('ChartController', ['$state', '$http', 'pollutionService',function($state, $http, pollutionService){

        var controller = this;

        controller.pollution = pollutionService;

        google.charts.load('current', {packages: ['corechart', 'bar']});
        google.charts.setOnLoadCallback(drawBasic);

        function drawBasic() {

            var dataArray = [['City', 'Air Quality', { role: 'style' }]]


            for(var key in controller.pollution.cities){
                console.log(controller.pollution.cities[key].pollutants.breezometer_color);
                dataArray.push([controller.pollution.cities[key].name, controller.pollution.cities[key].pollutants.breezometer_aqi, controller.pollution.cities[key].pollutants.breezometer_color.toLowerCase()]);
            }

            var data = google.visualization.arrayToDataTable(dataArray);

            var options = {
                'title':'Air Quality In Top 10 Most Populated Cities',
                'width':900,
                'height':500
            };

            var chart = new google.visualization.ColumnChart(
                document.getElementById('chart_div'));

            chart.draw(data, options);
        }


    }]);