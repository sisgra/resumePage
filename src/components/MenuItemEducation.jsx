import React from 'react';
import './Menu-itemEducation.style.css';

const MenuItemEducation=({program,institution,faculty,descriptionEducation,startDate,endDate})=>(
    <div className='content'>
        <h4 className ='Institution'>{institution}<span> &bull; </span>{faculty}</h4>
        <h3 className='Program'>{program}</h3>
        <p>{startDate}<span> &bull; </span>{endDate} </p>
        <p>{descriptionEducation}</p>
        <hr></hr>       
    </div>
);

export default MenuItemEducation