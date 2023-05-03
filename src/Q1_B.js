//Q1_B}Insert two text boxes - First name and Last name. Insert three buttons and name them as set cookie", "get cookie" and "delete cookie". When the user inputs the values in the two given text boxes, with the click on "set cookie" button, the user should be able to set the cookie. With the click of "get cookie" button, the user should be able to fetch the cookie which has been set. With the click of "delete cookie" button, the user must be able to delete the cookie.


// Import required modules
const express = require('express');
const cookieParser = require('cookie-parser');

// Create an instance of express
const app = express();

// Use cookie-parser middleware
app.use(cookieParser());

// Define a route for the HTML form
app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <form>
          <label for="fname">First name:</label>
          <input type="text" id="fname" name="fname"><br><br>
          <label for="lname">Last name:</label>
          <input type="text" id="lname" name="lname"><br><br>
          <button type="button" onclick="setCookie()">Set Cookie</button>
          <button type="button" onclick="getCookie()">Get Cookie</button>
          <button type="button" onclick="deleteCookie()">Delete Cookie</button>
        </form>
      </body>
      <script>
        function setCookie() {
          const fname = document.getElementById("fname").value;
          const lname = document.getElementById("lname").value;
          document.cookie = "fname=" + fname + ";lname=" + lname;
        }
        function getCookie() {
          const cookies = document.cookie.split(';').map(c => c.trim());
          const fname = cookies.find(c => c.startsWith('fname=')).split('=')[1];
          const lname = cookies.find(c => c.startsWith('lname=')).split('=')[1];
          alert("First name: " + fname + ", Last name: " + lname);
        }
        function deleteCookie() {
          document.cookie = "fname=;lname=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
        }
      </script>
    </html>
  `);
});

// Start the server
app.listen(3030, () => console.log('Server started on port 3030'));