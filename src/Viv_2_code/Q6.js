/*
Q6 Create a web server application with http module for the following scenario

    a) Create a server node.js application using http module to find the nth Fibonacci number 
    b) Accept a number from the input text field of the client page and provide the output values as a response with the click event on a button.
*/
const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  
  if (page === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><head><title>Fibonacci Number Finder</title></head>');
    res.write('<body><h1>Fibonacci Number Finder</h1>');
    res.write('<form action="/fib" method="post">');
    res.write('<label for="num">Enter the value of n:</label>');
    res.write('<input type="text" name="num" id="num" required>');
    res.write('<input type="submit" value="Submit">');
    res.write('</form></body></html>');
    res.end();
  } else if (page === '/fib' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const data = querystring.parse(body);
      const n = parseInt(data.num);
      if (isNaN(n)) {
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.write('Invalid input');
        res.end();
      } else {
        const result = fibonacci(n);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><head><title>Fibonacci Number Finder</title></head>');
        res.write(`<body><p>The ${n}th Fibonacci number is ${result}</p></body></html>`);
        res.end();
      }
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('Page not found');
    res.end();
  }
});

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

server.listen(3030, () => {
  console.log('Server running on port 3030');
});


/*
The querystring module in Node.js provides methods to parse and manipulate query strings. It can be used to extract key-value pairs from the query string of a URL and convert them into a JavaScript object for easier processing.

The url module in Node.js provides methods for parsing and formatting URLs. It can be used to extract various components of a URL, such as the protocol, hostname, port, path, and query string. It also provides methods for creating and modifying URLs.
*/