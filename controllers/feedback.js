const express = require("express");
const router = express.Router();

let data = require("../data/data.json");
let feedbackData = require("../data/feedback.json");

router.get("/feedback", (req, res) => {
  let pageAlbums = [];
  data.albums.forEach(albumObj => {
    pageAlbums.push(albumObj);
  });
  res.render("feedback", {
    pageTitle: "Feedback",
    albumInfo: pageAlbums
  });
});

module.exports = router;
