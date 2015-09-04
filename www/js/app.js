// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var app = angular.module('starter', ['ionic'])
app.run(['$http', function($http) {
  $http.defaults.headers.common['Authorization'] = ' Token token="1111"';
}]);

app.controller('listController', function($http, $scope){
 $scope.news=[];
 $http.get('http://localhost:3000/posts.json').success(function(response){
   angular.forEach(response.posts, function(post){
     $scope.news.push(post)

   })
   console.log($scope.news.length)
  });
})

// app.config(function($stateProvider, $urlRouterProvider){
//   $stateProvider.state('list',{
//     url: '/list',
//     templateUrl: 'templates/list.html'
//   });
//   $urlRouterProvider.otherwise('/list')
// })



app.config(function($stateProvider, $urlRouterProvider) {
console.log($stateProvider)

  $stateProvider.state('list', {
    url: '/list',
    templateUrl: 'templates/list.html'
  });


  $urlRouterProvider.otherwise('/list');
});


app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

