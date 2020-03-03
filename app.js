const express = require("express");
const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(require("./controllers/index"));

app.listen(3000, () => {
  console.log("Listening on port 3000.");
});
