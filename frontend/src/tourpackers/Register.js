import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  Navigate,
  useNavigate
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function Register() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    //const[cust_id,setCust_id]=useState('')
    const[pwd,setPwd]=useState('')
    const[fname,setFname]=useState('')
    const[lname,setLname]=useState('')
    const[email,setEmail]=useState('')
    const[address,setAddress]=useState('')
    const[city,setCity]=useState('')
    const[state,setState]=useState('')
    const[zip,setZip]=useState('')
    const[mobile,setMobile]=useState('')
    
     const classes = useStyles();

     let navigate=useNavigate();

  const handleClick=(e)=>{
    e.preventDefault()
    const customer={pwd,fname,lname,email,address,city,state,zip,mobile}
    console.log(customer)
    fetch("http://localhost:8080/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(customer)

  }).then(()=>{
    console.log("New customer added");
    navigate("/registrationsuccess")
  })
}


  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"red"}}>Register Customer</h1>

    <form className={classes.root} noValidate autoComplete="off">

<TextField id="outlined-basic" label="Customer email" variant="outlined" fullWidth 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <TextField id="outlined-basic" label="Customer pwd" variant="outlined" fullWidth 
      value={pwd}
      onChange={(e)=>setPwd(e.target.value)}
      />
      <TextField id="outlined-basic" label="Customer fname" variant="outlined" fullWidth 
      value={fname}
      onChange={(e)=>setFname(e.target.value)}
      />
      <TextField id="outlined-basic" label="Customer lname" variant="outlined" fullWidth 
      value={lname}
      onChange={(e)=>setLname(e.target.value)}
      />
     
      
      <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      />
      <TextField id="outlined-basic" label="Customer city" variant="outlined" fullWidth 
      value={city}
      onChange={(e)=>setCity(e.target.value)}
      />
      <TextField id="outlined-basic" label="Customer state" variant="outlined" fullWidth 
      value={state}
      onChange={(e)=>setState(e.target.value)}
      />
      <TextField id="outlined-basic" label="Customer zip" variant="outlined" fullWidth 
      value={zip}
      onChange={(e)=>setZip(e.target.value)}
      />
      <TextField id="outlined-basic" label="Customer mobile" variant="outlined" fullWidth 
      value={mobile}
      onChange={(e)=>setMobile(e.target.value)}
      />
      <Button variant="contained" color="secondary" onClick={handleClick}>
  Submit
</Button>
    </form>
   
    </Paper>
    

    



    </Container>
  );
}