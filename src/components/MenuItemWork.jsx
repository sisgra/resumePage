import React from 'react';

const MenuItemWork=({position,employment,descriptionWork,startDate,endDate})=>(
    <div className='content'>
        <h4 className ='Institution'>{position}</h4>
        <h3 className='Program'>{employment}</h3>
        <p>{startDate}<span> &bull; </span>{endDate}</p>
        <p>{descriptionWork}</p>
        <hr></hr>
    </div>
);

export default (MenuItemWork)