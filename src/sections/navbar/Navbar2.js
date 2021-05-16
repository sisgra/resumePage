import React from 'react';
import './Navbar-style.css';
import {Link} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons"

const Navbar2 =()=>{
    return (
        /*for responsive collapsing expand-md*/
        <nav className="navbar fixed-top navbar-expand-md ">
          <div className="container">
          <button className="navbar-toggler" type="button" 
          data-toggle="collapse" data-target="#navbarTogglerDemo01" 
          aria-controls="navbarTogglerDemo01" aria-expanded="false" 
          aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
          </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav ml-auto mr-auto">
                  <li className="nav-item active">
                      <Link smooth={true} to='home'  className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>    
                  </li>
                  <li className="nav-item">
                    <Link smooth={true} to='about' className="nav-link" href="#">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link smooth={true} to='skills' offset={-50}  className="nav-link" href="#">Skills</Link>  
                  </li>
                  <li className="nav-item"> 
                    <Link smooth={true} to='portfolio' offset={-80} className="nav-link" href="#">Portfolio</Link>                                
                  </li>
                  <li className="nav-item">
                    <Link smooth={true} to='work' offset={-80}  className="nav-link" href="#">Work</Link>  
                  </li>

                  <li className="nav-item"> 
                    <Link smooth={true} to='education' offset={-100} className="nav-link" href="#">Education</Link>                        
                  </li>
                  
                  <li className="nav-item">
                    <Link smooth={true} to='contact'  className="nav-link" href="#">Contact</Link>  
                  </li>
                </ul>
            </div>
          </div>
        </nav>
      )
    }

export default Navbar2
