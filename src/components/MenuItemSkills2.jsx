import React from 'react';
import './Menu-itemSkills.style.css';

const MenuItemSkillsGraphic=({percentage})=>(
    <div className='skillsSection'>
       <div class="progress-bar"><span>{percentage}</span></div>
       </div>
    
);

export default MenuItemSkillsGraphic