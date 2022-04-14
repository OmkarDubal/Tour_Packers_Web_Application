import React, { Component } from 'react';
import g1 from './images/g1.jpg';
import g2 from './images/g2.jpg';
import g3 from './images/g3.jpg';
import g4 from './images/g4.jpg';
import g5 from './images/g5.jpg';
import g6 from './images/g6.jpg';
import g7 from './images/g7.jpg';
import g8 from './images/g8.jpg';
import g9 from './images/g9.jpg';





export default class Gallary extends Component {
    render() {
        return (
            <div>

                <div>
                
                <section class="gallery" id="gallery">

<h1 class="heading">
    <span>g</span>
    <span>a</span>
    <span>l</span>
    <span>l</span>
    <span>e</span>
    <span>r</span>
    <span>y</span>
</h1>

<div class="box-container">

    <div class="box">
        <img src={g1} alt=""/>
        <div class="content">
            <h3>amazing places</h3>
            
            <a href="#" class="btn">see more</a>
        </div>
    </div>
    <div class="box">
    <img src={g2} alt=""/>
        <div class="content">
            <h3>amazing places</h3>
            
            <a href="#" class="btn">see more</a>
        </div>
    </div>
    <div class="box">
    <img src={g3} alt=""/>
        <div class="content">
            <h3>amazing places</h3>
           
            <a href="#" class="btn">see more</a>
        </div>
    </div>
    <div class="box">
    <img src={g4} alt=""/>
        <div class="content">
            <h3>amazing places</h3>
            
            <a href="#" class="btn">see more</a>
        </div>
    </div>
    <div class="box">
    <img src={g5} alt=""/>
        <div class="content">
            <h3>amazing places</h3>
            
            <a href="#" class="btn">see more</a>
        </div>
    </div>
    <div class="box">
    <img src={g6} alt=""/>
        <div class="content">
            <h3>amazing places</h3>
            
            <a href="#" class="btn">see more</a>
        </div>
    </div>
    <div class="box">
    <img src={g7} alt=""/>
        <div class="content">
            <h3>amazing places</h3>
          
            <a href="#" class="btn">see more</a>
        </div>
    </div>
    <div class="box">
    <img src={g8} alt=""/>
        <div class="content">
            <h3>amazing places</h3>
            
            <a href="#" class="btn">see more</a>
        </div>
    </div>
    <div class="box">
    <img src={g9} alt=""/>
        <div class="content">
            <h3>amazing places</h3>
           
            <a href="#" class="btn">see more</a>
        </div>
    </div>

</div>

</section>
                </div>

              
               
                    
         </div>
            
        );
    }
}