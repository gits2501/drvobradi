const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('./app_server/models/db')   // connects to mongodb on localhost

var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, './app_server/views'));// Sets res.render('index', {tittle:'My tittle'}) to look 'index'                                                // in 'views' folder
app.set('view engine', 'pug');                 // Sets res.render(..) to use jade as rendering engine 

app.use(logger('dev'));   // logs requests information to console 


app.use(express.static(path.join(__dirname, 'public'))); // maps root path '/' in req url to 'public' folder  

app.use(express.json());  // parses req body that is in JSON format and puts it in -> req.body (application/json)
app.use(express.urlencoded({ extended: false })); // parses req body that has application/x-www-form-urlencoded

app.use(cookieParser());  // parse any cookie header and puts it in req.cookies 


app.use('/', indexRouter);           // use router for root '/' path (any method)
app.use('/users', usersRouter);      // Use router for '/users' path (any method) 

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
