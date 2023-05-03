
/*
Q3 Create an express application with the following requirements

    a) Set and clear the cookies for a client using the cookie-parser module in the server application.

    b) Display the cookie information on the client web page with a click on the show button and clear the cookie information from the system with a click on the reset button on the user web page.
*/


const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3090;

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Cookie Example</h1>
        <form action="/" method="post">
          <label for="cookie-name">Cookie Name:</label>
          <input type="text" id="cookie-name" name="cookieName"><br><br>
          <label for="cookie-value">Cookie Value:</label>
          <input type="text" id="cookie-value" name="cookieValue"><br><br>
          <button type="submit">Set Cookie</button>
          <button type="button" onclick="showCookies()">Show Cookies</button>
          <button type="button" onclick="resetCookies()">Reset Cookies</button>
        </form>
        <p id="cookie-info"></p>
        <script>
          function showCookies() {
            const cookieInfo = document.getElementById('cookie-info');
            cookieInfo.innerHTML = "Cookies: " + document.cookie;
          }

          function resetCookies() {
            document.cookie = "cookieName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "cookieValue=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            const cookieInfo = document.getElementById('cookie-info');
            cookieInfo.innerHTML = "Cookies cleared!";
          }
        </script>
      </body>
    </html>
  `);
});

app.post('/', (req, res) => {
  const cookieName = req.body.cookieName;
  const cookieValue = req.body.cookieValue;
  res.cookie(cookieName, cookieValue);
  res.send('Cookie set!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


