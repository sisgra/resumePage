import React from 'react';
import DirectoryEducation from './DirectoryEducation'
import './SectionEducation.css';

const SectionEducation =()=>{
    return (
        <div className="container-fluid">
            <div className ="Education mt-5">
            <div className="row">
                <div className="col-lg-2 offset-md-2 col-xm-12 mt-5">
                <h3>Education</h3>
                </div>
                <div className=" col-lg-7  col-xm-12">
                    <DirectoryEducation/>
            </div>
            </div>
        </div>
        </div>
    )
}
export default SectionEducation
