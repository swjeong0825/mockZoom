import express from "express";
import http from "http";
import WebSocket from "ws";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req,res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));


console.log("hello");

const handleListen = () => console.log("Listening on http://localhost:3000/")
// app.listen(3000, handleListen);

const server = http.createServer(app);
const wsServer = new WebSocket.Server({server});

const handleConnection = (socket) => {
  console.log(socket)
}

wsServer.on("connection", (socket) => {
  console.log("Connected to browser");
  socket.on("close", () => console.log("disconnected from browser"));
  socket.on("message", (msg) => {
    console.log(msg.toString());
  });


  socket.send("Hello!");

});

server.listen(3000, handleListen)