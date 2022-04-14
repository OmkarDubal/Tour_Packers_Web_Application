import React, { useState } from 'react';

import { Container ,Paper,Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {
    
    Link,
    Navigate,
    useNavigate

   
} from "react-router-dom";
import mystore from './store';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
       
      },
    },
  }));
  
export default function Login()
{


    const[logindata,setLogindata]=useState({

        email:"",
        pwd:"",
        customer:{},
        loginerror:""
    });

      const [role,setRole]=useState("");

      let navigate=useNavigate();


   const handleInput = (ev) =>{
         
        setLogindata((logindata)=>({
           ...logindata,
           [ev.target.name]:ev.target.value


        }));


    }
      

  const  submitData = (ev) =>{
        ev.preventDefault();

         const reqOptions={
              method:'POST',
              headers:{
                  'Content-Type':'application/json'
              },

              body: JSON.stringify({
                email: logindata.email,
                pwd: logindata.pwd
              })
         }
         fetch("http://localhost:8080/checkLogin",reqOptions)
        .then(res=>res.text())
        .then(data=>{
            console.log(data);

            if(data.length !=0)
            {
                console.log(data);
                const json=JSON.parse(data);
                 if(json.email=="tourpackers@gmail.com")
                 {
                  setLogindata({customer:json});
                
                  localStorage.setItem("loggedinuser",JSON.stringify(json));
                   mystore.dispatch({type:'LOGGEDIN'})
                  navigate("/adminhome")
                 }
                else {
                setLogindata({customer:json});
                
                localStorage.setItem("loggedinuser",JSON.stringify(json));
                 mystore.dispatch({type:'LOGGEDIN'})
                navigate("/customerhome")
                }
            }
            else{
               setLogindata({loginerror:"wrong id/pwd"});
            }
    
            //console.log(response.json());
        });
       
    }

    return(
        
        <div>
                <Container>
                   <Paper elevation={3} >
            <h1 style={{color:"blue"}}>Login </h1>
                

                  

                   {/*} <form>
                         
                         Email :<input type="text" name="email" onChange={handleInput}/> <br/>
                         Password :<input type="password" name="pwd" onChange={handleInput}/> <br/>

                         <input type="submit"  value="Login"  onClick={submitData}/>

                         <div>
               <Button variant="contained" color=""> <Link  to="/register">New Customer Register Here...</Link></Button>
                </div>
                    
                          <p>{logindata.loginerror}</p>

                  </form>*/}

<form  noValidate autoComplete="off">
  
       <TextField id="outlined-basic" label="Customer email" variant="outlined" fullWidth 
      name="email"
      onChange={handleInput}
      />
      
      <TextField id="outlined-basic" label="Customer pwd" variant="outlined" fullWidth 
      name="pwd" type={"password"}
      onChange={handleInput}
      />
     
          <Button variant="contained" color="secondary" onClick={submitData}>
             Login
           </Button>


           
           <div>
               <Button variant="contained" color=""> <Link  to="/register">New Customer Register Here...</Link></Button>
                </div>
                    
                          <p>{logindata.loginerror}</p>
    </form>


                   
              
                    </Paper>
    
             </Container>


               


        </div>



    );
 }


  
