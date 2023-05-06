// Schema for the user login, sign up , change password etc.
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  role: {
    type: Number,
    default: 0,
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
