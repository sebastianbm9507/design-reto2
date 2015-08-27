var app = angular.module('tabla_juegos',['ngRoute'])

// CONTROLADOR EN CARGADO DE CARGAR LOS DATOS EN LA GRILLA
app.controller('ctrl_principal',function($http,$scope, $window , $location){
    
		$http.get('jsonTest.json').then(function(response){
				$scope.data=response.data;
		});
  
    
    
});

//Controlador de eventos
app.controller('ctrl_events', function ($scope , $window , $location) {
    
    
    
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
    .otherwise({
        reditecTo : "/"
    })
    
});

