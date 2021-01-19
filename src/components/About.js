import React from 'react';
import profile from '../image4.JPG'
import './About-style.css'

const About =()=>{
    return (
        <div id='about' className="container-fluid">
            <div className ="AboutMe">
            <div className="row">
                <div className="col-lg-2 offset-md-2  col-xm-12">
                <div className="photo-wrap ">
                    <img className="profile-img" src={profile} alt="author"/>
                </div>
                </div>
                <div className=" col-lg-6 col-md-4  col-xm-12">
                
                <h2 className="about-heading">about me</h2>
                    <p>Process Establishment and Management - Experienced in establishing hiring, onboarding, appraisal, retention and succession planning processes; dealing with a rapidly changing business landscape as the company multiplies in engineering capacity in months.
                Skilled in developing, in coordination with Product teams, an overall strategy for the technology department, setting up phases of delegation in order to support growth.
                Implemented several performance improvement plans in coordination with engineers to raise performance in technical delivery, attention to detail and communication.  </p>
                </div>
                <div className="col-lg-6 offset-md-4 col-xm-12">
                <h2 className="about-heading">Contact Me</h2>
                    <p>
                    Coaching and Mentorship - Implemented several performance improvement plans in coordination with engineers to raise performance in technical delivery, attention to detail and communication.  </p>
                </div>
            </div>
            </div>
        </div>
    )
}
export default About

