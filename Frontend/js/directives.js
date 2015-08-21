(function() {

var app = angular.module('blog-directives', []);

app.directive('socialFooter', function(){
	return {
		restrict: 'E',
		templateUrl: 'views/social-footer.html'
	};
});

app.directive('navigation', function(){
	return {
		restrict: 'E',
		templateUrl: 'views/navigation.html'
	};
});

app.directive('postsList', function(){
	return {
		restrict: 'E',
		templateUrl: 'views/posts-list.html'
	};
});

})();