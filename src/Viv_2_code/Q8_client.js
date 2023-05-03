const net = require('net');

const client = new net.Socket();

const data = {
  name: 'John Doe',
  age: 25,
  email: 'johndoe@example.com',
};

const jsonData = JSON.stringify(data);

client.connect(3330, 'localhost', () => {
  console.log('Connected to server');
  client.write(jsonData);
});

client.on('data', (data) => {
  console.log('Received message:', JSON.parse(data.toString()).message);
  client.end();
});

client.on('end', () => {
  console.log('Disconnected from server');
});
