const express = require("express");
require("dotenv").config();
const app = express();

//connection middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//database connectio
const connect = require("./model/connection");
connect("mongodb://127.0.0.1:27017/eShopingCart").then(
  console.log(`Database run at :  mongodb://127.0.0.1:27017/`)
);

//routes
const router = require("./routes");
app.use("/form", router);

app.listen(process.env.PORT, () =>
  console.log(`http://localhost:${process.env.PORT}`)
);
