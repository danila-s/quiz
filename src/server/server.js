const fs = require("fs");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(8000, () => {
  console.log("Server has been started , port 8000 ");
});

app.get("/level/:id", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Content-Type", "application/json");
  const { id } = req.params;
  fs.readFile(`./level${id}.json`, "utf-8", (err, data) => {
    if (!err) {
      const result = JSON.parse(data);
      res.send(result);
    } else {
      console.log(err);
    }
  });
});