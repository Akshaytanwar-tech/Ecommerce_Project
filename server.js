const express = require("express");
const connectToMongo = require("./database");
const port = process.env.PORT || 5000;
const cors = require("cors");
const app = express();
require("dotenv").config();
connectToMongo();

app.use(express.json());
app.use(cors());

// Using routes to the server.
app.use("/api/auth", require("./routes/user"));
app.use("/api/Category", require("./routes/categories"));
app.use("/api/Product", require("./routes/product"));
app.use("/api/Order", require("./routes/order"));
app.use("/api/checkout", require("./routes/checkout"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
