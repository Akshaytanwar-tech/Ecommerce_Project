// Routes for the categories CRUD operations.
const express = require("express");
const router = express.Router();
const Category = require("../models/category");
const Product = require("../models/product");

// Api-1 For category creation
router.post("/category", async (req, res) => {
  const { name, photo } = req.body;
  let catergory = await Category.findOne({ name });
  if (catergory) {
    return res.status(400).json({ error: "sorry category is already exists" });
  }
  // Create category in the database
  catergory = await Category.create({
    name: name,
    photo: photo,
  });

  res.json("category is created");
});

// Api-2  For Fetch the categories
router.get("/fetchcategories", async (req, res) => {
  let categories = await Category.find();
  res.json(categories);
});

// Api-3:- To delete a category if that category does not have any product.
router.delete("/deletecategory/:id", async (req, res) => {
  let category = await Product.find({ category: req.params.id });

   if (category.length !== 0) {
    return res
      .status(404)
      .json(
        "First delete all the product on this category Or Category is not found"
      );
  }
  category = await Category.findByIdAndDelete(req.params.id);
  if (!category) {
    return res.status(404).json("Category not found");
  }
  res.json("Category has been deleted");
});

module.exports = router;
