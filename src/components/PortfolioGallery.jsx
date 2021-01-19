import React from 'react';
import PortfolioCarousel from "./PortfolioCarousel";

const PortfolioGallery=()=>{
    return(
        <div className="portfolio">
            <h1>our happy clients</h1>
            <div className="container">
                <div className="portfolio-content">
                    <PortfolioCarousel/>
                </div>
            </div>
        </div>
    )
}

export default PortfolioGallery