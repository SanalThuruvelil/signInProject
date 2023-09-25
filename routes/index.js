var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index');

});
const credential = {
  username: "admin",
  password: "admin123"
}



// Login route
router.post('/', (req, res) => {
  var user = req.body.username;

  console.log(req.body);
  if (!req.body.username || !req.body.password) {
    res.end('Both Username and Password Needed')
  }
  else if (req.body.username == credential.username && req.body.password == credential.password) {
    req.session.loggedIn = true;
    req.session.user = credential.username;
    res.redirect('/home');

  } else {
    res.end('invalid username or password')
  }

});

router.get('/logOut', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});


module.exports = router;
