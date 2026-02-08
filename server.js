const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// 🔽 PASTE YOUR MONGODB LINK INSIDE THE QUOTES BELOW
mongoose
  .connect("mongodb://charan:Charan123@cluster0-shard-00-00.fnozz9m.mongodb.net:27017,cluster0-shard-00-01.fnozz9m.mongodb.net:27017,cluster0-shard-00-02.fnozz9m.mongodb.net:27017/?ssl=true&replicaSet=atlas-xxxxx&authSource=admin&retryWrites=true&w=majority")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend is running");
});
const productRoutes = require("./routes/productRoutes");
app.use("/products", productRoutes);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
