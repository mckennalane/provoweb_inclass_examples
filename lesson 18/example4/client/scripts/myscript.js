var myApp = angular.module('myapp',[]);

myApp.controller('mycontroller', ['$scope', function($scope) {
  
  $scope.changeTemplate = function(){
    $scope.count = $scope.count + 1;
    var position = $scope.count % $scope.templateList.length;
   
    $scope.templatePath = $scope.templateList[position];
  }

  $scope.templateList = [ 
                          'templates/top_of_page.html',
                          'templates/middle_of_page.html',
                          'templates/bottom_of_page.html'
                        ];

  $scope.count = 0;
  $scope.templatePath = $scope.templateList[$scope.count];
}]);

