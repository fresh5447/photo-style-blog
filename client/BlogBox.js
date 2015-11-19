var React = require('react');

var BlogList = React.createClass({ 
    render: function() {
      var self = this;
      var blogData = this.props.data.map(function(blog){
        return (
                <div className="col-md-4">
                  <a href="" data-lightbox="gallery" data-title="Picture 4"><img src={blog.img} className="img-thumbnail" alt=""/></a>
                  <div className="title">{blog.title}</div>
                  <div className="blog-body"><p>{blog.body}</p></div>
                  <div className="blog-tags"><p>{blog.tags}</p></div>
                </div>
        	)
      });

        return (
        <div>
            <ul>
              {blogData}
            </ul>
        </div>
          );
    }
});

var BlogBox = React.createClass({

  getInitialState: function(){
    return {data: []};
  },

  loadBlogsFromServer: function(search) {
    var url = this.props.url;
    if(search){
      url = url + '/search/' + search
    }
    $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log("inside success")
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log("broken url is " + this.props.url)
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  searchBlogs: function(){
    var text = this.refs.search.getDOMNode().value;
    this.loadBlogsFromServer(text)
  },

  componentDidMount: function(){
    this.loadBlogsFromServer();
  },


  render: function() {
        return (
        <div>
        <input type="text" placeholder="search blogs" ref="search" />
        <button onClick={this.searchBlogs.bind(this)}>Search</button>
            <BlogList data={this.state.data}/>
        </div>
          );
    }
});

module.exports = BlogBox;