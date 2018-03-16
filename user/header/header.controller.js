angular.module('app.user.layout')
.controller('headerCtrl', headerCtrl)
function headerCtrl($location) {
    var header = this;
    header.userDetail = JSON.parse(sessionStorage.getItem('user'));
    header.userName = header.userDetail.firstName + header.userDetail.lastName;
    header.userImage = header.userDetail.image;
    header.logOut = logOut;
    
    function logOut() {
        sessionStorage.clear();
        $location.path('/login')
    }
}