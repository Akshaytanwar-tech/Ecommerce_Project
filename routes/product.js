// Routes related to the Product CRUD operation.
const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const { body, validationResult } = require("express-validator");

//Api 1:- To create a product with its category.
router.post(
  "/Productcreate",
  [
    body("quantity")
      .isInt({ min: 0 })
      .withMessage("amount is not a number or amount is less than zero"),
    body("price")
      .isInt({ min: 0 })
      .withMessage("amount is not a number or amount is less than zero"),
    body("description")
      .isLength({ min: 15 })
      .withMessage("Description is more than 15 words"),
  ],
  async (req, res) => {
    const {
      name,
      photo,
      price,
      description,
      quantity,
      CategoryID,
      tags,
      dimentionPhotos,
      specifications,
    } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let product = await Product.create({
      name: name,
      description: description,
      photo: photo,
      price: price,
      quantity: quantity,
      category: CategoryID,
      tags: tags,
      dimentionPhotos: dimentionPhotos,
      specifications: specifications,
    });

    res.json(product);
  }
);

// Api- 2:- To fetch all the Products to find the number of products on the website.
router.get("/Fetchallproduct", async (req, res) => {
  let product = await Product.find();
  res.json(product);
});

// Api- 3:- To Fetch the details of a particular products using its id.
router.post("/Fetchproductdetail/:id", async (req, res) => {
  let product = await Product.findById(req.params.id);
  res.json(product);
});

// Api- 4:- To fetch the products of a particular category by its category id.
router.post("/Fetchallproductbycategory/:id", async (req, res) => {
  let product = await Product.find({ category: req.params.id });
  res.json(product);
});

//Api:- 5:- To delete product
router.delete("/deleteproduct/:id", async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).send("product not found");
  }
  product = await Product.findByIdAndDelete(req.params.id);
  res.json("Note has been deleted");
});

//Api:- 6:- To Search particular product
router.get("/Searchitem/:key", async (req, res) => {
  let searchedResult = await Product.find({
    $or: [{ tags: { $regex: req.params.key } }],
  });
  res.json(searchedResult);
});
module.exports = router;
