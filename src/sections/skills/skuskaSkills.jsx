import React from "react";
import ProgressBar from './ProgressBar';

const testData = [
  
  {label:"HTML", bgcolor: "#666666", completed: 80 },
  {label:"CSS",bgcolor: "#666666", completed: 80 },
  {label:"JavaScript",bgcolor: "#666666", completed: 50 },
  {label:"ReactJS",bgcolor: "#666666", completed: 60 },
  {label:"Bootstrap",bgcolor: "#666666", completed: 60},
  {label:"FireBase",bgcolor: "#666666", completed: 40 },
  
];

function SkuskaSkills() {
    return (
      <div className="Skills">
        {testData.map((item, idx) => (
          <ProgressBar key={idx} bgcolor={item.bgcolor} label={item.label} completed={item.completed} />
        ))}
      </div>
    );
  }
  
  export default SkuskaSkills;