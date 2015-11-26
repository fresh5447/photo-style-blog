var React =require('react');
var ReactDOM = require('react-dom');
var BlogForm = require('./BlogForm');

ReactDOM.render(<BlogForm url="/api/blogs"/>, document.getElementById('BlogForm'));