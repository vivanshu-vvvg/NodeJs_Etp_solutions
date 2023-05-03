//Q3_B) Demonstrate the concept of middleware.

/*

In the context of web development, middleware is a software component that sits between a web application and the server or client, processing incoming and outgoing HTTP requests and responses. Middleware can add, modify or remove data from requests and responses, as well as perform other tasks such as authentication, logging, caching, error handling, and more. In this way, middleware provides a flexible and modular way to enhance the functionality and performance of web applications.

Here's an example of how middleware works in a Node.js web application:
*/
const express = require('express');
const app = express();

// Middleware function 1
app.use((req, res, next) => {
  console.log('Middleware 1: Request received');
  next();
});

// Middleware function 2
app.use((req, res, next) => {
  console.log('Middleware 2: Request processed');
  next();
});

// Route handler
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(3010, () => {
  console.log('Server started on port 3010');
});


/*
In this example, the app.use() method is used to register two middleware functions before the route handler. These middleware functions have access to the req and res objects, as well as a next function that allows them to pass control to the next middleware function or the route handler.

When a request is made to the server, the first middleware function logs a message to the console, then calls the next() function to pass control to the next middleware function. The second middleware function logs another message and calls next() again, which then passes control to the route handler. Finally, the route handler sends a response back to the client.
*/