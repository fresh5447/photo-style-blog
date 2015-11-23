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

                if(this.props.onPost){
                  this.props.onPost()
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
              <button onClick={this.handleCommentSubmit} type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
          );
    }
});

module.exports = BlogComment;