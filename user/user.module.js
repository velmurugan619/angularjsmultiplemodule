angular.module('app.user',['app.user.layout'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('login', {
        url: '/login',
        templateUrl: '/user/login/login.tpl.html',
        controller: 'loginCtrl as login'
    })
    .state('user', {
        url: '/user',
        templateUrl: '/user/layout/layout.tpl.html',
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