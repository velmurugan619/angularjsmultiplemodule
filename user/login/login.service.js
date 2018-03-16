angular.module('app.user')
.service('loginService', loginService)

function loginService($http, $q, baseUrl) {
    this.loginAuth = loginAuth;
    this.userLogin = userLogin;
    /* Login Auth Token */
    function loginAuth(data) {
        return $q.all([$http.post(baseUrl+'consumer/authenticate', data)]);
    }
    
    /* User Login */
    function userLogin(data) {
        return $q.all([$http.post(baseUrl+'consumer/sign-in',data)]);
    }
}