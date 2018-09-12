import React, { Component } from 'react';
import '../css/authentication.css';
import axios from 'axios';

class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        } ;
    }

    changeName = (e) => {
        this.setState({username: e.target.value});
    }

    changePass = (e) => {
        this.setState({password: e.target.value});
    }

    login  = () => {
        axios.post("http://192.168.64.184:4444/login", {id: this.state.username, pw: this.state.password})
        .then((response) => {
            if(response.data.result === "success"){
                console.log("success" + response.data.data.name);
                this.props.history.push('/main');
                return;
            }else{
                console.log("Fail Check your id & pw")
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }
    render() {
        return (
            <div className="authentication">
                <div className="bg"></div>
                <div className="login">
                    <div className="container auth">
                    <div className="logo" to="/">DN LAB</div>
                    <div className="card">
                        <div className="header transparent center">
                            <div className="card-content">Login</div>
                        </div>
                        <div>
                            <div className="card-content">
                                <div className="row">
                                    <div className="input-field col s12 username">
                                        <label>Username</label>
                                        <input
                                        name="username"
                                        type="text"
                                        className="validate"
                                        value={this.state.username}
                                        onChange={this.changeName}/>
                                    </div>
                                    <div className="input-field col s12">
                                        <label>Password</label>
                                        <input
                                        name="password"
                                        type="password"
                                        className="validate"
                                        value={this.state.password}
                                        onChange={this.changePass}/>
                                    </div>
                                    <a className="waves-effect waves-light transparent black-text btn" onClick={this.login}>Login</a>
                                </div>
                            </div>
                            <div className="footer">
                                <div className="card-content">
                                    <div className="right" >
                                        New Here? <a to="/register">Create an account</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Authentication;

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { PropTypes } from 'react'

// class Authentication extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: "",
//             password: ""
//         }
//     }

//     handleChange = (e) => {
//         let nextState = {};
//         nextState[e.target.name] = e.target.value;
//         this.setState(nextState);
//     }
    
//     render() {

//         const inputBoxes = (
//             <div>
//                 <div className="input-field col s12 username">
//                     <label>Username</label>
//                     <input
//                     name="username"
//                     type="text"
//                     className="validate"
//                     onChange={this.handleChange}
//                     value={this.state.username}/>
//                 </div>
//                 <div className="input-field col s12">
//                     <label>Password</label>
//                     <input
//                     name="password"
//                     type="password"
//                     className="validate"
//                     onChange={this.handleChange}
//                     value={this.state.password}/>
//                 </div>
//             </div>
//         );
        
//         const loginView = (
//             <div>
//                 <div className="card-content">
//                     <div className="row">
//                         {inputBoxes}
//                         <a className="waves-effect waves-light btn">SUBMIT</a>
//                     </div>
//                 </div>


//                 <div className="footer">
//                     <div className="card-content">
//                         <div className="right" >
//                         New Here? <a to="/register">Create an account</a>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         );

//         const registerView = (
//             <div className="card-content">
//                 <div className="row">
//                     {inputBoxes}
//                     <a className="waves-effect waves-light btn">CREATE</a>
//                 </div>
//             </div>
//         );
//         return (
//             <div>



//                 <div className="login">
//                     <div className="container auth">
//                     <div className="logo" to="/">DN LAB</div>
//                     <div className="card">
//                         <div className="header transparent center">
//                             <div className="card-content">Login</div>
//                         </div>
//                         <div>
                            
//                         </div>
//                     </div>
//                     </div>
//                 </div>            
//             </div>
//         );
//     }
// }



// export default Authentication;