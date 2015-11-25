var React = require('react');
var GitBox = require('./GitData');
// var Twitter = require('./Twitter');
var WakaChart = require('./chart')

React.render(<GitBox url='/api/github'/>, document.getElementById("Github"));
// React.render(<Twitter/>, document.getElementById("Twitter"));
React.render(<WakaChart/>, document.getElementById("Chart"));
