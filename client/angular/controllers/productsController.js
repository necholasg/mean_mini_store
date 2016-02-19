myApp.controller('productsController', function($scope, ordersFactory, storageFactory){
  storageFactory.allProducts(function(data){
    $scope.products = data;
  })

  ordersFactory.makenumbers(function(data){
    $scope.numbers = data
  })

  $scope.addProduct = function(){

    $scope.newProduct.created_at = new Date
    console.log($scope.newProduct);
    storageFactory.addProduct($scope.newProduct, function(data){
      $scope.products = data;
    })
    $scope.newProduct = {}
  };


  $scope.removeCust = function(customer){
    storageFactory.removeCust(customer, function(data){
      $scope.customers = data;
    });
  }
  $scope.sensitiveSearch = function(){
    $scope.myFilter = $scope.test
  };
  $scope.myFilter = {};
  $scope.test = "";
});
