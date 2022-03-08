'use strict';
// express モジュールのインスタンス作成
const express = require('express');
const app = express();

const basicAuth = require('basic-auth-connect')

/*
app.use(basicAuth(function(user,pass){
  users: { 'admin': 'admin' ,'guest1' :'0123' , 'guest2' : '4567'}
}))
*/

//テンプレートエンジンpugの読み込み
app.set('view engine', 'pug');

const postsHandler = require('./lib/posts-handler');
const util = require('./lib/handler-util');
var errorhandler = require('errorhandler');


//静的ファイルの設定
app.use(express.static('public'));
app.use('/posts',basicAuth('admin','admin'))

//トップページルーティング
app.get('/', function(req, res)  {
  res.sendFile(__dirname + '/views/index.html');
});

//ランキングページルーティング
app.get('/ranking', function(req, res) {
  res.sendFile(__dirname + '/views/ranking.html');
});

/*
app.all('/posts', basicAuth(function(user, password) {
  //res.render('posts')
  return user === "admin" && password === 'admin';
}));
*/


//投稿ページルーティング
app.all('/posts', function(req, res) {
  //res.render('posts')
  postsHandler.handle(req, res);
  
});

/*
//投稿ページ削除
app.delete(`/posts?delete=1`, function(req, res) {
  postsHandler.handleDelete(req, res);
});
*/


/*
//投稿ページpostルーティング
app.post('/posts',function(req, res) {
  postsHandler.handle(req, res);
});
*/

//問い合わせページルーティング
app.get('/contact', function(req, res) {
  res.sendFile(__dirname + '/views/contact.html');
});
//テストルーティング
app.get('/test', function(req, res) {
  res.sendFile(__dirname + '/views/test.html');
});

//ログアウト
app.all('/logout', function(req, res) {
  //res.render('posts')
  util.handleLogout(req, res);
});

//404 page not faound
app.use(function(req, res, next) {
  var error = new Error('Cannot ' + req.method + ' ' + req.path);
  error.status = 404;
  next(error);
});
app.use(errorhandler());


//ポートの指定
const port = 8080;

//サーバ立ち上げ
app.listen(port, () => {
    console.info('Listening on ' + port);
});
