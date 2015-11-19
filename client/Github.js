var React = require('react');

var Github = React.createClass({
	render: function(){
    var gitStuff = this.props.data.map(function (g){
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
        <div className="col-md-4">
          <div className="panel panel-default gitub-box">
            <h3 className="panel-header"><i className="fa fa-code-fork">
              </i> {g.name}</h3>
            <div className="panel-body">
               {commitInfo}
            </div>
            <div className="panel-footer">
            <p> {g.timeStamp}</p>
            </div>
          </div>
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