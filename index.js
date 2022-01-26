const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

dotenv.config();

//CONNECT TO DB
mongoose.connect(process.env.DB_CONNECT, { userNewUrlParser: true }, () =>
  console.log("connected to DB")
);

//MIDDLEWARE
app.use(express.json());

//ROUTE MIDDLEWARE
app.use("/api/user", authRoute);

//LISTENING TO SERVER
app.listen(3000, () => console.log("server up and running"));



