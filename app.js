const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const flash = require('express-flash');

const indexRouter = require('./routes/index');
const index_1 = require('./routes/index_1');
const index_2 = require('./routes/index_2');
const index_3 = require('./routes/index_3');
const index_4 = require('./routes/index_4');
const index_5 = require('./routes/index_5');
const index_6 = require('./routes/index_6');
const index_7 = require('./routes/index_7');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set("layout", "./layouts/base.ejs");
app.use(expressLayouts);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// set express-session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

// set express-flash middleware
app.use(flash());

app.use('/', indexRouter);
app.use('/index_1', index_1);
app.use('/index_2', index_2);
app.use('/index_3', index_3);
app.use('/index_4', index_4);
app.use('/index_5', index_5);
app.use('/index_6', index_6);
app.use('/index_7', index_7);
app.use('/usuarios', usersRouter);
app.use('/produtos', productsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
