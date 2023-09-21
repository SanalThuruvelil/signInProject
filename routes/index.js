var express = require('express');
const { log } = require('handlebars');
var router = express.Router();
const app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
// Sample hardcoded user credentials
const validUsername = 'user';
const validPassword = '1234';

// Login route
app.post('/', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    // If either the username or password is missing, respond with an error
    res.status(400).json({ message: 'Both username and password are required.' });
console.log('Both username and password are required.');
  } else if (username === validUsername && password === validPassword) {
    // If the credentials are valid, consider the user logged in
    res.json({ message: 'Login successful' });
    console.log('Login successful');
  } else {
    // If the credentials are incorrect, respond with an error
    res.status(401).json({ message: 'Invalid credentials' });
    console.log('Invalid credentials');
  }
});

module.exports = router;
