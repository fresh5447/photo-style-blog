var React =require('react');
var BlogBox = require('./BlogBox');

React.render(<BlogBox url="/api/blogs"/>, document.getElementById('BlogList'));
