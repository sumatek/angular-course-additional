angular.module("uiRouterExample", ["ui.router"])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html'
    })
    .state('list', {
      url: '/list',
      controller: 'ListCtrl',
      templateUrl: 'templates/list.html'
    })
    .state('list.item', {
      url: '/:item',
      templateUrl: 'templates/list.item.html',
      controller: function($scope, $stateParams) {
        $scope.item = $stateParams.item;
      }
    })

  $urlRouterProvider.otherwise('/home');
})

.controller("ListCtrl", function($scope) {
    $scope.books = [
      {name: 'AngularJS for starter'},
      {name: 'AngularJS from novice to ninja'},
      {name: 'ReactJS vs AngularJS'}
    ];

    $scope.selectItem = function(selectedItem) {
        $scope.selectedItem = selectedItem;
    };

    $scope.isSelectedItem = function(item) {
      return $scope.selectedItem == item;
    }
});
