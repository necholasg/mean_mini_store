var mongoose = require('mongoose');

var customerSchema = new mongoose.Schema({
  name: String,
  created_at: Date
})

mongoose.model('Customer', customerSchema);

var productSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  quantity: Number,
  created_at: Date
})

mongoose.model('Product', productSchema);

var orderSchema = new mongoose.Schema({
  customer: String,
  product: String,
  quantity: Number,
  created_at: Date
})

mongoose.model('Order', orderSchema);
