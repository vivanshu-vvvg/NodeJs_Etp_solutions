/*
Create a web server application with the http module for the following scenario
    a) Create a server node.js application using http module to verify whether a number is prime or not. 
    b) Accept a number from the input text field of the client page and provide the output values as a response with the click event on a button. 
*/

const http = require('http');
const url = require('url');

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const server = http.createServer(function(req, res) {
  const path = url.parse(req.url).pathname;
  if (path === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
      <html>
        <head>
          <title>Prime Number Checker</title>
        </head>
        <body>
          <h1>Prime Number Checker</h1>
          <form method="GET" action="/check">
            <label for="num">Enter a number:</label>
            <input type="text" id="num" name="num">
            <button type="submit">Check</button>
          </form>
        </body>
      </html>
    `);
    res.end();
  } else if (path === '/check') {
    const query = url.parse(req.url, true).query;
    const num = parseInt(query.num);
    if (isNaN(num)) {
      res.writeHead(400, {'Content-Type': 'text/html'});
      res.write(`
        <html>
          <head>
            <title>Prime Number Checker</title>
          </head>
          <body>
            <h1>Error</h1>
            <p>Invalid number</p>
            <a href="/">Back to form</a>
          </body>
        </html>
      `);
      res.end();
    } else {
      const result = isPrime(num);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(`
        <html>
          <head>
            <title>Prime Number Checker</title>
          </head>
          <body>
            <h1>Prime Number Checker</h1>
            <p>The number ${num} is ${result ? 'prime' : 'not prime'}</p>
            <a href="/">Back to form</a>
          </body>
        </html>
      `);
      res.end();
    }
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('404 Not Found');
    res.end();
  }
});

server.listen(3300, function() {
  console.log('Server listening on port 3300');
});
