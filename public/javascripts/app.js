var app = angular.module('tabla_juegos',['ngRoute'])

app.controller('ctrl_principal',function($http,$scope, $window , $location){
    
		$http.get('jsonTest.json').then(function(response){
				$scope.data=response.data;
		});
    
    $scope.eliminacion = function ($window , $location) {
        $window.alert("Vas a ver un ejemplo Sencillo");
//        $location.path("/singleElimination");
    };
    
    $scope.alert = function ( $window ) {
        $window.alert("hola");
        
    };
});

app.config(function ($routeProvider) {
    $routeProvider.when("/" , {
        controller : "ctrl_principal",
        templateUrl: "../templates/tabla.html"
    })
    .when("/singleElimination" , {
        controller:"ctrl_principal",
        templateUrl:"../templates/single.html"
    })
    .otherwise({
        reditecTo : "/"
    })
    
});

