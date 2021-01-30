import React from "react";
import './PortfolioVideo-style.css'
import SpaceVideo from '../SpaceVideo.mp4'

const PortfolioVideo=()=>{
    return(
        <div className="container-fluid">
           <div className="portfolio">
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-4 col-sm-10 mt-2 order-sm-12">
                <div className="text-container-space">
                    <h4>SPACE MSS</h4>
                    <p>About:</p>
                    <p>The space mss page was created to present the space mss, which was created by merging two developers and a photographer. Space creates web applications from the design, creation of digital, representative materials to the final versions of websites.
                        The people are fictional, the pictures are illustrative, the project was created while learning ReactJS.</p>                    
                </div>       
                </div>               
                <div className="col-lg-5 col-md-7 col-sm-8 mt-2 order-sm-1">
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





