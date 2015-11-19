var React = require('react');

var BlogList = React.createClass({ 
    render: function() {
      var self = this;
      var blogData = this.props.data.map(function(blog){
      var link = "/blog/564ba8b7ddbd210f2f728626"

      var comments = blog.comments.map(function(comment){
        return (<p>{comment.body}</p>)
      })
        return (
                <div className="col-md-4">
                  <a href={link}>
                  <img src={blog.img} className="img-thumbnail" alt=""/></a>
                  <div className="title">{blog.title}</div>
                  <div className="blog-body"><p>{blog.body}</p></div>
                  <div className="blog-tags"><p>{blog.tags}</p></div>
                  <div className="blog-tags">{comments}</div>
                  <BlogComment blogId={blog._id} onPost={self.props.newData}/>
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

var BlogComment = React.createClass({
    handleCommentSubmit: function(e){
        e.preventDefault();
        var body = this.refs.comment.getDOMNode().value;
        if(!body){
            return;
        }
        var data = ({ body: body });
        var blogId = this.props.blogId;
        var self = this;
        $.ajax({
            url: '/api/blogs/'+blogId+'/comment',
            dataType: 'json',
            data: data,
            type:'POST',
                success: function(response){
                console.log("posting data!",data, response)
                //document.location='/blog'
                if(self.props.onPost){
                  self.props.onPost()
                }
                }.bind(this),
                error: function(xhr, status, err){
                    console.log("not posting data!")
                    console.error( status, err.toString());
                }.bind(this)
        })
        
  },
  render: function() {
      return (
        <div>
          <form>
              <div className="form-group">
                  <label>new comment</label>
                  <input type="text" className="form-control" ref="comment" placeholder="comment"/>
              </div>
              <button onClick={this.handleCommentSubmit.bind(this)} type="submit" className="btn btn-default">Submit</button>
          </form>
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
    var self = this;
    var doRefresh = function(){
      self.loadBlogsFromServer()
    }
        return (
        <div>
        <input type="text" placeholder="search blogs" ref="search" />
        <button onClick={this.searchBlogs.bind(this)}>Search</button>
            <BlogList data={this.state.data} newData={doRefresh}/>
        </div>
          );
    }
});

module.exports = BlogBox;