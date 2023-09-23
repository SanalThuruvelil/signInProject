var express = require('express');
const alert = require('alert')
var router = express.Router();
const app = express();


router.get('/', function(req, res, next) {
    res.render('index');
    
  });
  const credential = {
    username : "admin",
    password : "admin123"
  }
 
 

// Login route
router.post('/', (req, res) => {
    console.log("post message received");
    console.log(req.body);
    if (!req.body.username || !req.body.password){
        res.end('Both Username and Password Needed')
    }
    else if (req.body.username == credential.username && req.body.password == credential.password){
        res.redirect('/home');
    }else{
        res.end('invalid username or password')
    }
  
});
app.use(function(req, res, next) {
    next(createError(404));
  });


module.exports = router;
