require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
// const multer = require('multer')
const layouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
//require routes
const index = require('./routes/index');
const auth = require('./routes/auth');
const marketplace = require('./routes/marketplace');
const vinyl = require('./routes/vinyl');
const user = require('./routes/user');


const app = express();

const dbURL = process.env.DBURL;
mongoose.connect(dbURL).then(() => {
  debug(`Connected to DB: ${dbURL}`);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main-layout');
app.use(layouts);

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

//app.js
app.use(session({
  secret: "our-passport-local-strategy-app",
  resave: true,
  saveUninitialized: true
}));
app.use(flash());
require('./passport')(app);

app.use((req,res,next) => {
  res.locals.title = "Vinylovers: Your Album marketplace ";
  res.locals.user = req.user;
  next();
});

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// Use routes
app.use('/', index);
app.use ('/auth', auth);
app.use ('/marketplace', marketplace);
app.use('/vinyl', vinyl);
app.use('/user',user);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
