import React from 'react';
import '../App.css';
import MenuItemPortfolio from './MenuItemPortfolio'


class DirectoryPortfolio extends React.Component{
    constructor(){
        super();
        this.state={
            sections:[
                {   
                    id:1,
                    image1:'Screenshot2.png',
                    image2:'',
                    image3:'',
                    image4:'',
                    title:'Landing Page2',
                    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                    link:'https://google.sk'
                },
                {   
                    id:2,
                    image1:('../LandingPage/Screenshot5.png'),
                    title:'Landing Page',
                    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                    link:'https://google.sk' 
                },
                {   
                    id:3,
                    image1:('Screenshot2.png'),
                    title:'Landing Page',
                    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                    link:'https://google.sk'  
                },
                {
                    id:4,
                    image1:('Screenshot2.png'),
                    title:'Landing Page',
                    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                    link:'https://google.sk'
                }
            ]
        };
    }
    render (){
        return (
            <div className="directory-menu-portfolio">
                {this.state.sections.map(({id,...otherSectionProps})=>(
                    <MenuItemPortfolio key={id}{...otherSectionProps}/>
                ))}
            </div>
        );
    }
}

export default DirectoryPortfolio