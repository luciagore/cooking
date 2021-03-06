var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongo = require('mongodb');

var monk = require('monk');
// var db = monk('localhost:27017/cookingDB');

var db = monk('localhost:27017/cookingDB', function(err, db){
  console.log('about to connect to DB');
  if (err){
    console.error('Db is not connected', err.message);
  }
});

var routes = require('./lib/routes/index');
var documents = require('./lib/routes/documents');

var app = express();

app.use(function(req, res, next){
  req.db = db;
  next();
});

app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'jade');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/documents', documents);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
  });
});

module.exports = app;
