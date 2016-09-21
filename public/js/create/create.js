'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('create', {
		url: '/create/:userId',
		templateUrl: 'js/create/create.html',
		controller: 'CreateCtrl',
		resolve: {
			author: function (User, $stateParams) {
				return User.find($stateParams.userId);
			}
		}
	})
})

// add necessary dependencies here
app.controller('CreateCtrl', function($scope, author, Post, $log, $state) {

	console.log('the author is', author);
	console.log('this is POST', Post);

	$scope.newPost = {
		name: author.username
	};

	$scope.createNewPost = function () {
		Post.create({
			title: $scope.newPost.title,
			body: $scope.newPost.body,
			author: author._id
		})
		.then(post => {
			console.log('here is the post', post);
			$state.go('main');
		})
		.catch($log.error);
	};

	$scope.previewTrue = false;

	$scope.preview = function() {
		$scope.previewTrue = !$scope.previewTrue;
	};

})