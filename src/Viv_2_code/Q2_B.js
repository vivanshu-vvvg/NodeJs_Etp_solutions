/*
02 Create an express application for the following scenario
b) Accept a file name from the input text field of a user web page and transfer the requested file using sendFile() function from the server as a response to the button click event from the user web page.

*/

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3006;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Download a file</h1>
        <form action="/download" method="POST">
          <label for="filename">Enter the filename:</label>
          <input type="text" name="filename" required>
          <br>
          <button type="submit">Download</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/download', (req, res) => {
  const { students} = req.body;
  const filepath = path.join(__dirname, filename);

  res.download(filepath, (err) => {
    if (err) {
      console.error(err);
      res.status(404).send('File not found');
    }
  });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));


/*
In this example, the HTML form is included in the res.send() method as a string with backticks. The body-parser middleware is not necessary since we're only parsing the filename from the request body. The path module is used to construct the file path using the current directory and the filename entered by the user.

The app.post('/download') route handles the file download by using the res.download() method, which automatically sets the necessary headers and streams the file to the client. If the file is not found, it sends a 404 error message.





*/