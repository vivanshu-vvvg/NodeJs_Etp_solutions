/*
Create an express application with the following requirements

    a) Accept Student Name, Reg. no., Roll. No., Mobile No. and Mail Id from the input text fields of a client
    page and perform a chain of validations on the data using the express-validator module in the server application.
    b) Check all the fields are not empty, minimum and maximum lengths of data. 
    c) Add a submit button on the client web page to submit the data and display the warning messages if required. 
*/

// server.js
const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <form action="/" method="POST">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name"><br>

          <label for="regNo">Reg. No.:</label>
          <input type="text" id="regNo" name="regNo"><br>

          <label for="rollNo">Roll. No.:</label>
          <input type="text" id="rollNo" name="rollNo"><br>

          <label for="mobileNo">Mobile No.:</label>
          <input type="text" id="mobileNo" name="mobileNo"><br>

          <label for="mailId">Mail Id:</label>
          <input type="text" id="mailId" name="mailId"><br>

          <input type="submit" value="Submit">
        </form>
      </body>
    </html>
  `);
});

app.post('/', [
  body('name').notEmpty().withMessage('Name is required.'),
  body('regNo').notEmpty().withMessage('Reg. No. is required.'),
  body('rollNo').notEmpty().withMessage('Roll. No. is required.'),
  body('mobileNo').notEmpty().withMessage('Mobile No. is required.'),
  body('mobileNo').isLength({ min: 10, max: 10 }).withMessage('Mobile No. should be 10 digits.'),
  body('mailId').notEmpty().withMessage('Mail Id is required.'),
  body('mailId').isEmail().withMessage('Invalid Mail Id.'),
], (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.send(`
      <html>
        <body>
          <h2>Errors:</h2>
          <ul>
            ${errors.array().map(error => `<li>${error.msg}</li>`).join('')}
          </ul>
          <br>
          <a href="/">Go back to form</a>
        </body>
      </html>
    `);
  }

  // Save the validated data to database or perform any required action
  const { name, regNo, rollNo, mobileNo, mailId } = req.body;
  // ...

  res.send(`
    <html>
      <body>
        <h2>Successfully submitted:</h2>
        <ul>
          <li>Name: ${name}</li>
          <li>Reg. No.: ${regNo}</li>
          <li>Roll. No.: ${rollNo}</li>
          <li>Mobile No.: ${mobileNo}</li>
          <li>Mail Id: ${mailId}</li>
        </ul>
        <br>
        <a href="/">Go back to form</a>
      </body>
    </html>
  `);
});

app.listen(3090, () => {
  console.log('Server listening on port 3090...');
});



/*

In this code, we're creating an HTML form that accepts student information (name, reg no., roll no., mobile no., and mail id). Upon submission of the form, we're performing a series of validations using the body and validationResult functions provided by the express-validator module. We're checking


*/