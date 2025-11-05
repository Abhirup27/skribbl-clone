// const { App } = require("uWebSockets.js");
// const { Server } = require("socket.io");
import { App } from "uWebSockets.js";
import { Server } from "socket.io";
const app = App();
const io = new Server();

io.attachApp(app);

io.on("connection", (socket) => {
  socket.emit("hello");
  socket.send("hello");
});

app.listen(3000, (token) => {
  if (!token) {
    console.warn("port already in use");
  }
});
