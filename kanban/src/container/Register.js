import React, { Component } from 'react';
import { Authentication } from '../component';

class Register extends Component {
    render() {
        return (
            <div>
                <Authentication mode="false"/>                
            </div>
        );
    }
}

export default Register;