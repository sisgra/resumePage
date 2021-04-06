import React from 'react';
import './Footer-style.css';

const Footer =()=>{
    return (
      <section>
        <div className="footer">
            <div className="container">
              <p>  This site is developed in Reactjs.</p>
              <p className="pt-3 text-center">
                {new Date().getFullYear()}&nbsp;| Silvia
              </p>
            </div>
        </div>    
        </section>   
    )
}

export default Footer