var React = require('react');
var GitBox = require('./GitData');
var ReactDOM = require('react-dom');
var WakaChart = require('./chart');

ReactDOM.render(<GitBox url='/api/github'/>, document.getElementById("Github"));
// React.render(<Twitter/>, document.getElementById("Twitter"));
ReactDOM.render(<WakaChart/>, document.getElementById("Chart"));
