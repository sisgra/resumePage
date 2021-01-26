import React from "react";
import './SectionPortfolioPhoto-style.css';
import Figma1 from './Image/1.png';
import Figma2 from './Image/3.png';

const PortfolioPhoto=()=>{
    return (
        <div className="container-fluid">
           <div className="portfolio">
            <div className="row">
                <div className="col-sm">
                <div className="text-container">
                    <h2>UX design project on TechLab</h2>
                    <p>uno bumo tudo rumo huno uno bumo tudo rumo huno uno bumo tudo rumo huno uno bumo tudo rumo huno uno bumo tudo rumo huno uno bumo tudo rumo hunouno bumo tudo rumo hunouno bumo tudo rumo hunouno bumo tudo rumo hunouno bumo tudo rumo hunouno bumo tudo rumo hunouno bumo tudo rumo huno</p>
                    <p>uno bumo tudo rumo huno uno bumo tudo rumo huno uno bumo tudo rumo huno uno bumo tudo rumo huno uno bumo tudo rumo huno uno bumo tudo rumo hunouno bumo tudo rumo hunouno bumo tudo rumo hunouno bumo tudo rumo hunouno bumo tudo rumo hunouno bumo tudo rumo hunouno bumo tudo rumo huno</p>
                </div>
                </div>
                <div className="col-sm">
                    <img className="figma-picture" src={Figma1} alt="figma1"></img>
                </div>
                <div className="col-sm">
                    <img className="figma-picture" src={Figma2} alt="figma2"></img>
                </div>
            </div> 
            </div> 
        </div>
    )
}

export default PortfolioPhoto