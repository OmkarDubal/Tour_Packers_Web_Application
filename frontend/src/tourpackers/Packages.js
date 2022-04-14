import React, { Component } from 'react';
import kashmir from './images/kashmir.jpg';
import Andaman from './images/Andaman.jpg';
import ladakh from './images/ladakh.jpg';
import Kerala from './images/Kerala.jpg';
import goa from './images/goa.jpg';
import pckg6 from './images/pckg6.jpg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
    Navigate,
    useNavigate
} from "react-router-dom";
import { Button } from 'react-bootstrap';
import Logout from './Logout';

export default class Packages extends Component {

   

  
    render() {
        
        return (
            <div >
                
                 <section class="packages" id="packages" >

                    <h1 class="heading">
                        <span>p</span>
                        <span>a</span>
                        <span>c</span>
                        <span>k</span>
                        <span>a</span>
                        <span>g</span>
                        <span>e</span>
                        <span>s</span>
                    </h1>

                <div class="box-container">

                        <div class="box">
                        <img src={kashmir} alt="" />
                            <div class="content">
                                <h3> <i class="fas fa-map-marker-alt"></i> Kashmir Houseboat Packages </h3>
                                <p>Visit the most exotic states in India to truly experience a paradise on earth. Every city of Kashmir will overwhelm you with its many vistas!</p>
                            
                                <div class="price"> Rs 5000.00 <span>Rs 8000.00</span> </div>
                              <Link to="/login" class="btn">Book now</Link>
                             
                            </div>
                        </div>

                        <div class="box">
                        <img src={Andaman} alt="" />
                            <div class="content">
                                <h3> <i class="fas fa-map-marker-alt"></i> Andaman </h3>
                                <p>Island where Fun meets Adventures ! Andaman Island has a mystic & exclusive quality attached to it. Azure waters and pristine beaches make Andaman an ideal destination for fun-loving families and couples who seek to escape their mundane life</p>
                            
                                <div class="price"> RS 25390.00 <span>RS 30120.00</span> </div>
                                
                                <Link  to="/login" class="btn">Book now</Link>
                            </div>
                        </div>

                        <div class="box">
                        <img src={ladakh} alt="" />
                            <div class="content">
                                <h3> <i class="fas fa-map-marker-alt"></i> Ladakh </h3>
                                <p>Ladakh Tour is a panaromic delight because of its alluring landscape, cerulean lakes, cobalt skies, hospitable culture and roughly set monasteries.</p>
                            
                                
                                <div class="price"> Rs 20000.00 <span>Rs 25000.00</span> </div>
                                <Link  to="/login" class="btn">Book now</Link>
                            </div>
                        </div>

                        <div class="box">
                        <img src={Kerala} alt="" />
                            <div class="content">
                                <h3> <i class="fas fa-map-marker-alt"></i> Kerala </h3>
                                <p>Kerala has always been an enticing place for both Indian and global travellers. With a coastal strip of 600 km, golden sandy beaches, towering mountains, lush greenery, plenty of elephants, tiger reserves, shimmering lakes, gushing rivers and more.</p>
                            
                                <div class="price"> Rs 30000.00 <span>Rs 40000.00</span> </div>
                                <Link  to="/login" class="btn">Book now</Link>
                            </div>
                        </div>

                    <div class="box">
                            <img src={goa} alt="" />
                            <div class="content">
                                <h3> <i class="fas fa-map-marker-alt"></i> Goa </h3>
                                <p>Goa Tour Packages allow you to explore the Calangute Beach, a beach in Goa popular among both local and global tourists. Here, you can enjoy water sports activities of your own choice.</p>
                                
                                    
                                
                                <div class="price"> Rs 25000.00 <span>Rs 32120.00</span> </div>
                                <Link  to="/login" class="btn">Book now</Link>
                            </div>
                        </div>

                       {/*} <div class="box">
                               <img src={pckg6} alt="" />
                            <div class="content">
                                <h3> <i class="fas fa-map-marker-alt"></i> egypt </h3>
                                <p>Egyptian museum</p>
                                
                                <div class="price"> Rs 45000.00 <span>Rs 56120.00</span> </div>
                                <Link  to="/booking" class="btn">Book now</Link>
                            </div>
                      </div>*/}

                </div>

                    </section>
            </div>
        )
    }
}