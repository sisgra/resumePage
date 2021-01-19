import React,{useState} from 'react';
import Modal from 'react-modal';
import ImageButton from '../image8.JPG'
import LandingPage1 from '../LandingPage/Screenshot5.png';
import LandingPage2 from '../LandingPage/Screenshot5.png';
import LandingPage3 from '../LandingPage/Screenshot5.png';
import LandingPage4 from '../LandingPage/Screenshot5.png';
import LandingPage5 from '../LandingPage/Screenshot5.png';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleDown  } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

Modal.setAppElement('#root')
function ModalSection (){
    const [modalIsOpen,setModalIsOpen]=useState (false)
    return(
        <div className="ModalWindow">
            <div class="row">
            <div className="col-lg-2 col-xm-12">
            <div className="photo-wrap mb-5" onClick={()=> setModalIsOpen(true)}>
                    <img className="profile-img" src={ImageButton} alt="author"/>
                </div>
                </div>
                <div className="col-lg-2 offset-md-2 col-xm-12">
                <div className="photo-wrap mb-5" onClick={()=> setModalIsOpen(true)}>
                    <img className="profile-img" src={ImageButton} alt="author"/>
                </div>
                </div>
                </div>

                <div class="row">
            <div className="col-lg-2 offset-md-2 col-xm-12">
            <div className="item-wrap mb-5" onClick={()=> setModalIsOpen(true)}>
                    <img className="profile-img" src={ImageButton} alt="author"/>
                    <div className='link-icon'>
                    <FontAwesomeIcon icon={faArrowCircleDown}/>
                    </div>
                    
                </div>
                </div>
                <div className="col-lg-2 offset-md-2 col-xm-12">
                <div className="photo-wrap mb-5" onClick={()=> setModalIsOpen(true)}>
                    <img className="profile-img" src={ImageButton} alt="author"/>
                </div>
                </div>
                </div>  
            
            <Modal
             className="popupmodal"
             isOpen={modalIsOpen} 
             shouldCloseOnOverlayClick={false}
             onRequestClose={()=> setModalIsOpen(false)}
             >
             <div className="row">
               <div className="col-2 mr-4 ml-2" >
                <img src={LandingPage1} height="180px" alt="obrazok"/>
                </div> 
                <div className="col-2 mr-4" >
                <img src={LandingPage2} height="180px" alt="obrazok"/>
                </div> 
                <div className="col-2 mr-4" >
                <img src={LandingPage3} height="180px" alt="obrazok"/>
                </div> 
                <div className="col-2" >
                <img src={LandingPage4} height="180px" alt="obrazok"/>
                </div> 
                </div>
                 <h2>Landing page</h2>
                 <p className="modal-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                 sed do eiusmod tempor incididunt ut labore et dolore 
                 magna aliqua. Ut enim ad minim veniam, 
                 quis nostrud exercitation ullamco laboris 
                 nisi ut aliquip ex ea commodo consequat.  </p>
            <div>
            <div className='link-box'>
                    <a
                        href="wwww.google.sk"
                        target='_blank'
                        rel='noopener noreferrer'>
                        GitHub
                    </a>
            </div>
                <button className="btn-lg btn-block" onClick={()=> setModalIsOpen(false)}>Close</button>
            </div>
             </Modal> 
        </div>
    )
}

export default ModalSection