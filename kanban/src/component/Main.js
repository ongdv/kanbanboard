import React, { Component } from 'react';
import Alert from './Alert';
import Side from './Side.js';
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
				<Side 
					userid={this.userid}
					username= {this.username}
				/>
                <div className="content">
                </div>
            </div>
        );
    }
}

export default Main;
