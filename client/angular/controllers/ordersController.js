myApp.controller('ordersController', function($scope, ordersFactory, storageFactory){
  $scope.quantities = null;

  storageFactory.allCustomers(function(data){
    $scope.customers = data;
  })

  storageFactory.allProducts(function(data){
    $scope.products = data;
  })

  ordersFactory.allOrders(function(data){
    $scope.orders = data;
  })

  ordersFactory.makenumbers(function(data){
    $scope.numbers = data
  })

  $scope.addOrder = function(){
    var flag = false;
    if($scope.newOrder === undefined || $scope.newOrder.customer === undefined){
      $scope.errors = {errors:'All selects must be used'};
      flag = true;
    }
    if(flag == false){
      $scope.newOrder.created_at = new Date
      ordersFactory.addOrder($scope.newOrder, function(data, pata){
        $scope.orders = data;
        $scope.lastOrder = pata;
        storageFactory.updateProduct(pata, function(data){
          $scope.products = data;
        })
      });
    }
    $scope.newOrder = {};
  };


  $scope.removeCust = function(customer){
    storageFactory.removeCust(customer, function(data){
      $scope.customers = data;
    });
  }
  $scope.new = function(){
    $scope.quantities = [];
    for (var i = 1; i <= $scope.newOrder.product.quantity; i++){
      $scope.quantities.push(i)
    }
    $scope.selection = true;
  }
});
