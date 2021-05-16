import React from 'react';
import profile from './profile.jpg'
import './About-style.css'

const About =()=>{
    return (
        <div id='about' className="container-fluid">
            <div className ="AboutMe">
                <div className="row justify-content-center">
                    <div className="col-lg-3 offset-lg-1 col-md-3 col-sm-0 col-xs-0">
                       <img className="profile-img " src={profile} alt="author"/>
                    </div>
                    <div className=" col-lg-5 offset-lg-1 offset-md-2 col-md-4 col-sm-9 col-xs-3">   
                        <div className="about-text">          
                        <h2 className="about-heading">about me</h2>
                        <p>As a graduate of a technical university with a focus on informatization,
                         I have always been close to programming. But I've always wondered how
                         such a website or application can be created.
                         That's why I started educating myself in web development and 
                         how to create simple android applications.
                         </p>
                         <br></br>
                         <br></br>
                        <h2 className="about-heading">GIT HUB</h2>
                        <p>explore my code on GitHub.</p>
                        <a href="https://github.com/sisgra" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">GitHub</a>
                    </div>
                    </div>  
                </div>
            </div>            
        </div>
    )
}
export default About

