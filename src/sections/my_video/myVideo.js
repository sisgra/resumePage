import React from "react";
import myVideo from './My Video1.mp4';

const MyVideo=()=>{
    return (
        <div className="video">
                    <video className="video-fluid z-depth-1" autoPlay loop controls muted>
                        <source src={myVideo} type="video/mp4" />
                    </video>
        </div>
    )
}

export default MyVideo