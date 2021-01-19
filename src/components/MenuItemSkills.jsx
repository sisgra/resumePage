import React from 'react';
import {withRouter} from 'react-router-dom';


import './Menu-itemSkills.style.css';

const MenuItemSkills=({percentage})=>(
    <div className='skillsSection'>
       <div class="progress-bar"><span>{percentage}</span></div>
       </div>
    
);

export default(MenuItemSkills)