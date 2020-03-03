const express = require("express");
const router = express.Router();

let data = require("../data/data.json");

router.get("/album/:albumID", (req, res) => {
  let albumPhotos = [];
  let pageAlbums = [];
  data.albums.forEach(albumObj => {
    if (albumObj.shortTitle == req.param("albumID")) {
      pageAlbums.push(albumObj);
      albumPhotos = albumObj.imageURL;
    }
  });
  res.render("album", {
    pageTitle: pageAlbums[0].albumName,
    albumTitle: pageAlbums[0].albumName,
    imageURL: albumPhotos,
    allAlbums: pageAlbums,
    pageID: ""
  });
});

module.exports = router;
