import React from "react";

import SpaceVideo from '../SpaceVideo.mp4'


const PortfolioVideo=()=>{
    return(
        <div className="video-space">
            <video className="video-fluid z-depth-1" autoplay loop controls muted>
                <source src={SpaceVideo} type="video/mp4" />
            </video>
        </div>
    )
}

export default PortfolioVideo





