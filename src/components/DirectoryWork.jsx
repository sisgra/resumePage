import React from 'react';
import './DirectoryWork-style.css';
import MenuItemWork from './MenuItemWork';

class DirectoryWork extends React.Component{
    constructor(){
        super();

        this.state={
            sections:[
                {   
                    id:1,
                    position: 'Co-founder',
                    employment: 'Noir Dance Company',
                    startDate: "2017",
                    endDate: "2021",
                    descriptionWork:'Uneemehe beheme pereme mehehe nehehe dereme nohama bum bumUneemehe beheme pereme mehehe nehehe dereme nohama bum bumUneemehe beheme pereme mehehe nehehe dereme nohama bum bum'
                },
                {   
                    id:2,
                    position: 'Assistant',
                    employment: 'Partners Group Finance',
                    startDate: "2014",
                    endDate: "2015",
                    descriptionWork:'Uneemehe beheme pereme mehehe nehehe dereme nohama bum bumUneemehe beheme pereme mehehe nehehe dereme nohama bum bumUneemehe beheme pereme mehehe nehehe dereme nohama bum bum'
                },
                {   
                    id:3,
                    position: 'Mechanical Ingeneering',
                    employment: 'Slovak University of Technology',
                    startDate: "2013",
                    endDate: "2016",
                    descriptionWork:'Uneemehe beheme pereme mehehe nehehe dereme nohama bum bumUneemehe beheme pereme mehehe nehehe dereme nohama bum bumUneemehe beheme pereme mehehe nehehe dereme nohama bum bum'
                }
            ]
        };
    }
    render (){
        return (
            <div className="directory-menu-work">
                {this.state.sections.map(({id,...otherSectionProps})=>(
                    <MenuItemWork key={id}{...otherSectionProps}/>
                ))}
            </div>
        );
    }
}

export default DirectoryWork