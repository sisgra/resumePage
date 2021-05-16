import React from "react";
import ProgressBar2 from './ProgressBar2';

const testData = [
   
  {label:"Figma",bgcolor: "#666666", completed: 70 },
  {label:"Adobe Photoshop", bgcolor: "#666666", completed: 60 },
  {label:"Adobe Premiere", bgcolor: "#666666", completed: 60 },
  {label:"Adobe Illustrator",bgcolor: "#666666", completed: 60 },
  {label:"Wondershare Filmora X",bgcolor: "#666666", completed: 80 },
  {label:"Android Studio/Kotlin",bgcolor: "#666666", completed: 20 },
  
 
  
];

function SkuskaSkills2() {
    return (
      <div className="Skills">
        {testData.map((item, idx) => (
          <ProgressBar2 key={idx} bgcolor={item.bgcolor} label={item.label} completed={item.completed} />
        ))}
      </div>
    );
  }
  
  export default SkuskaSkills2;