var myApp = angular.module('myapp',[]);



myApp.controller('mycontroller', ['$scope','$http', function($scope, $http) {
  $http({method: 'GET', url: '/people.json'}).
    success(function(data, status, headers, config) {
     	$scope.people = data;
    }).
    error(function(data, status, headers, config) {
    	console.log('error grabbing data');
    });
}]);

