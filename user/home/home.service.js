angular.module('app.user.layout')
.service('homeService', homeService)
function homeService($http, $q, baseUrl) {
    this.getProduct = getProduct;
    
    function getProduct(data) {
        return $q.all([$http.get(baseUrl+'consumer/special-product/'+data)]);
    }
}