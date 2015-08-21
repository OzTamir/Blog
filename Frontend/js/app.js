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

app.controller('PostController', ["$scope", "$routeParams", function($scope, $routeParams){
	$scope.post_id = $routeParams.post_id;
	$scope.posts = [
		{
			id: 0,
			title: 'Hello World!',
			author: 'Oz Tamir',
			date: 1340056238044,
			subtitle: "Discover my secret plan",
			body: "Hello World, this is my first blog post in which I will talk about oh never mind this is just a project to learn Angular"
		},
		{
			id: 1,
			title: 'Hello Space!',
			author: 'Oz Tamir',
			date: 1440086248044,
			subtitle: "Going to the next level",
			body: "SPACEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE"
		}
	];		
}]);

app.controller('IndexController', function($scope){
	$scope.posts = [
		{
			id: 0,
			title: 'Hello World!',
			author: 'Oz Tamir',
			date: 1340056238044,
			subtitle: "Discover my secret plan",
			body: "Hello World, this is my first blog post in which I will talk about oh never mind this is just a project to learn Angular"
		},
		{
			id: 1,
			title: 'Hello Space!',
			author: 'Oz Tamir',
			date: 1440086248044,
			subtitle: "Going to the next level",
			body: "SPACEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE"
		}
	];	
})
})();