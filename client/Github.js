var React = require('react');

var Github = React.createClass({
	render: function(){
		return(
          <div className="col-md-4">
            <div className="panel panel-default box">
              <h3 className="panel-header">Repo Name</h3>
              <div className="panel-body">
                 Payload
              </div>
              <div className="panel-footer">
                id
              </div>
            </div>
          </div>
		)
	}
});

module.exports = Github;