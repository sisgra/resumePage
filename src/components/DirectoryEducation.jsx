import React from 'react';
import './DirectoryEducation-style.css';
import MenuItemEducation from './MenuItemEducation'

class DirectoryEducation extends React.Component{
    constructor(){
        super();
        this.state={
            sections:[
                {   
                    id:1,
                    program: 'Process Automation and Informatization in Industry',
                    faculty:'Faculty of Materials Science and Technology',
                    institution: 'Slovak University of Technology',
                    descriptionEducation:'Uneemehe beheme pereme mehehe nehehe dereme nohama bum bumUneemehe beheme pereme mehehe nehehe dereme nohama bum bumUneemehe beheme pereme mehehe nehehe dereme nohama bum bumUneemehe beheme pereme mehehe nehehe dereme nohama bum bumUneemehe beheme pereme mehehe nehehe dereme nohama bum bumUneemehe beheme pereme mehehe nehehe dereme nohama bum bumUneemehe beheme pereme mehehe nehehe dereme nohama bum bumUneemehe beheme pereme mehehe nehehe dereme nohama bum bum',
                    startDate: "2018",
                    endDate: "2020"
                },
                {   
                    id:2,
                    program: 'Automobiles and Mobile Work Machines',
                    faculty:'Faculty of Mechanical Engineering',
                    institution: 'Slovak University of Technology',
                    descriptionEducation:'Uneemehe beheme pereme mehehe nehehe dereme nohama bum bumUneemehe beheme pereme mehehe nehehe dereme nohama bum bumUneemehe beheme pereme mehehe nehehe dereme nohama bum bumUneemehe beheme pereme mehehe nehehe dereme nohama bum bumUneemehe beheme pereme mehehe nehehe dereme nohama bum bumUneemehe beheme pereme mehehe nehehe dereme nohama bum bumUneemehe beheme pereme mehehe nehehe dereme nohama bum bumUneemehe beheme pereme mehehe nehehe dereme nohama bum bum',
                    startDate: "2013",
                    endDate: "2016"
                },
                {   
                    id:3,
                    program: 'Automotive technology',
                    faculty: 'Erasmus',
                    institution: 'Technical University Berlin',
                    descriptionEducation:'Uneemehe beheme pereme mehehe nehehe dereme nohama bum bumUneemehe beheme pereme mehehe nehehe dereme nohama bum bumUneemehe beheme pereme mehehe nehehe dereme nohama bum bumUneemehe beheme pereme mehehe nehehe dereme nohama bum bumUneemehe beheme pereme mehehe nehehe dereme nohama bum bumUneemehe beheme pereme mehehe nehehe dereme nohama bum bumUneemehe beheme pereme mehehe nehehe dereme nohama bum bumUneemehe beheme pereme mehehe nehehe dereme nohama bum bum',
                    startDate: "2015",
                    endDate: "2016"
                }
            ]
        };
    }
    render (){
        return (
            <div className="directory-menu-education">
                {this.state.sections.map(({id,...otherSectionProps})=>(
                    <MenuItemEducation key={id}{...otherSectionProps}/>
                ))}
            </div>
        );
    }
}

export default DirectoryEducation