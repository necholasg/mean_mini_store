myApp.controller('dashboardController', function($scope, ordersFactory, storageFactory){
  storageFactory.allCustomers(function(data){
    $scope.customers = data;
  });

  storageFactory.allProducts(function(data){
    $scope.products = data;
  });

  ordersFactory.allOrders(function(data){
    $scope.orders = data;
  });
  $scope.orderLimit = 3
  $scope.customerLimit = 3
  $scope.productLimit = 5

  $scope.increaseOrders = function(){
    $scope.orderLimit += $scope.orders.length;
  }
  $scope.increaseCustomers = function(){
    $scope.customerLimit += $scope.customers.length;
  }
  $scope.increaseProducts = function(){
    $scope.productLimit += 5;
  }
  $scope.sensitiveSearch = function(){
    $scope.myFilter = $scope.test
  };
  $scope.myFilter = {};
  $scope.test = "";
});
