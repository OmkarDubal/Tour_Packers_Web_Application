import React, { useEffect, useState } from 'react';
import {
    
    useNavigate
  } from "react-router-dom";

export default function Contact() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[number,setNumber]=useState('')
    const[subject,setSubject]=useState('')
    const[message,setMessage]=useState('')

    let navigate=useNavigate();

    const handleClick=(e)=>{
        alert("info is submitted");
      e.preventDefault()
      const contact={name,email,number,subject,message}
      console.log(contact)
      fetch("http://localhost:8080/contact",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(contact)
  
    }).then(()=>{
      console.log("New contact added");
      navigate("/")
    })
  }
    
        return (
            <div>
                
                 <section class="contact" id="contact">
                        
                        <h1 class="heading">
                            <span>c</span>
                            <span>o</span>
                            <span>n</span>
                            <span>t</span>
                            <span>a</span>
                            <span>c</span>
                            <span>t</span>
                        </h1>

                        <div class="row">

                            

                            <form>
                                <div class="inputBox">
                                    <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                                    <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                </div>
                                <div class="inputBox">
                                    <input type="number" placeholder="number" value={number}  onChange={(e)=>setNumber(e.target.value)}/>
                                    <input type="text" placeholder="subject" value={subject} onChange={(e)=>setSubject(e.target.value)}/>
                                </div>
                                <textarea placeholder="message" name="" id="" cols="30" rows="10" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                                <input type="submit" class="btn" value="send message" onClick={handleClick}/>
                            </form>

                        </div>
                        
                    </section>

            </div>
        );
    
}