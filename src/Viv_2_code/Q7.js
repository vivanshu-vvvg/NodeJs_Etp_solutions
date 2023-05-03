/*
Q7 implement a client-server application with the express, http, and socket io modules for the following scenario 
    a) Display the student details in the server console after getting a request (connection) from a client. 
    b)Broadcast the only odd visitor count from the server to all clients with the new client connections

*/
//npm install socket.io

const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Read HTML file
const indexHtml = fs.readFileSync(__dirname + '/Q7.html', 'utf-8');

// Serve HTML file
app.get('/', (req, res) => {
  res.send(indexHtml);
});

let visitorCount = 0;

io.on('connection', (socket) => {
  visitorCount++;
  console.log(`New client connected. Total visitors: ${visitorCount}`);

  // Send odd visitor count to all clients
  if (visitorCount % 2 !== 0) {
    io.emit('oddVisitorCount', visitorCount);
  }

  // Disconnect event
  socket.on('disconnect', () => {
    visitorCount--;
    console.log(`Client disconnected. Total visitors: ${visitorCount}`);
  });
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
