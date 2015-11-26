var React = require ('react');
var Github = require ('./Github');

var GitBox = React.createClass({
	getInitialState: function(){
		return {data: []};
	},

	loadGitData: function(){
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			success: function(data){
				this.setState({ data: data });
			}.bind(this), 
			error: function(err){
				console.log(err)
			}.bind(this)
		})
	},

	componentDidMount: function(){
		this.loadGitData();
	},

	render: function() {
		return (
			<div>
				<Github data={this.state.data}/>
			</div>
		);
	}
})

module.exports = GitBox;