var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var axios = require('axios');
var Twit = require('twit');

var T = new Twit({
	consumer_key: process.env.CONSUMER_KEY,
	consumer_secret: process.env.CONSUMER_SECRET,
	access_token: process.env.ACCESS_TOKEN,
	access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

fetchTweets = function(req, res) {
  var twitterHandle = "just_be_dougin";

  T.get('statuses/user_timeline', { screen_name: twitterHandle, count: 6 }, function(err, data, response) {

    res.send(data);

  });
}

module.exports = fetchTweets;