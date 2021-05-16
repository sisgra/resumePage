import React from 'react';
import Figma from './Figma.mp4';

const PortfolioVideo3=()=>{
    return(
        <div className="container-fluid">
           <div className="portfolio">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-11 col-sm-11 mt-2">
                <div className="text-container">
                    <h2>UX design/ TechLab project</h2>
                    <p>Team project was developed in the figma design platform, created during the UX design course on the TechLab platform.</p>
                    <p> Topic: How can we support people work remote? ( e.g. non digital natives)</p>
                    <p> About: There are many online courses that allow people to improve in various fields. It also gives them the opportunity to work from home or to find a job where they can work from home. 
                        However, not everybody grew up in such digital world as it is now and we would like to help these people to find all the possibilities they have.</p>
                        <br></br>
                        <a href="https://www.figma.com/file/GPzE149OmDQ7Fbtf4z3IAF/Digital-Native-Assessment-Test?node-id=100%3A122" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Figma</a> 
                                
                </div>
                </div>
                <div className=" col-lg-5 offset-lg-1 col-md-11 col-sm-12 mt-5">
                <div className="video-container-info">
                    <video className="video-fluid z-depth-1" autoPlay loop controls muted>
                        <source src={Figma} type="video/mp4" />
                    </video>
                </div>
                </div>
            </div>            
            </div>
        </div>

    )
}

export default PortfolioVideo3