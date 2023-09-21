const express = require('express');
const router = express.Router();
const path = require('path');
const exphbs = require('express-handlebars');



var indexRouter = require('./routes/index');
var homeRouter = require('./routes/home');

const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/home', homeRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;




app.listen(3000,()=>console.log("server started"));