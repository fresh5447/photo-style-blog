var React = require('react');
var BlogComment = require('./BlogComment');
var md5 = require('MD5');
var GRAVATAR_URL = "http://gravatar.com/avatar";


var BlogList = React.createClass({ 
    render: function() {
      var self = this;
      var blogData = this.props.data.map(function(blog){
      var bodySummary = blog.body.substr(0,100) + "....."
      var link = "/blog/564ba8b7ddbd210f2f728626"
      var comments = blog.comments.map(function(comment){

        window.com = comment.body;
        window.user = comment.user;


        if(comment.user){
          var user = comment.user.local.username;
          var size = 36;
          var email = comment.user.local.email;
          var hash = md5(email);
          var gravUrl = GRAVATAR_URL + "/" + hash + "?s=" +size;
        } else {
          var user = "anonymous"
        }
        return (<p className="comment-box">
             "{comment.body}" <em><strong><img src={gravUrl}/>   {user}</strong></em>  </p>)
      }).reverse();
        return (
                <div className="col-md-4 box">
                  <a href={link}>
                  <img src={blog.img} className="img-thumbnail" alt=""/></a>
                  <div className="title">{blog.title}</div>
                  <div className="blog-body"><p>{bodySummary}</p></div>
                  <div className="blog-tags"><p>{blog.tags}</p></div>

                  <BlogComment blogId={blog._id} onPost={self.props.newData}/>
                  <div className="blog-tags">{comments}</div>

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