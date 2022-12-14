import WebSocket from 'ws';
import moment from "moment";

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', function open() {
  console.log('connected')
});

ws.on('message', (received) => {
  console.log("Received at:", moment().format("HH:mm:ss:SSS"));
  console.log('received: %s', JSON.parse(received).data);
});
