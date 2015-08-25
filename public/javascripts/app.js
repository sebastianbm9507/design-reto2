angular.module('tabla_juegos',[]).controller('ctrl_principal',function($http,$scope){
		$http.get('jsonTest.json').then(function(response){
				$scope.data=response.data;
		});
});