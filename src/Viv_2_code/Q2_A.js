/*
02 Create an express application for the following scenario

    a) Create a text file and add student information(Reg. No., Name, Grade) in the server system.

    b) Accept a file name from the input text field of a user web page and transfer the requested file using sendFile() function from the server as a response to the button click event from the user web page.
*/
//(A)
const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form method="POST" action="/">
      <label>Registration Number:</label>
      <input type="text" name="regNo" required>
      <br>
      <label>Name:</label>
      <input type="text" name="name" required>
      <br>
      <label>Grade:</label>
      <input type="text" name="grade" required>
      <br>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/', (req, res) => {
  const studentInfo = `${req.body.regNo}, ${req.body.name}, ${req.body.grade}\n`;
  fs.appendFile('students.txt', studentInfo, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send('An error occurred while saving the student information.');
    } else {
      console.log('Student information saved successfully.');
      res.send('Student information saved successfully.');
    }
  });
});

app.listen(3040, () => {
  console.log('Server started on port 3040.');
});

//new txt file is created automatically
