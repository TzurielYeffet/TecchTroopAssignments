const express = require("express");
const port = 3000;
const path = require("path");
const { json } = require("stream/consumers");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "/dist")));
app.use(express.static(path.join(__dirname, "/node_modules")));

const store = [
  { name: "table", inventory: 3, price: 800 },
  { name: "chair", inventory: 16, price: 120 },
  { name: "couch", inventory: 1, price: 1200 },
  { name: "picture frame", inventory: 31, price: 70 },
];

app.get("/", (req, res) => {
  // res.send("Server is up and running smoothly")
});

app.get("/priceCheck/:name", (req, res) => {
  const name = req.params.name;
  const item = store.find((item) => item.name === name);
  if (!item) {
    res.send({ price: null });
  } else {
    res.send({
      price: item.price,
    });
  }
});

app.get("/buy/:name", (req, res) => {
  const name = req.params.name;
  const item = store.find((item) => item.name === name);
  item.inventory = item.inventory > 0 ? item.inventory - 1 : 0;
  res.send(item);
});

app.get("/sale", (req, res) => {
  console.log("inside");
  const isAdmin = req.query.admin === "true";
  console.log(isAdmin);
  if(!isAdmin){
    console.log(isAdmin);
    
    res.status(204).send()
  }
  const adminItemsList = store.map((item) => {
    let discountedItem = { ...item };
    if (isAdmin === true && discountedItem.inventory > 10){
      discountedItem.price = item.price / 2;
    }
    return discountedItem;

  });

    res.send(adminItemsList);
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
