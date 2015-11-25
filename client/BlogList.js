var React = require('react');
var BlogComment = require('./BlogComment');
var md5 = require('MD5');
var GRAVATAR_URL = "http://gravatar.com/avatar";

var BlogList = React.createClass({
    getInitialState: function(){
      return ({
        viewComments: false,
        user: []
      })
    },

    loadUser: function() {
    $.ajax({
      url: '/api/blogs/user',
      dataType: 'json',
      cache: false,
      success: function(user) {
        console.log("USER IN AJAX", user)
        this.setState({user: user});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount: function(){
    this.loadUser();
  },

    toggleComments: function(){
        this.setState({viewComments: !this.state.viewComments})
    },

    render: function() {
      if(this.state.user.local){

        var user = this.state.user.local.username
      } else {
        var user = "NO USER SIGNED IN"
      }
      var self = this;
      var blogData = this.props.data.map(function(blog){
        if(blog.tags.length > 0){
          
          var tags = blog.tags.map(function(t){
          return (
            <li> {t} </li>
            )
        });
        } else {
          var tags = <li> "no tags" </li>
        }

      var bodySummary = blog.body.substr(0,100) + "....."
      var link = "blog/" + blog._id;
      
      var comments = blog.comments.map(function(comment){


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
             "{comment.body}" <em><strong><img src={gravUrl}/></strong></em>  </p>)
      }).reverse();
      var numOfComments = comments.length;
      var comShow = (
        <div>
          {comments}
          <BlogComment blogId={blog._id} onPost={self.props.newData}/>
        </div>
        );
      var comHide = (
        <div>
         <p> Show Comments </p>
        </div>
        );
      var commentStuff = self.state.viewComments ? comShow : comHide;
        return (
                <div className="col-md-4 box">
                  <a href={link}>
                  <img src={blog.img} className="img-thumbnail" alt=""/></a>
                  <div className="title">{blog.title}</div>
                  <div className="blog-body"><p>{bodySummary}</p></div>
                  <div className="blog-tags"><p>{blog.tags}</p></div>
                  <div> <p> USER: {user} </p> </div>
                  <ul> {tags} </ul>
                  <div><a className="pull-left">Comments <span className="badge pull-left" onClick={self.toggleComments}>{numOfComments}</span></a></div>
                  {commentStuff}
                </div>
        	)
      });

        return (
        <div>
            <ul>
            <h1> Hello User: {user} </h1>
              {blogData}

            </ul>
        </div>
          );
    }
});

module.exports = BlogList;