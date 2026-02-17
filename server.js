const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend is running");
});

// PRODUCTS ROUTE
app.get("/products", async (req, res) => {
  res.json([]);
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
