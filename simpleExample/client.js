import WebSocket from "ws";

const ws = new WebSocket("ws://localhost:8080");

ws.on("open", () => {
  ws.send("Please connect me.");
});

ws.on("message", (data) => {
  console.log("received: %s", data);
});
