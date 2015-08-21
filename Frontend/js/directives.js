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

app.directive('dynamic', function ($compile) {
  return {
    restrict: 'A',
    replace: true,
    link: function (scope, ele, attrs) {
      scope.$watch(attrs.dynamic, function(html) {
        ele.html(html);
        $compile(ele.contents())(scope);
      });
    }
  };
});

})();