// Schema for the Payout.
const mongoose = require("mongoose");
const { Schema } = mongoose;

const CheckoutSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  Mobile: {
    type: Number,
    required: true,
  },
  AlternateMobile: {
    type: Number,
    required: true,
  },
  PINcode: {
    type: Number,
    required: true,
  },
  PaymentMode: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productPhoto: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
});
const Checkout = mongoose.model("Checkout", CheckoutSchema);
module.exports = Checkout;
