import React from 'react';
import DirectoryEducation from '../../directory/DirectoryEducation'
import './SectionEducation.css';

const SectionEducation =()=>{
    return (
        <div className="container-fluid" id="education">
            <div class="upper-section">
                <p>EDUCATION</p>
            </div>
            <div className ="Education pt-5 pb-5 ">
                <div className="row justify-content-center">
                    <div className=" col-lg-7 col-md-7 col-sm-7">

                        <div className='education'>
                        <DirectoryEducation/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SectionEducation

