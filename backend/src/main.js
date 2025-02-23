const express = require("express");
const app = express();
const PORT = 8080;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log(
    "first come into this middleware for verification after that go farther"
  );
  next();
});

//database connectio
// const connect = require("./model/connection");
// connect(" mongodb://127.0.0.1:27017/eShopingCart").then(
//   console.log(`Database run at :  mongodb://127.0.0.1:27017/`)
// );

//routes
const router = require("./routes");
app.use("/", router);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
