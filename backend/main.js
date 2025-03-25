const express = require("express");
require("dotenv").config();
const fs = require("fs");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 4000;

//connection middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cookie-parser
app.use(cookieParser());

//database connectio
const connect = require("./model/connection");
connect(process.env.CONNECTION_TO_DATABASE).then(
  console.log(`Database run at :  mongodb://127.0.0.1:27017/`)
);

//routes
const staticRoute = require("./staticRoute");
const productRoute = require("./productRoute");
app.use("/form", staticRoute);
app.use("/api/products", productRoute);

app.listen(PORT, () => console.log(`http://localhost:${process.env.PORT}`));
