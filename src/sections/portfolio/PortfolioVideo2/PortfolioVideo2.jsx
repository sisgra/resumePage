import React from "react";
import './PortfolioVideo2-style.css'
import LandingVideo from './LandingVideo.mp4'


const PortfolioVideo2=()=>{
    return(
        <div className="container-fluid mt-5">
           <div className="portfolio">
            <div className="row justify-content-center">
                <div className=" col-lg-4 col-md-11 col-sm-11 mt-2 order-sm-12">
                <div className="text-container">               
                <h4>MOBILE APP LANDING PAGE</h4>
                <p>About:</p>
                <p>Landing page is a responsive page for the representation of the application,
                which shows the availability of cafes and offers the possibility to make online orders. 
                The page shows complete details about the app such as features, reviews and 
                possibilities how to download the app.  </p>
                <p>In this project the Bootstrap is used.</p>
            </div>
                </div>               
                <div className="col-lg-5 offset-lg-1 col-md-11 col-sm-12 mt-2 ">
                <div className="video-container-info">
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

export default PortfolioVideo2





