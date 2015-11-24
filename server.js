var express = require('express');
var path = require('path');
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');
var db = require('./models/db');
var blogModel = require('./models/blog');
var blogRoutes = require('./routes/blog');
var commentModel = require('./models/comment')
var morgan = require('morgan');
var passport = require('passport');
var flash = require('connect-flash');
// var twitterRoutes = require('./routes/tweets');
var githubRoutes = require('./routes/github');

var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var app = express();

app.set('port', (process.env.PORT || 3000));


if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode');

  app.use('/static', express.static('static'));
} else {
  // When not in production, enable hot reloading

  var chokidar = require('chokidar');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.dev');
  var compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));

  // Do "hot-reloading" of express stuff on the server
  // Throw away cached modules and re-require next time
  // Ensure there's no important state in there!
  var watcher = chokidar.watch('./server');
  watcher.on('ready', function() {
    watcher.on('all', function() {
      console.log('Clearing /server/ module cache from server');
      Object.keys(require.cache).forEach(function(id) {
        if (/\/server\//.test(id)){ delete require.cache[id]; }
      });
    });
  });
}

app.use(express.static('public'));
app.set('view engine', 'ejs'); // set up ejs for templating

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms


// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.get('/flash', function(req, res){
  // Set a flash message by passing the key, followed by the value, to req.flash().
  req.flash('info', 'Flash is back!')
  req.flash('test', 'Flash is back!')
  res.redirect('/');
});

require('./config/passport')(passport);
// routes ======================================================================
require('./routes/user.js')(app, passport);

app.use('/api/blogs', blogRoutes);
app.use('/api/github', githubRoutes);
// app.use('/api/tweets', twitterRoutes);
// app.use('/api/github', githubRoutes);


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
