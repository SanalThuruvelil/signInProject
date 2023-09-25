const express = require('express');
const router = express.Router();
const path = require('path');
const exphbs = require('express-handlebars');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')
const app = express();
const { error } = require('console');

//route setup
var indexRouter = require('./routes/index');
var homeRouter = require('./routes/home');


const sessionMiddleware = session({
  secret: 'Key',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 600000 }
});

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(sessionMiddleware);

app.use('/', indexRouter);
app.use('/home', homeRouter);

app.use(function (req, res, next) {
  next(createError(404));
});






app.listen(3000, () => console.log("server started"));

module.exports = app;