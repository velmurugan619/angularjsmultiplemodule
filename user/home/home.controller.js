angular.module('app.user.layout')
.controller('homeCtrl', homeCtrl)
homeCtrl.$inject = ['homeService'];
function homeCtrl(homeService) {
    var home = this;
    
    home.getProductDetail = getProductDetail;
    
    
      
      function getProductDetail() {
          home.userDetail = JSON.parse(sessionStorage.getItem('user'));
          home.consumerId = home.userDetail.consumerId;
          homeService.getProduct(home.consumerId).then(function(response) { 
              home.productDetail = response[0].data.data;
              
              console.log(home.productDetail);
              
              home.gridOptions = {
                dataSource: {
                    data: home.productDetail,
                   
                    schema: {
                        model: {
                            fields: {
                                productId: { type: "string" },
                                productTitle: { type: "string" },
                                firstName: { type: "string" },
                                quantity: { type: "string" },
                                price: { type: "string" }
                            }
                        }
                    },
                    pageSize: 20,
                    serverPaging: true,
                    serverFiltering: true,
                    serverSorting: true
                },
                height: 550,
                filterable: true,
                sortable: true,
                pageable: true,
                columns: [{
                        field:"productId",
                        filterable: false
                    },
                    "productTitle",
                    {
                        field: "firstName",
                        title: "firstName"
                    }, {
                        field: "quantity",
                        title: "quantity"
                    }, {
                        field: "price",
                        title: "price"
                    }
                ]
              };
          })
      }
}