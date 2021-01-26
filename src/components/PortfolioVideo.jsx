import React from "react";
import './PortfolioVideo-style.css'
import SpaceVideo from '../SpaceVideo.mp4'

const PortfolioVideo=()=>{
    return(
        <div className="container-fluid">
           <div className="portfolio">
            <div className="row">
                <div className="col-sm-3 order-sm-12 offset-1">
                <div className="text-container-space">
                    <h4>SPACE MSS</h4>
                    <p>About:</p>
                    <p>The space mss page is created to present the space mss, which was created by merging two developers and a photographer. Space creates web applications from the design, creation of digital, representative materials to the final versions of websites.
                        The people are fictional, the pictures are illustrative, the project was created while learning ReactJS.</p>                    
                </div>       
                </div>               
                <div className="col-sm-6 order-sm-1">
                <div className="video-container">
                    <video className="video-fluid z-depth-1" autoPlay loop controls muted>
                        <source src={SpaceVideo} type="video/mp4" />
                    </video>
                </div>
                </div>
            </div>
            </div> 
        </div>
                 
    )
}

export default PortfolioVideo





