// This middleware is for to fetch the category by its name.

const Category = require("../models/category");
const fetchcategory = async (req, res, next) => {
  let categories = await Category.findOne({ name: req.body.Catname });
  category = categories;
  next();
};

module.exports = fetchcategory;
