// Q5_B)Create a form having text boxes and a submit button. On the click of the submit button, the values entered in the form should be stored in an excel file. Use Express module for this task.

const express = require('express');
const ExcelJS = require('exceljs');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form method="post" action="/submit">
      <input type="text" name="firstName" placeholder="First Name" required>
      <input type="text" name="lastName" placeholder="Last Name" required>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/submit', (req, res) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Data');

  const { firstName, lastName } = req.body;
  worksheet.addRow([firstName, lastName]);

  workbook.xlsx.writeFile('Book1.xlsx')
    .then(() => {
      res.send('Data saved successfully');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error occurred while saving data');
    });
});

app.listen(3002, () => {
  console.log('Server listening on port 3000');
});



// first install all modules ------npm i express , npm install exceljs 
