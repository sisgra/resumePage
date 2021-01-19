import React from 'react';
import {withRouter} from 'react-router-dom';

import './Menu-itemWork.style.css';

const MenuItemWork=({position,employment,descriptionWork,startDate,endDate})=>(
    <div className='content'>
        <h3 className ='Institution'>{position}</h3>
        <h2 className='Program'>{employment}</h2>
        <p>{startDate}<span>&bull; </span>{endDate}</p>
        <p>{descriptionWork}</p>
        <hr></hr>
    </div>
);

export default (MenuItemWork)