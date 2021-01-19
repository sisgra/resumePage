import React,{useState} from 'react';
import Modal from 'react-modal';
import gallery1 from '../Image-Portfolio/gallery01.png';
import gallery2 from '../Image-Portfolio/gallery02.png';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleDown  } from '@fortawesome/free-solid-svg-icons'
import '../App.css'
import MenuItemPortfolio from './MenuItemPortfolio';
import DirectoryPortfolio from './DirectoryPortfolio';

Modal.setAppElement('#root')
function ModalSection (){
    const [modalIsOpen,setModalIsOpen]=useState (false)
    return(
        <div className="ModalWindow">
            <div class="row justify-content-md-center">
                <div className="col-lg-4 col-xm-12">
                    <div className="item-wrap " onClick={()=> setModalIsOpen(true)}>
                        <img className="profile-img" src={gallery1} alt="gallery"/>
                        <div className='link-icon'>
                            <FontAwesomeIcon icon={faArrowCircleDown}/>
                        </div>  
                    </div>
                </div>
                <div className="col-lg-4 col-xm-12">
                    <div className="item-wrap " onClick={()=> setModalIsOpen(true)}>
                        <img className="profile-img" src={gallery2} alt="gallery"/>
                        <div className='link-icon'>
                            <FontAwesomeIcon icon={faArrowCircleDown}/>
                        </div>  
                    </div>
                </div>
            </div>
            <Modal
             className="popupmodal"
             isOpen={modalIsOpen} 
             shouldCloseOnOverlayClick={false}
             onRequestClose={()=> setModalIsOpen(false)}
             >
             <MenuItemPortfolio/>
                <button className="btn-lg btn-block" onClick={()=> setModalIsOpen(false)}>Close</button>
             </Modal> 
        </div>
    )
}

export default ModalSection