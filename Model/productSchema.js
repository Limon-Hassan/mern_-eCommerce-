let mongoose = require('mongoose');

let productModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
      trim: true,
    },
    brand: {
      type: String,
    },
    description: {
      type: String,
      require: true,
    },
    Photo: {
      type: Array,
      require: [true, 'one image should needed'],
    },
    review: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'review',
      },
    ],
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
      },
    ],
    stock: {
      type: String,
    },
    price: {
      type: Number,
      require: true,
    },
    Discountprice: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('products', productModel);
