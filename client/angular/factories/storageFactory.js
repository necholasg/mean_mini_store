myApp.factory('storageFactory', function($http){
  factory = {};
  products = [];
  customers = [];

  factory.allCustomers = function(callback){
    $http.get('/customers').success(function(res){
      if(res.status == 'error'){
        console.log('error in loading customers');
      }else{
        customers = res
        callback(customers)
      };
    });
  };
  factory.allProducts = function(callback){
    $http.get('/products').success(function(res){
      if(res.status == 'error'){
        console.log('error in loading customers');
      }else{
        products = res
        callback(products)
      };
    });
  };
  factory.addCust = function(newCust, callback){
    $http.post('/customers/new', newCust).success(function(res){
      if(res.status == "success"){
          customers.push(res.data);
          callback(customers);
      }else{
        console.log("error with adding customer");
      }
    })
  };
  factory.removeCust = function(customer, callback){
    $http.delete('customers/' + customer._id).success(function(res){
      if(res.status == 'success'){
        customers.splice(customers.indexOf(customer), 1);
        callback(customers)
      }else{
        console.log("errror in remove cust");
      }
    })
  };
  factory.addProduct = function(newProd, callback){
    console.log(newProd);
    $http.post('/products/new', newProd).success(function(res){
      if(res.status == "success"){
          products.push(res.data);
          callback(products);
      }else{
        console.log("error with adding product");
      }
    })
  };
  factory.updateProduct = function(prod, callback){
    var newQuantity = {};
    newQuantity.old = prod
    for(x in products){
      if(products[x].name == prod.product){
        newQuantity.new = products[x].quantity - prod.quantity
      }
    }
    $http.post('/products/update', newQuantity).success(function(res){
      if(res.status == "error"){
          console.log("error with adding product");
      }else{
        $http.get('/products').success(function(res){
          if(res.status == 'error'){
            console.log('error in loading customers');
          }else{
            products = res
          };
        });
        callback(products);
      }
    })
  };
  return factory;
})
