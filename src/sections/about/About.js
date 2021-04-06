import React from 'react';
import profile from './image4.JPG'
import './About-style.css'

const About =()=>{
    return (
        <div id='about' className="container-fluid">
            <div className ="AboutMe">
                <div className="row">
                    <div className="col-lg-3 offset-md-1 col-sm-1 col-xm-12">
                        <div className="photo-wrap ">
                            <img className="profile-img" src={profile} alt="author"/>
                        </div>
                     </div>
                    <div className=" col-lg-6 offset-md-1 col-md-12 col-sm-12 col-xm-12">   
                        <div className="about-text">          
                        <h2 className="about-heading">about me</h2>
                        <p>As a graduate of a technical university with a focus on informatization,
                         I have always been close to programming. But I've always wondered how
                         such a website or application can be created.
                         That's why I started educating myself in web development and 
                         how to create simple android applications.
                         </p>
                        <h2 className="about-heading">Contact Me</h2>
                        <p>E-mail: grachova.silvia@gmail.com</p>
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

