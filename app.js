var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var wechat = require('wechat');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

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

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.use(express.query());
app.use('/wechat', wechat('mrnoodle').text(function (message, req, res, next) {
  // TODO
	reply("text");
}).image(function (message, req, res, next) {
  // TODO
	reply("image");
}).voice(function (message, req, res, next) {
  // TODO
	reply("voice");
}).video(function (message, req, res, next) {
  // TODO
	reply("video");
}).location(function (message, req, res, next) {
  // TODO
	reply("location");
}).link(function (message, req, res, next) {
  // TODO
	reply("link");
}).event(function (message, req, res, next) {
  // TODO
	reply("event");
}).middlewarify());

//var port = process.env.VCAP_APP_PORT || 80
app.listen(80);

module.exports = app;
