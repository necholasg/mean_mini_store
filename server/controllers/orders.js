var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
var Product = mongoose.model('Product');
var Order = mongoose.model('Order');
module.exports = {
  getCustomers: function(req, res){
    Customer.find({}, function(err, cust){
      if(err){
        console.log('Error in Load_all');
        res.json({status: 'error'})
      }else{
        console.log('success, all loaded');
        res.json(cust)
      }
    })
  },
  newCustomer: function(req, res){
    var new_add = new Customer({name:req.body.name, created_at: req.body.created_at})

    new_add.save(function(err, cust){
      if(err){
        res.json({status:'error'})
      }else{
        res.json({status:'success', data: cust})
      }
    })
  },
  destroy: function(req, res){
    Customer.remove({_id: req.params.id}, function(err, cust){
      if(err){
        res.json({status:'error'})
      }else{
        res.json({status:'success'})
      }
    })
  },
  getOrders: function(req, res){
    Order.find({}, function(err, orders){
      if(err){
        console.log('Error in get orders');
        res.json({status:'error'})
      }else{
        // console.log('success, loaded');
        res.json(orders)
      }
    })
  },
  newOrder: function(req, res){
    var new_order = new Order({customer: req.body.customer.name, product: req.body.product.name, quantity: req.body.quantity, created_at: req.body.created_at})
    new_order.save(function(err, order){
      if(err){
        res.json({status:'error'})
      }else{
        res.json({status:'success', data: order})
      }
    })
  },
  newProduct: function(req, res){
    var new_product = new Product({name: req.body.name, image: req.body.image, quantity: req.body.quantity, created_at: req.body.created_at, description: req.body.description})
    new_product.save(function(err, product){
      if(err){
        res.json({status:'error'})
      }else{
        res.json({status:'success', data: product})
      }
    })
  },
  getProducts: function(req, res){
    Product.find({}, function(err, products){
      if(err){
        console.log('Error in get products');
        res.json({status:'error'})
      }else{
        res.json(products)
      }
    })
  },
  updateProducts: function(req, res){
    console.log(req.body.old._id, req.body.new);
    Product.update({name: req.body.old.product}, {quantity: req.body.new }, function(err, product){
      if(err){
        console.log('Error in update products');
        res.json({status:'error'})
      }else{
        res.json(product)
      }
    })
  },
}
