import React from 'react';
import SkuskaSkills from './skuskaSkills';
import SkuskaSkills2 from './skuskaSkills2';
import './SectionSkills-style.css';



const SectionSkills =()=>{
    return (
        <div className="container-fluid mb-5 " id="skills">   
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-12 col-sm-8 col-xs-8">
                <SkuskaSkills/>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-8 col-xs-8">
                <SkuskaSkills2/>
                </div>            
            </div>
        </div>
        
    )
}
export default SectionSkills



