const express = require("express");
const router = express.Router();

let data = require("../data/data.json");

router.get("/", (req, res) => {
  let albumPhotos = [];
  let pageAlbums = [];
  data.speakers.forEach(albumObj => {
    albumPhotos = albumPhotos.concat(speakerObj.cover);
  });
  res.render("index", {
    imageURL: albumPhotos
  });
});

router.get("/:albumID", (req, res) => {
  let albumPhotos = [];
  let pageAlbums = [];
  data.speakers.forEach(albumObj => {
    if (albumObj.shortTitle == req.param("albumID")) {
      pageAlbums.push(albumObj);
      albumPhotos = albumObj.imageURL;
    }
  });
  res.render("index", {
    pageTitle: "",
    albumTitle: pageAlbums[0].albumTitle,
    imageURL: albumPhotos,
    allAlbums: pageAlbums,
    pageID: ""
  });
});

module.exports = router;
