'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('post', {
		url: '/post/:postId',
		templateUrl: 'js/post/post.html',
		controller: 'PostCtrl',
		resolve: {
			users: function (User) {
				return User.findAll();
			}
		}
		/*
				add a resolve block that retrieves all the users
				so that the author field of the posts will be automatically
				populated
		*/
	})
});

// add necessary dependencies
app.controller('PostCtrl', function($stateParams, Post, $log, $scope, users) {
	console.log('the users are', users);
	Post.find($stateParams.postId)
	.then(post => {
		$scope.post = post;
		console.log('the post is', post);
	})
	.catch($log.error);

	/* 1. FIND POST
		use state params to retrieve the post id and attach post object to scope
		on controller load
	*/


	/*
		2. EDIT POST
		create a function that edits the post, adds an alert that the post has been
		successfully edited, and displays the edited post.

	*/

})