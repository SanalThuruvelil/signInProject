const express = require('express');
const router = express.Router();
const path = require('path');
const exphbs = require('express-handlebars');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')
const bodyParser = require('body-parser');



var indexRouter = require('./routes/index');
var homeRouter = require('./routes/home');
const { error } = require('console');

const app = express();

const sessionMiddleware = session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
});

app.use(sessionMiddleware);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());  
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/home', homeRouter);



app.listen(3000,()=>console.log("server started"));

module.exports = app;