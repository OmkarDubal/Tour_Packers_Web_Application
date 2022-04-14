import React, { Component } from 'react';
import {
    
    Link 
} from "react-router-dom";


export default class RegistraionSuccess extends Component {
    render() {
        return (
            <div>
                <h2>Registraion Successful</h2>

                
                <div>
                <Link  to="/login">Login to continue.....</Link>
                </div>
                
            
            </div>
        )
    }
}