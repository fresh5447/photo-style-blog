var React = require('react');

var Twitter = React.createClass({
  getInitialState: function(){
    return {tweets: []}
  },

  loadTweets: function(){
    $.ajax({
      url: 'api/tweets',
      dataType: 'JSON',
      success: function(data){
        this.setState({tweets: data})
      }.bind(this),
      error: function(err){
        console.log(err)
      }.bind(this)   
      })
    },

  componentDidMount: function(){
    this.loadTweets();
  },

  render: function(){
    var tweet = this.state.tweets.map(function(t){
      var sName = t.user.screen_name;
      var tBody = t.text;
      var uImg = t.user.profile_image_url;
      var created = t.created_at;
      console.log(t.created_at);
      return (
        <div class="panel panel-default box col-md-3">
          <h3> {sName} </h3>
          <div class="panel-body">
            <div class="pull-left">
              <img src={uImg} className="small-img thumbnail" alt=""/>
            </div>
            <div class="pull-right">

              <p>{tBody} </p>
  
            </div>
          </div>
        </div>
      )
    });

    return ( 
      <div>
        {tweet}
      </div>
      )

  }
});

module.exports = Twitter;