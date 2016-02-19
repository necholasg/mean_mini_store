var customer = require('../controllers/orders.js');

module.exports = function(app){
  app.get('/customers', function(req, res){
    customer.getCustomers(req, res)
  });

  app.post('/customers/new', function(req, res){
    // console.log(req.body);
    customer.newCustomer(req, res)
  });

  app.delete('/customers/:id', function(req, res){
    customer.destroy(req, res)
  });

  app.get('/orders', function(req, res){
    customer.getOrders(req, res)
  });

  app.post('/orders/new', function(req, res){
    customer.newOrder(req, res)
  });

  app.post('/products/new', function(req, res){
    // console.log(req.body);
    customer.newProduct(req, res)
  });

  app.get('/products', function(req, res){
    customer.getProducts(req, res)
  });

  app.post('/products/update', function(req, res){
    customer.updateProducts(req, res)
  });

}
