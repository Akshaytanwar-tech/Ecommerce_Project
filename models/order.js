// Schema for the Cart Operations.
const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  name: {
    type: String,
  },
  photo: {
    type: String,
  },
  price: {
    type: Number,
  },
});
const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
