myApp.factory('ordersFactory', function($http){
  factory = {};
  orders = [];

  factory.allOrders = function(callback){
    $http.get('/orders').success(function(res){
      if(res.status == 'error'){
        console.log('error in loading orders');
      }else{
        orders = res
        callback(orders)
      };
    });
  };
  factory.addOrder = function(newOrder, callback){
    $http.post('/orders/new', newOrder).success(function(res){
      if(res.status == "success"){
          orders.push(res.data);
          callback(orders, res.data);
      }else{
        console.log("error with adding order");
      }
    })
  };
  factory.makenumbers = function(callback){
    arr = []
    for(var i = 1; i<16; i++){
      arr.push(i)
    }
    callback(arr)
  }
  return factory
})
