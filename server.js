const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.get("/products", (req, res) => {
  res.json([]);
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server started");
});
