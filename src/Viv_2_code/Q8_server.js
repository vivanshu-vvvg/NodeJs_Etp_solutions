/* Q8 Implement TCP Socket client and server applications with the following criteria.

    a) Connect and send your  details to the server from the client application 
    b) terminal Display the student details in the server terminal after getting a request (connection) from a client
    c)Send a "Thank you" message to the client terminal.
*/

const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected');

  socket.on('data', (data) => {
    try {
      const jsonData = JSON.parse(data.toString());
      console.log('Received data:', jsonData);
      socket.write(JSON.stringify({ message: 'Thank you for your details!' }));
    } catch (error) {
      console.error('Error parsing JSON data:', error);
    }
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

const port = 3330;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
