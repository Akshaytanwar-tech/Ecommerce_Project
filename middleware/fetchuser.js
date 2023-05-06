// Middleware to fetch the user id by its token.

const express = require("express");
var jwt = require("jsonwebtoken");

const fetchuser = (req, res, next) => {
  const token = req.header("token");
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  userID = decoded.user.id;
  next();
};

module.exports = fetchuser;
