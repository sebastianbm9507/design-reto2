var app = angular.module('tabla_juegos',['ngRoute']).controller('ctrl_principal',function($http,$scope){
		$http.get('jsonTest.json').then(function(response){
				$scope.data=response.data;
		});
});

app.config(function ($routeProvider) {
    $routeProvider.when("/" , {
        controller : "ctrl_principal",
        templateUrl: "../templates/tabla.html"
    })
    .otherwise({
        reditecTo : "/"
    })
    
});

