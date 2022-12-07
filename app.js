//モジュールの読みこみ
//httpエラーの対処を行うたものもの。
var createError = require('http-errors');
//expressそのもの
var express = require('express');
//ファイルパスを扱うためのもの
var path = require('path');
//クッキーのパースに関するもの
var cookieParser = require('cookie-parser');
//httpリクエストのログ出力にかんするもの。
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//ejsをテンプレートエンジンに指定
app.set('view engine', 'ejs');

//モジュールの組み込み
//Body-Parserを基にExpressに組み込まれた機能。クライアントから送信されたデータを、req.body経由で会得、操作できる。
//リクエストオブジェクトを JSONオブジェクト として認識する。
app.use(logger('dev'));
app.use(express.json());
//Body-Parserを基にExpressに組み込まれた機能。クライアントから送信されたデータを、req.body経由で会得、操作できる。
//リクエストオブジェクトを 配列、文字列 として認識する。
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//イメージ、CSS ファイル、JavaScript ファイルなどの静的ファイルを提供する.
app.use(express.static(path.join(__dirname, 'public')));

//ルーティング
app.use('/', indexRouter);
app.use('/users', usersRouter);

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

//モジュールエクスポート
module.exports = app;
