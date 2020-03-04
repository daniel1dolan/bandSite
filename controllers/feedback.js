const express = require("express");
const router = express.Router();

let data = require("../data/feedback.json");

router.get("/feedback", (req, res) => {
  res.render("feedback");
});
