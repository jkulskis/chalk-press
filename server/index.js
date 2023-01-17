// server/index.js

require("dotenv").config();

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/key", (req, res) => {
  res.json({ message: `Stripe Secret: ${process.env.STRIPE_SECRET_KEY}` });
});
