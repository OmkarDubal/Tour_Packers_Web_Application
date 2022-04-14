
import './App.css';




import 'bootstrap/dist/css/bootstrap.min.css';

import Register from './tourpackers/Register';
import Login from './tourpackers/Login';
import React, { Component,useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {
    BrowserRouter, Router,
    Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";

import Home from './tourpackers/Home';
import Contact from './tourpackers/Contact';
import About from './tourpackers/About';
import RegistraionSuccess from './tourpackers/RegistrationSuccess';
import Packages from './tourpackers/Packages';
import Booking from './tourpackers/Booking';
import Gallary from './tourpackers/Gallary';
import LoginCustomer from './tourpackers/LoginCustomer';
import CustomerHome from './tourpackers/CustomerHome';
import mystore from './tourpackers/store';
import Admin from './tourpackers/Admin';
import AddPackages from './tourpackers/AddPackages';
import GetPackages from './tourpackers/GetPackages';
import MainMenu from './tourpackers/MainMenu';


function App() {
  

    const[state,setState]=useState({

        flag:false
    });

    mystore.subscribe(()=>{setState({flag:mystore.getState().loggedin})})
  return (

    
    <div className="App">
   <MainMenu/>
    
  
      {/*} <BrowserRouter> 
            <div style={{display:state.flag?'none':'block'}}>
                <div>
                    <Navbar bg="dark" variant={"dark"} expand="lg" >
                        <Navbar.Brand href="#" style={{fontSize:"25px"}}><span style={{color:"orange",fontSize:"25px"}}>Tour</span> Packers</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            > 
                              
                                <Nav.Link as={Link} to="/"  style={{fontSize:"20px"}}>Home</Nav.Link>
                                <Nav.Link as={Link} to="/packages" style={{fontSize:"20px"}}>Packages</Nav.Link>
                                <Nav.Link as={Link} to="/gallary" style={{fontSize:"20px"}}>Gallary</Nav.Link>
                                <Nav.Link as={Link} to="/about" style={{fontSize:"20px"}}>About</Nav.Link>
                                <Nav.Link as={Link} to="/contact" style={{fontSize:"20px"}} >Contact</Nav.Link>
                                <Nav.Link as={Link} to="/login" style={{fontSize:"20px"}}>Login</Nav.Link>
    
                                
                
                            </Nav>
  
                        </Navbar.Collapse>
                    </Navbar>
                   </div> 
              </div>   

                  <div>
                    <Routes>
                        <Route path="/about" element={<About/>} />
                            
                        
                        <Route path="/contact" element={<Contact/>} />
                            
                        
                        <Route path="/" element={<Home/>} />
            
                        <Route path="/login" element={<Login/>} />

                       < Route path="/register" element={<Register/>} />
                       < Route path="/registrationsuccess" element={<RegistraionSuccess/>} />

                      {/*<Route path="/packages" element={<Packages/>} />

                        <Route path="/booking" element={<Booking/>} />

                       <Route path="/gallary" element={<Gallary/>} />
                       <Route path="/login1" element={<LoginCustomer/>} />
                       <Route path="/customerhome" element={<CustomerHome/>} />
                       <Route path="/adminhome" element={<Admin/>} />

                     {/*} <Route path="/addpackages" element={<AddPackages/>} />
                       <Route path="/gettours" element={<GetPackages/>} />

                     </Routes>
                     </div>  
          
            <Routes>
              <Route path="/packages" element={<Packages/>} />
              <Route path="/addpackages" element={<AddPackages/>} />
              <Route path="/gettours" element={<GetPackages/>} />
            </Routes>
          
  </BrowserRouter>*/}
                  
            
    

    


    <div class="footer">

            <h2 class="credit"> created by <span> Tour  </span>Packers | all rights reserved! </h2>

  </div>
  
  </div>
  );
}

export default App;
