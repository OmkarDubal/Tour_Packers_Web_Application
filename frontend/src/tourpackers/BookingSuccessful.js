import React, { Component } from 'react';
import {
    
    Link 
} from "react-router-dom";
import Logout from './Logout';


export default class BookingSuccessful extends Component {
    render() {
        return (
            <div>
                <Logout/>
                <h2>Booking Successful</h2>

                
                <div>
                <Link  to="/booking">continue exploring.....</Link>
                </div>
                
            
            </div>
        )
    }
}