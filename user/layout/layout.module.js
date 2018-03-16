angular.module('app.user.layout', [])
.config(function($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/home')
    $stateProvider
    .state('user.home', {
        url: '/home',
        templateUrl: '/user/home/home.tpl.html',
        controller: 'homeCtrl as home',
        resolve: {
            user: function($location) {
                if(sessionStorage.getItem('token').length > 0) {
                    $location.path('/user/home');
                } else {
                    $location.path('/login');
                }
            }
        }
    })
})