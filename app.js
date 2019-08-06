require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Cors = require('cors');
const xssFilter = require('x-xss-protection');

var app = express();

var usersRouter = require('./src/routes/users');
var booksRouter = require('./src/routes/books');
var loanbooksRouter = require('./src/routes/loanbooks')
// const corsOptions = (req, callback) => {
//   if (whitelist.split(',').indexOf(req.header('Origin')) !== -1) {
//     console.log('Success')
//     return callback(null, {
//       origin: true
//     })
//   } else {
//     console.log('Failed')
//     return callback(null, {
//       origin: false
//     })
//   }
// }

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use('/upload', express.static('upload'));
app.use(Cors());
// app.options('*', Cors(corsOptions))
app.use(xssFilter());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/books', booksRouter);
app.use('/loanbooks', loanbooksRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
