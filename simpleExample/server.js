import { WebSocketServer } from "ws";
import { watchFile, readFileSync } from "node:fs";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    console.log("received: %s", data);
  })
  ws.send("Connected");
  ws.on("close", () => console.log("Client has disconnected!"));
});

watchFile("message.txt", (curr, prev) => {
  console.log("Sending update");
  const text = readFileSync("message.txt", "utf-8");
  wss.clients.forEach((ws) => {
    ws.send("Updated to: " + text);
  });
});
