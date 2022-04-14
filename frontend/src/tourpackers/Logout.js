import React, { Component,useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
    Navigate,
    useNavigate
} from "react-router-dom";
import mystore from "./store";

export default function Logout()
{
    const[state,setState]=useState({

        flag:false
    });

    mystore.subscribe(()=>{setState({flag:mystore.getState().loggedin})})

    let navigate=useNavigate();

     const logout=()=>{

        mystore.dispatch({type:'LOGGEDOUT'});
        localStorage.removeItem("loggedinuser");
         navigate("/");


     }

    return(

       <div>
               <div style={{display:state.flag?'none':'block'}}>

               <Navbar bg="dark" variant={"dark"} expand="lg" >
                        <Navbar.Brand href="#" style={{fontSize:"25px"}}><span style={{color:"orange",fontSize:"25px"}}>Tour</span> Packers</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/" style={{fontSize:"20px"}} onClick={logout}>Logout</Nav.Link>


                
                            </Nav>
  
                        </Navbar.Collapse>
                    </Navbar>

               </div>

                    
             
               


       </div>

    );
}