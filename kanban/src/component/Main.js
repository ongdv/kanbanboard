import React, { Component } from 'react';
import '../css/main.css';

class Main extends Component {
	constructor(props){
		super(props);
		this.state = {
			userid: "",
			username: "",
		}	
	}


    render() {
        return (
            <div className="main">
                <div className="side">
				
                </div>
                <div className="content">
                </div>
            </div>
        );
    }
}

export default Main;
