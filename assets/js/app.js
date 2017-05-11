var farmieApp = angular.module('farmieApp', []);

farmieApp.controller('configCtrl', function ($scope) {
    $scope.devices = [
        {'label': 'Beaglebone', 'avatar': '/images/beaglebone.png'},
        {'label': 'Raspberry', 'avatar': '/images/raspberry.png'}
    ];
})
