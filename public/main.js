var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html'
    })
    .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'users'
    })
    .when('/album', {
        templateUrl: 'views/albums.html',
        controller: 'albums'
    })
    .when('/posts', {
        templateUrl: 'views/posts.html',
        controller: 'posts'
    })
})

app.controller('users', function ($scope,$http){
    $http.get('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
        console.log(response.data);
        $scope.allUsers = response.data;
    })
})

app.controller('albums', function ($scope,$http){
    $http.get('https://jsonplaceholder.typicode.com/albums')
    .then(function(response){
        console.log(response.data);
        $scope.allAlbums = response.data;
    });
    $http.get('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
        console.log(response.data);
        $scope.allUsers = response.data;
    });
})

app.controller('posts', function ($scope,$http){
    $http.get('https://jsonplaceholder.typicode.com/posts')
    .then(function(response){
        console.log(response.data);
        $scope.allPosts = response.data;
    })
})

