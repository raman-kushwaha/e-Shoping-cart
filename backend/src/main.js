const express = require("express");
require("dotenv").config();
const app = express();
const fs = require("fs");
const cookieParser = require("cookie-parser");

//connection middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cookie-parser
app.use(cookieParser());

//database connectio
const connect = require("./model/connection");
connect("mongodb://127.0.0.1:27017/eShopingCart").then(
  console.log(`Database run at :  mongodb://127.0.0.1:27017/`)
);

//routes
const staticRoute = require("./staticRoute");
const productRoute = require("./productRoute");
app.use("/form", staticRoute);
app.use("/api/products", productRoute);

app.listen(process.env.PORT, () =>
  console.log(`http://localhost:${process.env.PORT}`)
);
