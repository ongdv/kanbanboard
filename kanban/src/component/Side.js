import React, { Component } from 'react';

class Side extends Component{
	constructor(props) {
		super(props);
		if(this.props.userid === undefined){
			alert('Please Login');
			this.props.history.push('/')	
		}
		console.log(this.props.userid);
		console.log(this.props.username);
	}
	render() {
		return (
			<div className="side">
						
			</div>
		)
	}
}

export default Side;
