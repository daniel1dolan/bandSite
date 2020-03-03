let data = require("./data.json");

// console.log(data.albums);

let allSongs = [];

data.albums.forEach(albumObj => {
  allSongs = allSongs.concat(albumObj.songs);
});

console.log(allSongs);
