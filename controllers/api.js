const express = require("express");
const router = express.Router();
const body_parser = require("body-parser");

let feedbackData = require("../data/feedback.json");
const fs = require("fs");

router.use(body_parser.urlencoded({ extended: false }));

router.get("/api", (req, res) => {
  res.send("json data");
});

router.post("/api", (req, res) => {
  //take data from file
  console.log(req.body);
  feedbackData.unshift(req.body);
  fs.writeFile(
    "data/feedback.json",
    JSON.stringify(feedbackData),
    "utf8",
    err => {
      if (err) {
        console.log(err);
      }
      console.log(feedbackData);
      res.json(feedbackData);
    }
  );
});

module.exports = router;
