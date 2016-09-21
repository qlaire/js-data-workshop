'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		templateUrl: '/main.html',
		controller: 'MainController',
		resolve: {
			users: function (User) {
				// sends a GET request to /api/users
				// remember, js-data constructs the route by
				// concatenating the basepath and the name of our resource
				return User.findAll();
				// under the hood, js-data
				// 1) maps over this array,
				// 2) instantiates each object as an instance of the User class,
				// and 3) injects the users in the cache : adding them to an array :
				/*
				.then(function (userObjects) {
					return userObjects.map(function (obj) {
						var user = User.createInstance(obj);
						return User.inject(user);
					});
				});
				*/
			},
			// injecting the users resolve-service into posts to
			// avoid race conditions
			posts: function (Post, users) {
				// GET --&gt; /api/posts
				return Post.findAll({});
			}
		}

	})
})

app.controller('MainController', function($scope, posts) {
	$scope.allPosts = posts;
	console.log('posts:', posts);
 	/*
		TODOS:
		1 - use js-data to retrieve all users and all posts
		(HINT: if you want to be fancy, add a resolve block to this state
		and retrieve the data there)

 	*/
})


