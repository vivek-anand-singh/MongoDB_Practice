const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();


app.use(express.json());

mongoose
  .connect(
    process.env.MONGO_URL,
  )
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log("Db connection Failed", err);
  });

// ProductSchema

app.get("/", (req, res) => {
  res.send("Hello World");
});   

app.listen(8086, () => {
  console.log("Server is live at http://localhost:8086")
});
