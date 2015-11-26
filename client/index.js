var React = require('react');
var ReactDOM = require('react-dom');
var GitBox = require('./GitData');
var WakaChart = require('./chart');
var Twitter = require('./Twitter');



ReactDOM.render(<GitBox url='/api/github'/>, document.getElementById("Github"));
ReactDOM.render(<WakaChart/>, document.getElementById("Chart"));
ReactDOM.render(<Twitter/>, document.getElementById("Twitter"));
