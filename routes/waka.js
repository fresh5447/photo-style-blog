var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');

var url = 'https://wakatime.com/api/v1/users/current/stats/last_7_days?api_key=33cd747c-21f5-4c93-9dfe-d97247b73a59';

fetchWakas = function(req, res) {
	axios.get(url)
		.then(function(response) {
			res.json(response);
		})
		.catch(function(response) {
			console.log(response);
		});
}

module.exports = fetchWakas;