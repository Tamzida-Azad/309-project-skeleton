var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name required'
  },

 description: {
    type: String,
    default: '',
    trim: true
    
  },
  
   price: {
    type: Number,
    trim: true,
    required: 'Price required'
  },
  
  quantity: {
    type: Number,
    default: 1,
    trim: true,
    required: 'Quantity required'
  },
  
  
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

created: {
    type: Date,
    default: Date.now
  }
}

var Product = mongoose.model('Product', ProductSchema, 'products');
module.exports = Product;
