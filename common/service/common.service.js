angular.modele('app')
.service('commonService', commonService)

function commonService($rootScope) {
    this.headerEmit = headerEmit;
    
    function headerEmit() {
        $rootScope.$broadcast("logindata", data);
    }
}