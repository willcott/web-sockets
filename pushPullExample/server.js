import { WebSocketServer } from "ws";
import moment from "moment";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    console.log("Received at:", moment().format("HH:mm:ss:SSS"));
    console.log("Received: %s", data);
    wss.clients.forEach((ws) => {
      ws.send(data);
    });
  });

  ws.on("close", () => console.log("Client has disconnected!"));
});
