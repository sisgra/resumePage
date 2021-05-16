import React from 'react';
import profile2 from './profile2.JPG'
import './About-style.css'

const AboutSecond =()=>{
    return (
        <div id='about' className="container-fluid">
            <div className ="AboutMe">
                <div className="row justify-content-center">
                    <div className="col-lg-3 offset-lg-1 col-md-0 col-sm-0 col-xs-0">
                        <div className="photo-wrap ">
                            <img className="profile-img2" src={profile2} alt="author"/>
                        </div>
                     </div>
                    <div className="col-lg-5 offset-lg-1 offset-md-0 col-md-9 col-sm-9 col-xs-3">   
                        <div className="about-text">          
                        <h2 className="about-heading">A FEW WORDS</h2>
                        <p>Building a new website is like setting the foundation for a house. 
                        With so many details to deal with, planning ahead and 
                        managing the ongoing tasks is essential.
                        When we are going to design a new website,
                        we always face a few questions. Do I have the necessary skills? 
                        Which technologies will I have to use and what am I going to need? 
                        Is my knowledge up to date? 
                        It sounds like a cliché, but constantly learning is one of the main objectivs.
                        Making next project better than the last one. 
                        Whatever I do, I realize every time how everything is linked together.
                        In order to be able to make the right decisions, it is crucial to know,
                        what the purpose of the website is/ will be. 
                        With this information the UI can be designed in the most appropriate way. 
                        Having the ability to design the website first and then start to write the code, 
                        makes a significant difference in the whole creation / workflow process.
                         </p>
                    </div>
                    </div>  
                </div>
            </div>            
        </div>
    )
}
export default AboutSecond

