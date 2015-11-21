var React = require('react');
var BlogList = require('./BlogList');


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
            <BlogList data={this.state.data} gotNewCommentData={doRefresh}/>
        </div>
          );
    }
});

module.exports = BlogBox;