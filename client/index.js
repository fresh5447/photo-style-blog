var React = require('react');
var GitBox = require('./GitData'); 
// var Twitter = require('./Twitter');

React.render(<GitBox url='/api/github'/>, document.getElementById("Github"));
// React.render(<Twitter/>, document.getElementById("Twitter"));
