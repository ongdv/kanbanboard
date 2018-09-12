import React, { Component } from 'react';
import { Authentication } from '../component';
import { connect } from 'react-redux';
import { loginRequest} from '../actions/authentication';
import { browserHistory } from 'react-router';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    handleLogin = (id, pw) => {
        return this.props.loginRequest(id, pw).then(
            () => {
                if(this.props.status === "SUCCESS"){
                    let loginData = {
                        isLoggedIn: true,
                        username: id
                    };
                    document.cookie = 'key=' + btoa(JSON.stringify(loginData));
                    browserHistory.push('/');
                    return true;
                }
            }
        )
    }
    
    render() {
        return (
            <div>
                <Authentication mode={true}/>             
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.authentication.login.status
    };

}
const mapDispatchtoProps = (dispatch) => {
    return {
        loginRequest: (id, pw) => {
            return dispatch(loginRequest(id, pw));
        }
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Login);