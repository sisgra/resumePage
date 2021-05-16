import React from 'react';
import './Menu-itemEducation.style.css';

const MenuItemEducation=({program,institution,faculty,descriptionEducation,startDate,endDate})=>(
    <div className='content'>
        <h4 className ='Institution'>{institution}</h4>
        <br></br>
        <h5>{faculty}</h5>
        <h5 className='Program'>{program}</h5>
        <p>{startDate}<span> &bull; </span>{endDate} </p>
        <p>{descriptionEducation}</p>
        <hr></hr>       
    </div>
);

export default MenuItemEducation