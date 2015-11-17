var mongoose = require('mongoose');
var blogSchema = new mongoose.Schema({
	title: String,
	body: String,
	author: String,
	img: String,
	tags: Array
});

mongoose.model('Blog', blogSchema);