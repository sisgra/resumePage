import React from 'react';
import './SectionPortfolio-style.css';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import video from './portfolio.mp4'

const SectionPortfolio=()=>{
    return(
        <div className="container-fluid ">
           <div className="portfolio">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-10 col-sm-10 mt-2">
                        <div className="text-container">
                            <h2>Portfolio</h2>
                            <p>Here you can find examples of projects I have been working on.
                            The first project could be used to present the work of a small company,
                            display a list of projects, 
                            the activities of the company, the founders, and others.
                            The JavaScript library ReactJS  was used to create the user interface.
                            The second project was created as part of the UX design course, which was developed on the figma platform.
                            The last project is a responsive page for the representation of the application,
                            which shows the availability of cafes and the ability to make orders online, in this project Bootstrap is used.</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-8 col-sm-8 mt-2">
                        <div className="video-container-info">
                            <video className="video-fluid z-depth-1" autoPlay loop controls muted>
                                <source src={video} type="video/mp4" />
                            </video>
                        </div>
                        <div className="project-example">    
                            <h4>project example</h4>
                            <FontAwesomeIcon icon={faArrowCircleDown} size="lg"></FontAwesomeIcon>
                        </div>  
                    </div>
                </div>  
            </div> 
            <hr></hr>  
        </div>
    )
}
export default SectionPortfolio