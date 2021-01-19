import React from 'react';
import SkuskaSkills from './skuskaSkills';
import SkuskaSkills2 from './skuskaSkills2';
import './SectionSkills-style.css';



const SectionSkills =()=>{
    return (
        <div className="container-fluid">
            <div className ="skills mt-5">
                <h3>Skills</h3>
            <div className="row">
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



