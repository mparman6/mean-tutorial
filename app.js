var app = angular.module("flapperNews", []);

app.factory('posts', [function() {
  // factory code
}]);

app.controller("MainCtrl", ['$scope', function($scope) {
  $scope.test = "Hello World!";
  $scope.posts = [];
  $scope.addPost = function() {
    if(!$scope.title || $scope.title === '') {return;}
    $scope.posts.push({
      title: $scope.title, 
      link: $scope.link,
      upvotes: 0});
    $scope.title = '';
    $scope.link = '';
  };

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  }
}]);