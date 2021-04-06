import React from "react";
import ProgressBar2 from './ProgressBar2';

const testData = [
  {label:"C#", bgcolor: "#da4f0a", completed: 50 },  
  {label:"Android Studio/Kotlin",bgcolor: "#da4f0a", completed: 40 },
  {label:"Adobe Photoshop", bgcolor: "#f04b4c", completed: 40 },
  {label:"Adobe Premiere", bgcolor: "#da4f0a", completed: 50 },
  {label:"Enterprise Architecture",bgcolor: "#f04b4c", completed: 50 },
  {label:"Wolfram Mathematica",bgcolor: "#eb5408", completed: 50 },
  {label:"Matlab/Simulink",bgcolor: "#da4f0a", completed: 53 },
  {label:"Inventor",bgcolor: "#da4f0a", completed: 50 },
  
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