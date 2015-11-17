var React = require('react');

var BlogForm = React.createClass({

    getInitialState: function(){
        return {tags: []};
    },

    getTags: function(e){
        e.preventDefault()
        var tag = React.findDOMNode(this.refs.tag).value.trim();
        this.state.tags.push(tag);
        alert(this.state.tags);
    },

    handleSubmit: function(e){
        e.preventDefault();
        var title = React.findDOMNode(this.refs.title).value.trim();
        var author = React.findDOMNode(this.refs.author).value.trim();
        var body = React.findDOMNode(this.refs.body).value.trim();
        var img = React.findDOMNode(this.refs.img).value.trim();
        var tags = this.state.tags; 
        if(!title){
            return;
        }
        var data = ({title: title, author: author, body: body, img: img, tags: tags});
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            data: data,
            type:'POST',
                success: function(response){
                console.log("posting data!",data, response)
                document.location='/blog'
                }.bind(this),
                error: function(xhr, status, err){
                    console.log("not posting data!")
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
        })
        React.findDOMNode(this.refs.title);
  },
    render: function() {
        return (
				<div>
                <form>
                    <div className="form-group">
                        <label >Title</label>
                        <input type="text" className="form-control" ref="title" placeholder="title"/>
                    </div>
                    <div className="form-group">
                        <label >Author </label>
                        <input type="text" className="form-control" ref="author" placeholder="author"/>
                    </div>
                    <div className="form-group">
                        <label >Image </label>
                        <input type="text" className="form-control" ref="img" placeholder="image"/>
                    </div>
                    <div className="form-group">
                        <label >Tags </label>
                        <input type="text" className="form-control" ref="tag" placeholder="image"/>
                        <span onClick={this.getTags} className="btn btn-default">Add</span>
                    </div>
                    <div className="form-group">
                        <label>Post</label>
                        <textarea  rows="15" className="form-control" ref="body" placeholder="body"></textarea>
                    </div>
                    <button onClick={this.handleSubmit} type="submit" className="btn btn-default">Submit</button>
                </form>
				</div>
        	);
    }
});

module.exports = BlogForm;