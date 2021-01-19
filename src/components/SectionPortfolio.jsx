import React from 'react';
import './SectionPortfolio-style.css';
import video from '../portfolio.mp4'

const SectionPortfolio=()=>{
    return(
        <div className="container-fluid">
           <div className="portfolio">
            <div className="row">
                <div className="col-sm">
                <div className="text-container">
                    <h2>Portfolio</h2>
                    <p>uno bumo tudo rumo huno uno bumo tudo rumo huno uno bumo tudo rumo huno uno bumo tudo rumo huno uno bumo tudo rumo huno uno bumo tudo rumo hunouno bumo tudo rumo hunouno bumo tudo rumo hunouno bumo tudo rumo hunouno bumo tudo rumo hunouno bumo tudo rumo hunouno bumo tudo rumo huno</p>
                    <p>uno bumo tudo rumo huno uno bumo tudo rumo huno uno bumo tudo rumo huno uno bumo tudo rumo huno uno bumo tudo rumo huno uno bumo tudo rumo hunouno bumo tudo rumo hunouno bumo tudo rumo hunouno bumo tudo rumo hunouno bumo tudo rumo hunouno bumo tudo rumo hunouno bumo tudo rumo huno</p>
                </div>
                </div>
                <div className="col-sm offset-1">
                <div className="video-container">
                    <video className="video-fluid z-depth-1" autoplay loop controls muted>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                </div>
            </div>
            </div> 
        </div>

    )
}

export default SectionPortfolio