import React from 'react';
import MenuItemSkills from './MenuItemSkills'

class DirectorySkills extends React.Component{
    constructor(){
        super();
        this.state={
            sections:[
                {   
                    id:1,
                    title:'Matlab',
                    percentage: '70',
                },
                {   
                    id:2,
                    title:'Matlab',
                    percentage: "20%",
                },
                {   
                    id:3,
                    title:'Matlab',
                    percentage: '10',
                },
                {
                    id:4,
                    title:'Matlab',
                    percentage: 10,
                }
            ]
        };
    }
    render (){
        return (
            <div className="directory-menu-skills">
                {this.state.sections.map(({id,...otherSectionProps})=>(
                    <MenuItemSkills key={id}{...otherSectionProps}/>
                ))}
            </div>
        );
    }
}

export default DirectorySkills