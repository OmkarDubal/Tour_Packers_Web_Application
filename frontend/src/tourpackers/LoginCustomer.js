import React from "react";
//import styles from './register.css'
import  { useEffect, useState } from 'react';
import {
    
    Link,
    Navigate,
    useNavigate

   
} from "react-router-dom";
import { Container ,Paper,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
       
      },
    },
  }));
  export default function LoginCustomer(){
    
    
        let navigate=useNavigate();
        
        const [logindata,setLogindata]=useState({
              
            email:"",
            pwd:""
        });

        const handleChange=(ev)=>{
           setLogindata((logindata)=>({

              ...logindata,
              [ev.target.name]:ev.target.value
           }));

        }
        const submitData=(ev)=>{
           
            ev.preventDefault();
            console.log(logindata);
            const reqOptions={
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },

                body:JSON.stringify({
                   // email:"",
                    //pwd:""
                    ...logindata
                })
            }
        fetch("http://localhost:8080/checkLogin", reqOptions)
        .then(resp => resp.text())
        //.then(data=>this.setState({customer:data}))
        .then(data=>{
            if(data.length!==0)
            {
                const json = JSON.parse(data);
                this.setState({customer: json});

                localStorage.setItem("loggedinuser",JSON.stringify(...logindata));
            
                
                navigate("/customerhome")
            }
            else
            {
                this.setState({loginerror: "Wrong Email ID or Password"})
            }
        })
      }
   

    
        return (
            
            <div>
                 <Container>
                   <Paper elevation={3} >
            <h1 style={{color:"blue"}}>Login Customer</h1>
                
                <form>
                    Enter Email : <input type="text" name="email" onChange={this.handleChange}/><br/>
                    Enter Password : <input type="password" name="pwd" onChange={this.handleChange}/><br/>
                    <input type="submit" value="LOGIN" onClick={this.submitData}/>
                    
                    
                <div>
               <Button variant="contained" color=""> <Link  to="/register">New Customer Register Here...</Link></Button>
                </div>
                 </form>

                 </Paper>
    
                 </Container>
    
    


   

                
                                
        </div>


            
            
        );
    }
