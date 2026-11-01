const express = require("express");
const path = require("path");

const app = express();
const clientDirectory = path.join(__dirname, "..", "client");
const port = process.env.PORT || 3000;

app.use(express.static(clientDirectory));

app.listen(port, () => {
  console.log(`Sisily is running at http://localhost:${port}`);
});