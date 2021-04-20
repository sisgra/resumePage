import React from "react";
import ProgressBar from './ProgressBar';

const testData = [
  
  {label:"HTML", bgcolor: "#da4f0a", completed: 60 },
  {label:"CSS",bgcolor: "#da4f0a", completed: 60 },
  {label:"JavaScript",bgcolor: "#da4f0a", completed: 40 },
  {label:"ReactJS",bgcolor: "#da4f0a", completed: 60 },
  {label:"Bootstrap",bgcolor: "#da4f0a", completed: 60},
  {label:"FireBase",bgcolor: "#f04b4c", completed: 40 },
  {label:"Figma",bgcolor: "#da4f0a", completed: 60 }
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