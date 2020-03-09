const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(express.static("public"));

app.set("view engine", "ejs");

//routers are used by the app.
app.use(require("./controllers/index"));
app.use(require("./controllers/album"));
app.use(require("./controllers/feedback"));
app.use(require("./controllers/api"));
app.use(require("./controllers/socket"));

io.on("connection", socket => {
  console.log("user is conencted");
  socket.on("chat message", msg => {
    io.emit("chat message", msg);
  });
});
http.listen(3000, () => {
  console.log("listening on port 3000");
});

app.listen(3000, () => {
  console.log("Listening on port 3000.");
});
