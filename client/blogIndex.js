var React =require('react');
var ReactDOM = require('react-dom');
var BlogBox = require('./BlogBox');

ReactDOM.render(<BlogBox url="/api/blogs"/>, document.getElementById('BlogList'));
