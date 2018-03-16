angular.module('app',['ui.router','app.user','kendo.directives'])
.constant('baseUrl','http://infinijith.com/AgroDeals/API/public/api/')
.config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/login')
})