var mongoose = require('mongoose');
var blogSchema = new mongoose.Schema({
	title: String,
	body: String,
	author: String,
	img: String,
	tags: Array,
	comments: [{ body: String, date: Date }],
	date: { type: Date, default: Date.now }
});

mongoose.model('Blog', blogSchema);