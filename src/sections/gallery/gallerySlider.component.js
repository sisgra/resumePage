import React from "react";
import './gallerySlider.styless.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './code01.png'
import image2 from './image1.png'
import image3 from './image1.png'
import image4 from './image1.png'

export default function GallerySlider() {
  return (
    <div className="GallerySlider">
     <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src={image1} className="sliderimg" alt=""/>
      <img src={image2} className="sliderimg" alt=""/>
      <img src={image3} className="sliderimg" alt=""/>
      <img src={image4} className="sliderimg" alt=""/>
    </AliceCarousel>
    
    </div>
  );
}

