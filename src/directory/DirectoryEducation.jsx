import React from 'react';
import MenuItemEducation from '../menu-item/MenuItemEducation'

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
                    descriptionEducation:'Knowledge in natural science and principle subjects. The most essential subject are oriented on information security management systems, industrial control systems, designing components for complex control systems, advanced control methods, integrating information and control system.',
                    startDate: "2018",
                    endDate: "2020"
                },
                {   
                    id:2,
                    program: 'Automobiles and Mobile Work Machines',
                    faculty:'Faculty of Mechanical Engineering',
                    institution: 'Slovak University of Technology',
                    startDate: "2013",
                    endDate: "2016"
                },
                {   
                    id:3,
                    program: 'Erasmus',
                    faculty: 'Faculty V - Mechanical Engineering and Transport Systems, TU Berlin',
                    institution: 'Technical University Berlin',
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