import React from 'react';
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
                    descriptionWork:"Creating space for contemporary dance performances. Key responsibilities: Administrative duties, including answering email/ phone enquiries Working as part of a team with other artist studio workers, researching projects or ideas. Coordinate the rehearsal activities of guest choreographers and other artists working with the dancers. Keeping a studio organized or an artist's schedule organized. Coordinating communication with representatives from galleries, studios, theaters. Researching projects or ideas."
                },
                {   
                    id:2,
                    position: 'Assistant',
                    employment: 'Partners Group Finance',
                    startDate: "2014",
                    endDate: "2015",
                    descriptionWork:'Responsible for helping managers keep day-to-day operations running. Create reports, assisting the manager in organizing and planning.'
                },
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