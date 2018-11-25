const express = require("express");
const MAP = require("./map");

const app = express();

app.get("/", (req, res) => {
  res.send(MAP);
});

const PORT = 3000 || process.env.PORT;
app.listen(PORT);
