var React = require('react');
var prettydate = require("pretty-date");

var Github = React.createClass({
	render: function(){

    var gitStuff = this.props.data.map(function (g){
      if(g.type === "PushEvent"){
        var whatHappened = 
          <p><i className="fa fa-code-fork">commit</i></p>
          
      } else if (g.type === "CreateEvent"){
        var whatHappened = 
          <p><i className="fa fa-plus">repo created</i></p>
          
      } else {
        var whatHappened = 
          <p><i className="fa fa-heart">repo saved</i></p>
          
      }

      var id = g.info;
      if (g.coms) {
        var commitInfo = g.coms.map(function (c){
          return(
            <div>
              <p>{c.message}</p>
              <p>{c.url}</p>
            </div>
          )
        });
      };
      
      return(

          <div className="col-md-3 git-box">
              {whatHappened}
              <h3>{g.repo}</h3>              
              <p> {g.timeStamp.substr(0,10)} </p>
          </div>
      )
    });

    return(
      <div>
        {gitStuff}
      </div>
      );
	
	}
})

module.exports = Github;