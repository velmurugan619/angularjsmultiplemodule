angular.module('app.user')
.controller('loginCtrl', loginCtrl)
loginCtrl.$inject = ['loginService', '$location'];
function loginCtrl(loginService, location) {
    var login = this;
    login.onLogin = onLogin;
    /* Login Function*/
    function onLogin(userDetail) {
        loginService.loginAuth(userDetail).then(function(response) {
            login.userToken = response[0].data;
            sessionStorage.setItem('token', login.userToken.token);
            loginService.userLogin(userDetail).then(function(response) {
                login.userDetail = response[0].data;
                sessionStorage.setItem('user', JSON.stringify(login.userDetail.data));
                location.path("/user/home");
            })
        })
    }
}