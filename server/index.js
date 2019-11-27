const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

// Define consts for routing
const Location = require("./model/location.json");
const Warehouse = require("./model/warehouses.json");

app.use(cors());
app.use(express.json());

app.get("/location", (req, res, next) => {
  res.send(JSON.stringify(Location));
});

app.get("/warehouse", (req, res, next) => {
  res.send(JSON.stringify(Warehouse));
});

app.get("/product/:id", (req, res, next) => {
  console.log(req.params.id);
  const Product = Warehouse.map((obj, index) => {
    return obj["items"].filter(item => item.id === req.params.id);
  });

  let FixedProd = Product.filter(prodElement => prodElement.length > 0);
  res.json(FixedProd[0][0]);
});

app.get("/warehouse/:id", (req, res, next) => {
  console.log(req.params.id);
  const WarehouseOut = Warehouse.filter(obj => obj["id"] === req.params.id);
  res.send(JSON.stringify(WarehouseOut));
});

app.listen(PORT, (req, res) => {
  console.log(`Server is listening on PORT ${PORT}`);
});
