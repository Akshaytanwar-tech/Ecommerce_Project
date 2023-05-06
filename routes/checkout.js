// Routes for the Operation related to payment.
const express = require("express");
const Checkout = require("../models/checkout");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const stripe = require("stripe")("sk_test_51Mcs7PSIOxSRCSOkQMy6tspGal8W9WqFezfXEwt0VkBmrCZUFaFQwJbSj6sxJRntn4SHyUFndCKAJWoN4shL5plD00ZTJ0cuwT"); 


// API 1:- for Adress details
router.post("/Order", fetchuser, async (req, res) => {
  const {
    name,
    address,
    Mobile,
    AlternateMobile,
    PINcode,
    productID,
    productName,
    productPhoto,
    productPrice,
    PaymentMode,
  } = req.body;

  let order = await Checkout.create({
    productId: productID,
    userId: userID,
    name: name,
    address: address,
    Mobile: Mobile,
    AlternateMobile: AlternateMobile,
    PINcode: PINcode,
    productName: productName,
    productPhoto: productPhoto,
    productPrice: productPrice,
    PaymentMode: PaymentMode,
  });
  res.json(order);
});

// API 2:- to fetch orders
router.get("/fetchOrder", fetchuser, async (req, res) => {
  let orders = await Checkout.find({ userId: userID });
  res.json(orders);
});

// API 3:- to cancel order
router.get("/cancelorder/:id", async (req, res) => {
  await Checkout.findByIdAndDelete(req.params.id);
  res.send("The order has been canceled");
});
module.exports = router;

//API :- to order product from card

router.post("/api/create-checkout-session", async (req, res) => { 
  const { name,price,quantity } = req.body; 
  const session = await stripe.checkout.sessions.create({ 
    payment_method_types: ["card"], 
    line_items: [ 
      { 
        price_data: { 
          currency: "inr", 
          product_data: { 
            name: name, 
          }, 
          unit_amount: price * 100, 
        }, 
        quantity: quantity, 
      }, 
    ], 
    mode: "payment", 
    success_url: "http://localhost:3000/Ordersuccess", 
    cancel_url: "http://localhost:3000/Ordercancel", 
  }); 
  res.json({ id: session.id }); 
});  