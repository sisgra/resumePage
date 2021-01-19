import React from "react";

import LandingVideo from '../LandingVideo.mp4'


const PortfolioVideo=()=>{
    return(
        <div className="video-space">
            <video className="video-fluid z-depth-1" autoplay loop controls muted>
                <source src={LandingVideo} type="video/mp4" />
            </video>
        </div>
    )
}

export default PortfolioVideo





