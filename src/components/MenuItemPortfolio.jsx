import React from 'react';
import {withRouter} from 'react-router-dom';



const MenuItemPortfolio=({title,text})=>(
    <div className='content'>
        <h3 className ='Institution'>{title}</h3>     
        <p>{text}</p>

        <div className='link-box'>
        <a target="_blank" rel="noreferrer" href="https://google.com">GitHub</a>
    </div>
    </div>
);

export default (MenuItemPortfolio)


