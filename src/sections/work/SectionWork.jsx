import React from 'react';
import DirectoryWork from '../../directory/DirectoryWork'
import '../education/SectionEducation.css';

const SectionEducation =()=>{
    return (
        <div className="container-fluid">
            <div className ="Education ">
            <div class="upper-section">
                <p>WORK</p>
            </div>
                <div className="row justify-content-center mt-5 pb-5 ">
                    <div className=" col-lg-7 col-md-7 col-sm-7 col-xs-7">
                        <div className='work'>
                        <DirectoryWork/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SectionEducation

