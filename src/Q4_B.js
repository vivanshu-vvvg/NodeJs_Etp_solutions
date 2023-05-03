// B)Create a form having text boxes and a submit button. On the click of the submit button, the values entered in the form should be printed on the web page Use HTTP module for this task

const http = require('http');
const url = require('url');
const qs = require('querystring');

// Create a server
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    // Serve the HTML form page
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <form method="POST" action="/">
        <label>Viv</label>
        <input type="text" name="name"><br>
        <label>Email:</label>
        <input type="text" name="email"><br>
        <button type="submit">Submit</button>
      </form>
    `);
    res.end();
  } else if (req.method === 'POST') {
    // Parse the form data and print it on the web page
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const formData = qs.parse(body);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(`<p>Name: ${formData.name}</p>`);
      res.write(`<p>Email: ${formData.email}</p>`);
      res.end();
    });
  } else {
    // Handle other HTTP methods
    res.writeHead(405, { 'Allow': 'GET, POST' });
    res.end('Method not allowed');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




/* This code creates an HTTP server that listens on port 3000 (or the port specified in the PORT environment variable) and handles GET and POST requests. When a GET request is received, the server responds with an HTML form containing two text input fields for the name and email and a submit button. When a POST request is received (i.e., when the form is submitted), the server parses the form data using the querystring module and prints it on the web page.

To run this code, save it in a file (e.g., server.js) and run it using Node.js by typing node server.js in a terminal window. Then open a web browser and navigate to http://localhost:3000 to see the HTML form.
*/