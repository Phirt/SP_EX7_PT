var myApp = angular.module('examApp', []);
  myApp.controller('ExamController', ['$scope', 'myFactory', 'myJsonFactory', function($scope, factory, myJsonFactory) {

    $scope.studentsInfo = factory;
    
    $scope.JsonData = myJsonFactory.then(function (response) 
    {
        response.data;
    });
    
}]);

myApp.directive('lol', function() {
    return {
        restrict: 'E',
        templateUrl: 'template.html'
    };
});
    
    myApp.filter('average', function () {
    return function (grades) {
        
        var gradeSum = 0;
        var amountOfGrades = 0;
        
        for (var i = 0; i < grades.length; i++) 
        {
            if (grades[i].grade !== undefined) 
            {
                gradeSum += parseInt(grades[i].grade);
                amountOfGrades++;
            }
        }
        return gradeSum / amountOfGrades;
    };
});

    myApp.factory('myFactory', function() {
    
    var studentsInfo = {};
    
    studentsInfo.allCourses = [
      {courseId : 1000,courseName: "Basic Programming"},
      {courseId : 1001,courseName: "Advanced Programming"},
      {courseId : 1003,courseName: "DataBase Intro"}];
  
    studentsInfo.students = [];
    
    studentsInfo.students.push({studentId : 100, name: "Peter Hansen", grades : [{grade: "10"},{grade: "12"},{}]});
    studentsInfo.students.push({studentId : 101, name: "Jan Olsen", grades : [{grade: "7"},{grade: "10"},{}]});
    studentsInfo.students.push({studentId : 102, name: "Gitte Poulsen", grades : [{grade: "7"},{grade: "7"},{}]});
    studentsInfo.students.push({studentId : 103, name: "John McDonald", grades : [{grade: "10"},{},{grade: "7"}]});
    
    return studentsInfo;
});

    myApp.factory('myJsonFactory', ['$http', function($http) {
        return $http({
            method: 'GET',
            url: 'www.random.com/api/randomdata'
        });
}]);