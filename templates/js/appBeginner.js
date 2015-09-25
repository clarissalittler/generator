var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

// view engine setup
// this sets up both the directory where Express looks for the templates
// and what style of templates to use
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '{views}');

app.use(logger('dev'));
// https://github.com/expressjs/morgan#dev
// this .use statement sets up the logger to
// print out all of the requests being made to the console

app.use(bodyParser.json());
// https://github.com/expressjs/body-parser#bodyparserjsonoptions
app.use(bodyParser.urlencoded({ extended: false }));
// https://github.com/expressjs/body-parser#bodyparserurlencodedoptions
// the above two commands set up the body parser middleware
// which gives convenient access to data sent in requests such as POST and PUT

app.use('/', routes);
// this installs the routes defined in routes/index.js into being a part of the application
// with the base route of "/"
// you can install other route handlers by including different files
// and possibly setting them to different base routes such as '/users' or '/posts'

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// the application is exported for use in the file www 
module.exports = app;
