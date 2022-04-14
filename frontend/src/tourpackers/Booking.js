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

export default function Booking() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    //const[cust_id,setCust_id]=useState('')
    const[cust_id,setCust_id]=useState( JSON.parse(localStorage.getItem("loggedinuser")).cust_id)
    const[fname,setFname]=useState( JSON.parse(localStorage.getItem("loggedinuser")).fname)

    const[t_id,setT_id]=useState([])
    const[payment_status,setPayment_status]=useState('')
    const[booking_status,setBooking_status]=useState('')
    const[book_date,setBook_date]=useState('')
    const[booked_seats,setBooked_seats]=useState('')
    const[tid,setTid]=useState()   
    const[tour,setTour]=useState('')  
    useEffect(()=>{
      fetch("http://localhost:8080/t_all" ).
      then(resp=>resp.json()).
      then(data=> {
          console.log(data)
          setT_id(data)
      })
  }, [])
       
    
    
     const classes = useStyles();

     let navigate=useNavigate();

 {/*} const handleClick=(e)=>{
      alert("booking confirmed");
    e.preventDefault()
    const tours={cust_id,t_id,payment_status,booking_status,book_date,booked_seats}
    console.log(tours)
    fetch("http://localhost:8080/book",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(tours)

  }).then(()=>{
    console.log("New tour added");
        {/*} navigate("/registrationsuccess")
  })
}*/}

const handleClick=(ev)=>{
  ev.preventDefault();
   alert(tour[0]);
 // alert(state.date)
  //alert(state.selectedSlot)
  const req= {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body:  JSON.stringify(
          {
             cust_id: JSON.parse(localStorage.getItem("loggedinuser")),
             t_id:tour[0],
             payment_status:payment_status,
             booking_status:booking_status,
             book_date:book_date,
             booked_seats:booked_seats

          }
      )}
  fetch("http://localhost:8080/book", req)
  .then(resp=> resp.json()
  .then(data=>{
      console.log(data);
      if(data != null)
      {
        console.log("tour has been booked...")

        navigate("/bookingsuccess")
      }
  }))
}

const selectTour=(ev)=>
{
  const id=ev.target.value;
  console.log(t_id);
  let tour=t_id.filter(tour=>tour.t_id===parseInt(id));
         setTour(tour);
  console.log(tour);
}



  return (
       <div>
         <Logout/>
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"red"}}>Booking</h1>

    <form className={classes.root} noValidate autoComplete="off">

  <TextField id="outlined-basic" label="cust id" variant="outlined" fullWidth 
      value={cust_id}
      onChange={(e)=>setCust_id(e.target.value)}
      />
      <TextField id="outlined-basic" label="cust name" variant="outlined" fullWidth 
      value={fname}
      onChange={(e)=>setFname(e.target.value)}
  />

     <select  id="outlined-basic"  onChange={selectTour}>
                    {
                      t_id.map((v)=>{
                         return(
                               <option  value={v.t_id} >{v.t_name}</option>                               
                                                )
                                            })
                                        }
       </select>

      <TextField id="outlined-basic" label="payment status" variant="outlined" fullWidth 
      value={payment_status}
      onChange={(e)=>setPayment_status(e.target.value)}
      />
      
     
      <TextField id="outlined-basic" label="booking status" variant="outlined" fullWidth 
      value={booking_status}
      onChange={(e)=>setBooking_status(e.target.value)}
      />
     
      
      <TextField id="outlined-basic" label="book date" variant="outlined" fullWidth
      value={book_date}
      onChange={(e)=>setBook_date(e.target.value)}
      />
      
      <TextField id="outlined-basic" label="booked seats" variant="outlined" fullWidth 
      value={booked_seats}
      onChange={(e)=>setBooked_seats(e.target.value)}
      />
      
      
      <Button variant="contained" color="secondary" onClick={handleClick}>
  Book Now
</Button>
    </form>
   
    </Paper>
    

    



    </Container>

    </div>
  );
}