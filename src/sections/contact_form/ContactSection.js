import React from 'react';
import ContactFormular from './contactForm';
import contactImg from './contactImg2.png';
import './ContactSection-style.css'

const ContactSection =()=>{
    return (
        <div id='contact' className="container-fluid">
            <div className ="contactSection mt-2">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-sm-6 mt-auto ml-auto">
                        <div className="contact-form ">
                        <ContactFormular/>
                        </div>
                     </div>
                    <div className="col-lg-4 mt-5 offset-md-1 col-md-0 col-sm-0">   
                    <img className="contact-img mt-5 pt-5" src={contactImg} alt="contactImg"/>               
                    </div>
                    </div>  
                </div>
            </div>            
    )
}
export default ContactSection

