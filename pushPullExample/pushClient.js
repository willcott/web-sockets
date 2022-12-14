import WebSocket from "ws";
import { watchFile, readFileSync } from "fs";
import moment from "moment";

const ws = new WebSocket("ws://localhost:8080");

watchFile("message.txt", () => {
  console.log("Sent update at:", moment().format("HH:mm:ss:SSS"));
  const file = readFileSync("message.txt", "utf-8");
  ws.send(JSON.stringify({ data: file }));
});
