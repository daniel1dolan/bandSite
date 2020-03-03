const express = require("express");
const router = express.Router();

let data = require("../data/data.json");

router.get("/", (req, res) => {
  let albumPhotos = [];
  let pageAlbums = [];
  data.albums.forEach(albumObj => {
    albumPhotos = albumPhotos.concat(albumObj.imageURL);
    pageAlbums.push(albumObj);
  });
  res.render("index", {
    imageURL: albumPhotos,
    albumInfo: pageAlbums
  });
});

module.exports = router;
