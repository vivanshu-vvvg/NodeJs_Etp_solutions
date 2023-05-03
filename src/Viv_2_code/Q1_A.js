/*
Implement an express application for the following
    a) Accept a number from the input text field of a user web page and perform the basic arithmetic operations, increment (++), decrement (--), and square, on the number inside a middleware function of server node.js application.
*/

const express = require('express');
const app = express();

// middleware function that performs arithmetic operations on the number
const performOperations = (req, res, next) => {
  const num = Number(req.query.num); // get the number from the query string
  const add = num + 10; // add 10 to the number
  const subtract = num - 5; // subtract 5 from the number
  const multiply = num * 2; // multiply the number by 2
  const divide = num / 3; // divide the number by 3
  const increment = num + 1; // increment the number by 1
  const decrement = num - 1; // decrement the number by 1
  const square = num * num; // square the number

  // add the results to the response object
  req.results = {
    add,
    subtract,
    multiply,
    divide,
    increment,
    decrement,
    square
  };
  next(); // call the next middleware function
};

// route handler that sends the results to the client
app.get('/', performOperations, (req, res) => {
  const results = req.results; // get the results from the request object
  res.send(results);
});

// start the server
app.listen(3003, () => {
  console.log('Server started on port 3003');
});










/*
similar type of question
Implement an express application for the following
     Accept a number from the input text field of a user web page and perform the basic arithmetic operations, (+,-,*,/), on those 2 numbers inside a middleware function of server node.js application.


*/