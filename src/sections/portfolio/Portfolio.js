import React from 'react';
import './Portfolio-style.css';
import PortfolioVideo1 from './PortfolioVideo1/PortfolioVideo1';
import PortfolioVideo2 from './PortfolioVideo2/PortfolioVideo2';
import PortfolioVideo3 from './PortfolioVideo3/PortfolioVideo3';
import PortfolioVideo4 from './PortfolioVideo4/PortfolioVideo4';

const Portfolio =()=>{
    return (
        <div className="portfolio mb-2" id="portfolio">
            <PortfolioVideo1/>
            <PortfolioVideo2/>
            <PortfolioVideo4/>
            <PortfolioVideo3/>
           
        </div>
    )
}
export default Portfolio

