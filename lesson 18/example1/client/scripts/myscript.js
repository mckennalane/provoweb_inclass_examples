var myApp = angular.module('myapp',[]);

myApp.controller('topcontroller', ['$scope', function($scope) {
  $scope.phrase = 'Open Sesame';
}]);

myApp.controller('bottomcontroller', ['$scope','$http', function($scope, $http) {
  $http({method: 'GET', url: '/people.json'}).
    success(function(data, status, headers, config) {
     	$scope.people = data;
    }).
    error(function(data, status, headers, config) {
    	console.log('error grabbing data');
    });
}]);

