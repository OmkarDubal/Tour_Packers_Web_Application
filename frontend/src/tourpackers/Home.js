import React, { Component } from 'react';
import pckg4 from './images/pckg4.jpg';
import vid1 from './images/vid1.mp4';
import vid2 from './images/vid2.mp4';
import vid3 from './images/vid3.mp4';
import vid4 from './images/vid4.mp4';
import vid5 from './images/vid5.mp4';





export default class Home extends Component {
    render() {
        return (
            <div>

                <div>
                
                </div>

                <section class="home" id="home">

                <div class="content">
                    <h3>adventure is worthwhile</h3>
                    <p>dicover new places with us, adventure awaits</p>
                    
                </div>

           {/*} <div class="controls">
                <span class="vid-btn active" data-src={vid1}></span>
                
                <span class="vid-btn" data-src={vid2}></span>
                <span class="vid-btn" data-src={vid3}></span>
                <span class="vid-btn" data-src={vid4}></span>
                <span class="vid-btn" data-src={vid5}></span>
        </div>*/}

            <div class="video-container">
                <video src={vid1} id="video-slider" loop autoplay muted></video>
            </div>

            </section>
               
                    
         </div>
            
        );
    }
}