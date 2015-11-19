var React = require('react');

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
        this.refs.comment.getDOMNode().value = ''
        
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

module.exports = BlogComment;