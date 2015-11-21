var React = require('react');
var BlogComment = require('./BlogComment');

var BlogList = React.createClass({ 
    render: function() {
      var self = this;
      var blogData = this.props.data.map(function(blog){
      var bodySummary = blog.body.substr(0,100) + "....."
      var link = "/blog/564ba8b7ddbd210f2f728626"

      var comments = blog.comments.map(function(comment){
        return (<p className="comment-box">{comment.body}</p>)
      });
        return (
                <div className="col-md-3 box">
                  <a href={link}>
                  <img src={blog.img} className="img-thumbnail" alt=""/></a>
                  <div className="title">{blog.title}</div>
                  <div className="title">{blog}</div>
                  <div className="blog-body"><p>{bodySummary}</p></div>
                  <div className="blog-tags"><p>{blog.tags}</p></div>
                  <div className="blog-tags">{comments}</div>
                  <BlogComment blogId={blog._id} addCommentToList={self.props.gotNewCommentData}/>
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

module.exports = BlogList;