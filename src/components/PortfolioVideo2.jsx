import React from "react";
import './PortfolioVideo-style.css'
import LandingVideo from '../LandingVideo.mp4'


const PortfolioVideo=()=>{
    return(
        <div className="container-fluid">
           <div className="portfolio">
            <div className="row">
                <div className=" col-sm-3 order-sm-12 offset-1">
                <div className="text-container-landing">
                
                <h4>MOBILE APP LANDING PAGE</h4>
                <p>About:</p>
                <p>Landing page is a responsive page for the representation of the application,
                which shows the availability of cafes and the ability to make orders online provides, shows 
                complete details about the app such as features,reviews, 
                possibilities to download.  </p>
                <p>In this project is- using Bootstrap</p>
            </div>
                </div>
                
                <div className="col-sm-6 order-sm-1">
                <div className="video-container">
                    <video className="video-fluid z-depth-1" autoPlay loop controls muted>
                        <source src={LandingVideo} type="video/mp4" />
                    </video>
                </div>




                
                </div>
                
            </div>
            </div> 
        </div>
        
    )
}

export default PortfolioVideo





