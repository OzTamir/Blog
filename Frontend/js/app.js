(function() {

var app = angular.module('blog', ['blog-directives', 'ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.
      when('/index', {
        templateUrl: 'views/posts-list.html',
        controller: 'IndexController'
    }).
    when('/post/:post_id', {
    	templateUrl: 'views/post-body.html',
    	controller: 'PostController',
    	controllerAs: 'postCtrl'
    }).
    when('/about', {
    	templateUrl: 'views/about.html',
    	controller: function(){}
    }).
	otherwise({
	    redirectTo: '/index'
	});
});

app.controller('PostController', ["$scope", "$routeParams", "$http", function($scope, $routeParams, $http){
	$scope.post_id = $routeParams.post_id;
	$http.get('http://localhost:5000/post/' + $routeParams.post_id).then(function(resp) {
		console.log('Success', resp);
		$scope.post = resp.data
	}, function(err) {
		console.error('ERR', err);
		$scope.post = {
			title: 'Oops...',
			subtitle: 'Something went wrong, please try again.',
			error: true
		}
	});

}]);

app.controller('IndexController', ["$scope", "$http", function($scope, $http){
	$http.get('http://localhost:5000/posts').then(function(resp) {
		console.log('Success', resp);
		$scope.posts = resp.data;

	}, function(err) {
		console.error('ERR', err);
		$scope.posts = [{
			title: 'Oops...',
			subtitle: 'Something went wrong, please try again.',
			error: true
		}];
	});

}])
})();














