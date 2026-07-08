const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 5000;

const MONGO_URL = process.env.MONGO_URL;
const connectDB = require("./db/db");

mongoose.connect(MONGO_URL).then(() => {
  console.log("MongoDB connected");

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

}).catch((error) => {
  console.error(error);
});