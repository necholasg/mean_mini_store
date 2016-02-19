myApp.controller('customerController', function($scope, storageFactory){
  $scope.customers = [];

  storageFactory.allCustomers(function(data){
    $scope.customers = data;
  })

  $scope.addCust = function(){
    var flag = false;
    if($scope.newCustomer === undefined || $scope.newCustomer.name === undefined){
      $scope.errors = {errors:'The customer name cannot be blank'};
      flag = true;
    }else{
      for(x in $scope.customers){
        if($scope.newCustomer.name == $scope.customers[x].name){
          $scope.errors = {errors:'This user already exists'};
          flag = true;
        }
      }
    }
    if(flag == false){
      $scope.newCustomer.created_at = new Date
      storageFactory.addCust($scope.newCustomer, function(data){
        $scope.customers = data;
      });
    }
    $scope.newCustomer = {};
  };
  $scope.removeCust = function(customer){
    storageFactory.removeCust(customer, function(data){
      $scope.customers = data;
    });
  }
});
