import 'bootstrap/dist/css/bootstrap.min.css';


import Login from './Login';
import React, { Component,useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {
    BrowserRouter ,
    Router,
    Switch,
    Route,
    Link,
    Routes,
    
} from "react-router-dom";

import Home from './Home';
import Contact from './Contact';
import About from './About';

import Packages from './Packages';

import Gallary from './Gallary';
import Booking from './Booking';

import mystore from './store';
import CustomerHome from './CustomerHome';

import RegistraionSuccess from './RegistrationSuccess';
import Register from './Register';
import Admin from './Admin';
import AddPackages from './AddPackages';
import GetPackages from './GetPackages';
import Package1 from './Package1';
import GetBooking from './GetBooking';
import BookingSuccessful from './BookingSuccessful';




export default class MainMenu extends React.Component
{

    constructor(props){
          super(props)
          this.state={flag:false}

    }
    render(){
    
        mystore.subscribe(()=>{this.setState({flag:mystore.getState().loggedin})})
        return(


            
          <BrowserRouter> 
          <div style={{display:this.state.flag?'none':'block'}}>
              <div>
                  <Navbar bg="dark" variant={"dark"} expand="lg" >
                      <Navbar.Brand href="#" style={{fontSize:"25px"}}><span style={{color:"orange",fontSize:"25px"}}>Tour</span> Packers</Navbar.Brand>
                      <Navbar.Toggle aria-controls="navbarScroll" />
                      <Navbar.Collapse id="navbarScroll">
                         <div>
                          <Nav
                              className="mr-auto my-2 my-lg-0"
                              style={{ maxHeight: '100px' }}
                              navbarScroll> 
                          
                            
                              <Nav.Link as={Link} to="/"  style={{fontSize:"20px"}}>Home</Nav.Link>
                              <Nav.Link as={Link} to="/packages" style={{fontSize:"20px"}}>Packages</Nav.Link>
                              <Nav.Link as={Link} to="/gallary" style={{fontSize:"20px"}}>Gallary</Nav.Link>
                              <Nav.Link as={Link} to="/about" style={{fontSize:"20px"}}>About</Nav.Link>
                              <Nav.Link as={Link} to="/contact" style={{fontSize:"20px"}} >Contact</Nav.Link>
                              <Nav.Link as={Link} to="/login" style={{fontSize:"20px"}}>Login</Nav.Link>
  
                              
              
                          </Nav>
                          </div>
                      

                      </Navbar.Collapse>
                  </Navbar>
                 </div> 

                <div>
                  <Routes>
                      <Route path="/about" element={<About/>} />
                          
                      
                      <Route path="/contact" element={<Contact/>} />
                          
                      
                      <Route path="/" element={<Home/>} />
          
                      <Route path="/login" element={<Login/>} />

                     < Route path="/register" element={<Register/>} />
                     < Route path="/registrationsuccess" element={<RegistraionSuccess/>} />

                    {/*<Route path="/packages" element={<Packages/>} />*/}

                      <Route path="/booking" element={<Booking/>} />

                     <Route path="/gallary" element={<Gallary/>} />
                     
                    {/*} <Route path="/customerhome" element={<CustomerHome/>} />
                     <Route path="/adminhome" element={<Admin/>} />

                   {/*} <Route path="/addpackages" element={<AddPackages/>} />
                     <Route path="/gettours" element={<GetPackages/>} />*/}

                    

                   </Routes>
                   </div>  
            </div>   

        
          <Routes>
          <Route path="/booking" element={<Booking/>} />
            <Route path="/packages" element={<Packages/>} />
            <Route path="/packages1" element={<Package1/>} />
            <Route path="/addpackages" element={<AddPackages/>} />
            <Route path="/gettours" element={<GetPackages/>} />
            <Route path="/customerhome" element={<CustomerHome/>} />
            <Route path="/adminhome" element={<Admin/>} />
            <Route path="/getbooking" element={<GetBooking/>} />
           <Route path="/bookingsuccess" element={<BookingSuccessful/>} />

          </Routes>
        
</BrowserRouter>
                
            
        )


        }
    
}