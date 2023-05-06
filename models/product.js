// Schema for the product CRUD operations.
const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },

  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  tags: {
    type: String,
  },
  dimentionPhotos: {
    type: [String],
  },
  specifications: {},
});
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
