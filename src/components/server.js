const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const data = []; // This will hold the data received from the frontend

app.get("/api/items", (req, res) => {
  res.json(data);
});

app.post("/api/items", (req, res) => {
  const newItem = req.body;
  data.push(newItem);
  res.status(201).json({ message: "Data added successfully" });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
