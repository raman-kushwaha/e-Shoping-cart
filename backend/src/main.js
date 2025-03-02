const express = require("express");
const Cors = require("cors");
const app = express();
const PORT = 8080;

//connection middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cors middleware
app.use(Cors());

//database connectio
const connect = require("./model/connection");
connect("mongodb://127.0.0.1:27017/eShopingCart").then(
  console.log(`Database run at :  mongodb://127.0.0.1:27017/`)
);

//routes
const router = require("./routes");
app.use("/", router);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
