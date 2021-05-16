import React from "react";
import SpaceVideo from './SpaceVideo.mp4'

const PortfolioVideo4=()=>{
    return(
        <div className="container-fluid">
           <div className="portfolio">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-11 col-sm-11 mt-2 order-sm-12">
                <div className="text-container">
                    <h4>SPACE MSS</h4>
                    <p>About:</p>
                    <p>The space mss page was created to present the space mss, which was created by merging two developers and a photographer. Space creates web applications from the design, creation of digital, representative materials to the final versions of websites.</p>
                    <p>The people are fictional, the pictures are illustrative, the project was created while learning ReactJS.</p>                    
                </div> 
                </div>               
                <div className="col-lg-5 offset-lg-1 col-md-11 col-sm-12 mt-2 order-sm-1">
                <div className="video-container-info">
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

export default PortfolioVideo4





