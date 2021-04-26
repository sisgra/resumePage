import React from 'react';
import './Navbar-style.css';
import {Link} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons"

const navbar =()=>{
    return (
        <nav className="navbar fixed-top navbar-expand-md ">
          <div className="container">
          <button className="navbar-toggler" type="button" 
          data-toggle="collapse" data-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" aria-expanded="false" 
          aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
          </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                      <Link smooth={true} to='home'  className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>    
                  </li>
                  <li className="nav-item">
                    <Link smooth={true} to='about' className="nav-link" href="#">About</Link>
                  </li>
                  <li className="nav-item"> 
                    <Link smooth={true} to='portfolio' offset={-80} className="nav-link" href="#">Portfolio</Link>                                
                  </li>
                  <li className="nav-item"> 
                    <Link smooth={true} to='education' offset={-100} className="nav-link" href="#">Education</Link>                        
                  </li>
                  <li className="nav-item">
                    <Link smooth={true} to='skills'  className="nav-link" href="#">Skills</Link>  
                  </li>
                  <li className="nav-item">
                    <Link smooth={true} to='contact-formular'  className="nav-link" href="#">Contact</Link>  
                  </li>
                </ul>
            </div>
          </div>
        </nav>
      )
    }

export default navbar
