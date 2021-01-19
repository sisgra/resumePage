import React from 'react';
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import LandingPageImage from '../LandingPage/Screenshot5.png';
import './PortfolioCarousel-style.css'

const PortfolioCarousel=()=>{
    return(
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={4000}
        >
            <div className="myCarousel">
            <h3>Landing Page</h3>
                   
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   </p>
                <div className='row'>
                    <div className="col-12 col-lg-3">
                    <img src={LandingPageImage} alt="Landing Page"/>
                    </div>
                    <div className="col-12 col-lg-3">
                    <img src={LandingPageImage} alt="Landing Page"/>
                    </div>
                    <div className="col-12 col-lg-3">
                    <img src={LandingPageImage} alt="Landing Page"/>
                    </div>
                    <div className="col-12 col-lg-3">
                    <img src={LandingPageImage} alt="Landing Page"/>
                    </div>
                </div>
            </div>
            <div className="myCarousel">
                <h3>Irina V</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         </p>
            </div>
            <div className="myCarousel">
                <h3>Benedikt H</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         </p>
            </div>
            <div className="myCarousel">
                <h3>Patrick J</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
            </div>
        </Carousel>
    )
}

export default PortfolioCarousel