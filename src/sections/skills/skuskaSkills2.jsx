import React from "react";
import ProgressBar2 from './ProgressBar2';

const testData = [
  {label:"C#", bgcolor: "#da4f0a", completed: 40 },  
  {label:"Android Studio/Kotlin",bgcolor: "#da4f0a", completed: 20 },
  {label:"Adobe Photoshop", bgcolor: "#f04b4c", completed: 50 },
  {label:"Adobe Premiere", bgcolor: "#da4f0a", completed: 50 },
  {label:"Adobe Illustrator",bgcolor: "#f04b4c", completed: 50 },
  {label:"Wondershare Filmora X",bgcolor: "#eb5408", completed: 60 },
  {label:"Enterprise Architecture",bgcolor: "#da4f0a", completed: 40 },
 
  
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