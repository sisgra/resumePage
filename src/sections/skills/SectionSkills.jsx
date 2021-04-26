import React from 'react';
import SkuskaSkills from './skuskaSkills';
import SkuskaSkills2 from './skuskaSkills2';
import './SectionSkills-style.css';



const SectionSkills =()=>{
    return (
        <div className="container-fluid" id="skills">
            <div className ="skills mt-5">
                <h3>Skills</h3>
            <div className="row ml-5">
                <div className="col-sm ">
                <SkuskaSkills/>
                </div>
                <div className=" col-sm">
                <SkuskaSkills2/>
                </div>
                </div>
            </div>
        </div>
        
    )
}
export default SectionSkills



