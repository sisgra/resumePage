import React from 'react';
import DirectoryWork from '../../directory/DirectoryWork'
import '../education/SectionEducation.css';

const SectionEducation =()=>{
    return (
        <div className="container-fluid">
            <div className ="Education ">
                <div className="row">
                    <div className="col-lg-2 offset-md-2 col-xm-12 mt-5">
                        <h3>Work</h3>
                    </div>
                    <div className=" col-lg-7  col-xm-12">
                        <DirectoryWork/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SectionEducation

