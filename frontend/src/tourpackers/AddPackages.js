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
import Logout from './Logout';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function AddPackages() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    //const[cust_id,setCust_id]=useState('')
    const[t_id,setT_id]=useState('')
    const[t_name,setT_name]=useState('')
    const[description,setDescription]=useState('')
    const[distance,setDistance]=useState('')
    const[days,setDays]=useState('')
    const[total_seats,setTotal_seats]=useState('')
    const[price,setPrice]=useState('')
    const[t_date,setT_date]=useState('')
    
    
     const classes = useStyles();

     let navigate=useNavigate();

  const handleClick=(e)=>{
    e.preventDefault()
    const tours={t_id,t_name,description,distance,days,total_seats,price,t_date}
    console.log(tours)
    fetch("http://localhost:8080/t_add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(tours)

  }).then(()=>{
    console.log("New tour added");
        {/*} navigate("/registrationsuccess")*/}
  })
}


  return (
     <div>
          <Logout/>
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"red"}}>Add Tour</h1>

    <form className={classes.root} noValidate autoComplete="off">

     {/*<TextField id="outlined-basic" label="tour id" variant="outlined" fullWidth 
      value={t_id}
      onChange={(e)=>setT_id(e.target.value)}
  />*/}
      <TextField id="outlined-basic" label="tour name" variant="outlined" fullWidth 
      value={t_name}
      onChange={(e)=>setT_name(e.target.value)}
      />
      <TextField id="outlined-basic" label="description" variant="outlined" fullWidth 
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
      />
      <TextField id="outlined-basic" label="distance" variant="outlined" fullWidth 
      value={distance}
      onChange={(e)=>setDistance(e.target.value)}
      />
     
      
      <TextField id="outlined-basic" label="Days" variant="outlined" fullWidth
      value={days}
      onChange={(e)=>setDays(e.target.value)}
      />
      <TextField id="outlined-basic" label="Total Seats" variant="outlined" fullWidth 
      value={total_seats}
      onChange={(e)=>setTotal_seats(e.target.value)}
      />
      <TextField id="outlined-basic" label="price" variant="outlined" fullWidth 
      value={price}
      onChange={(e)=>setPrice(e.target.value)}
      />
      <TextField id="outlined-basic" label="tour date" variant="outlined" fullWidth 
      value={t_date}
      onChange={(e)=>setT_date(e.target.value)}
      />
      
      <Button variant="contained" color="secondary" onClick={handleClick}>
  Submit
</Button>
    </form>
   
    </Paper>
    

    



    </Container>

    </div>
  );
}