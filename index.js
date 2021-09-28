const express = require("express");
const fs = require("fs");
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const items = {
  sales: [
    {
      id: 1,
      img: "http://localhost:3000/items/nick-TJJ7L2anZLs-unsplash.jpg/image",
      label: "Aero flex suit",
      price: 240,
      promotion: 50,
      newPrice: 120,
    },
    {
      id: 2,
      img: "http://localhost:3000/items/karsten-winegeart-nFs98G05ZHM-unsplash.jpg/image",
      label: "Speedo masks",
      price: 100,
      promotion: 20,
      newPrice: 80,
    },
    {
      id: 3,
      img: "http://localhost:3000/items/joris-meier-wmQ4hbRFg_s-unsplash.jpg/image",
      label: "Xtreams backback",
      price: 150,
      promotion: 33,
      newPrice: 100,
    },
    {
      id: 4,
      img: "http://localhost:3000/items/sam-clarke-0SXvOLcOG-w-unsplash.jpg/image",
      label: "Sheilder hemlet",
      price: 180,
      promotion: 50,
      newPrice: 60,
    },
  ],
  crosscountry: [
    {
      id: 5,
      img: "http://localhost:3000/items/joris-meier-U6X0AH1v5Ak-unsplash.jpg/image",
      label: "Xtreams backback 2",
      price: 150,
    },
    {
      id: 6,
      img: "http://localhost:3000/items/mika-9IeEFATw1Xk-unsplash.jpg/image",
      label: "Snoowproofz pants",
      price: 100,
    },
    {
      id: 7,
      img: "http://localhost:3000/items/phillip-belena-eY-iYrKGOkw-unsplash.jpg/image",
      label: "Randonnia skis",
      price: 250,
    },
    {
      id: 8,
      img: "http://localhost:3000/items/simon-berger-PcVqr8v4XaA-unsplash.jpg/image",
      label: "Warmerer suit",
      price: 280,
    },
  ],
  downhill: [
    {
      id: 9,
      img: "http://localhost:3000/items/agnieszka-kowalczyk-ucYMpdbO6X8-unsplash.jpg/image",
      label: "Farted Xtrem",
      price: 360,
    },
    {
      id: 10,
      img: "http://localhost:3000/items/jack-finnigan-yQWAzepQZlY-unsplash.jpg/image",
      label: "Flying neutchmans",
      price: 320,
    },
    {
      id: 11,
      img: "http://localhost:3000/items/lidiia-piven-x6HxGqm7Nyk-unsplash.jpg/image",
      label: "Neptunia suit",
      price: 150,
    },
    {
      id: 12,
      img: "http://localhost:3000/items/matthieu-petiard-Pf6e3o0GL4M-unsplash.jpg/image",
      label: "Flow riders",
      price: 380,
    },
  ],
  snowboard: [
    {
      id: 13,
      img: "http://localhost:3000/items/colin-lloyd-DvIYbNCZAns-unsplash.jpg/image",
      label: "Buckshot rocks",
      price: 240,
    },
    {
      id: 14,
      img: "http://localhost:3000/items/dane-deaner-j5asemKMmQY-unsplash.jpg/image",
      label: "K2 board",
      price: 200,
    },
    {
      id: 15,
      img: "http://localhost:3000/items/perfect-snacks-SaRcln5IcE8-unsplash.jpg/image",
      label: "Neptunia suit",
      price: 150,
    },
    {
      id: 16,
      img: "http://localhost:3000/items/tanya-pro-O6fPlLe2z-k-unsplash.jpg/image",
      label: "Totemic board",
      price: 240,
    },
  ],
};

app.get("/", (req, res) => {
  res.status(200).send('Working !');
});

app.get("/sales", (req, res) => {
  res.status(200).send(items.sales);
});

app.get("/sales/:id", (req, res) => {
    res.status(200).send(items.sales.find(s => s.id == req.params.id));
  });

app.get("/cross-country", (req, res) => {
  res.status(200).send(items.crosscountry);
});

app.get("/cross-country/:id", (req, res) => {
    res.status(200).send(items.crosscountry.find(s => s.id == req.params.id));
  });

app.get("/downhill", (req, res) => {
  res.status(200).send(items.downhill);
});

app.get("/downhill/:id", (req, res) => {
  res.status(200).send(items.downhill.find(s => s.id == req.params.id));
});

app.get("/snowboard", (req, res) => {
  res.status(200).send(items.snowboard);
});

app.get("/snowboard/:id", (req, res) => {
    res.status(200).send(items.snowboard.find(s => s.id == req.params.id));
  });

app.get("/items/:id/image", (req, res) => {
  fs.readFile("fs/" + req.params.id, (err, data) => {
    res.writeHead(200, { "Content-Type": "image/jpg" });
    res.end(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
