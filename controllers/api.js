const express = require("express");
const router = express.Router();
const body_parser = require("body-parser");
const fs = require("fs");

// data is brought into the file
let feedbackData = require("../data/feedback.json");

//Grabs form data from header. bodyparser is middleware between the request => and handler so request => middleware => handler so feedback.js => bodyparser => api.js
router.use(body_parser.urlencoded({ extended: false }));
//body_parser.json converts header json string into a javscript object
router.use(body_parser.json());

router.get("/api", (req, res) => {
  res.json(feedbackData);
});

//take data from file (client feedback form data). Update json file with form data.
router.post("/api", (req, res) => {
  console.log(req.body);
  //update feedback.json
  feedbackData.unshift(req.body);
  //[{req.body},{},{}]
  fs.writeFile(
    "data/feedback.json",
    JSON.stringify(feedbackData),
    "utf8",
    err => {
      if (err) {
        console.log(err);
      }
      console.log(feedbackData);
      //after update, send updated data back to the js then back to the view. feedbackdata is js object, so must be converted to json string.
      res.json(feedbackData);
    }
  );
});

//Delete request and have id on the url
router.delete("/api/:id", (req, res) => {
  feedbackData.splice(req.params.id, 1);
  fs.writeFile(
    "data/feedback.json",
    JSON.stringify(feedbackData),
    "utf8",
    err => {
      if (err) {
        console.log(err);
      }
      res.json(feedbackData);
    }
  );
});

module.exports = router;
