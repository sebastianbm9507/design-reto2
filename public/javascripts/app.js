var app = angular.module('tabla_juegos',['ngRoute'])

// CONTROLADOR EN CARGADO DE CARGAR LOS DATOS EN LA GRILLA
app.controller('ctrl_principal',function($http,$scope, $window , $location){
    
		$http.get('jsonTest.json').then(function(response){
				$scope.data=response.data;
		});
  
    
    
});

//Controlador de eventos
app.controller('ctrl_events', function ($scope , $window , $location) {


    
    $scope.alert = function(ob) {
//        alert(ob.type);
        alert("Esta opcion aun esta en desarrolo , Gracias");
    }
    
    $scope.singleElimination = function (param) {
        $location.path("/singleElimination");
    }
    
    $scope.rush = function (param) {
        $location.path("/");
    }
    
    $scope.vs = function (param) {
        $location.path("/vs")
        
    }
    $scope.grupos = function (param) {
        $location.path("/groups")
    }
})

// CONFIG DEL SITIO

app.config(function ($routeProvider) {
    $routeProvider.when("/" , {
        controller : "ctrl_principal",
        templateUrl: "../templates/tabla.html"
    })
    .when("/singleElimination" , {
        controller:"ctrl_principal",
        templateUrl:"../templates/single.html"
    })
        .when("/vs" , {
        controller:"ctrl_principal",
        templateUrl:"../templates/vs.html"
    })
        .when("/groups" , {
        controller:"ctrl_principal",
        templateUrl:"../templates/grupos.html"
    })
    .otherwise({
        reditecTo : "/"
    })
    
});

