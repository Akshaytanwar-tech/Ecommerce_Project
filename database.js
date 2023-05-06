const mongoose = require("mongoose");

const connectToMongo = async () => {
  await mongoose.connect(
    "mongodb://localhost:27017/EcommerceDatabase",

    () => {
      console.log("Server connected to Database");
    }
  );
};
connectToMongo().catch((err) => console.log(err));

module.exports = connectToMongo;
