import React from 'react';
import Modal from 'react-modal';
import ResumePropTypes from './resume';

const Entry= React.createClass({
    propTypes:{
        entry:ResumePropTypes.projects
    },

    getInitialState: function(){
        return{
            modalOpen:false
        };
    },

    handleOpenModal: function (){
        return this.setState({
            modalOpen:true
        });
    },

    handleCloseModal: function(){
        return this.setState({
            modalOpen:true
        });
    },

    render :function (){
        return(
            <div className="columns portfolio-item">
                <div className="item-wrap" onClick={this.handleOpenModal}>
                    <img
                        sr={this.props.entry.image.thumb}
                        alt={this.props.entry.name}/>
            <div className="overlay">
                <div className="portfolio-item-meta">
                    <h5>{this.props.entry.name}</h5>
                    <p>{this.props.entry.category}</p>
                </div>
            </div>
            <div className="link-icon">
                <i className="icon-down-open"></i>

            </div>
                
                </div>
                <Modal entry={this.props.entry} isOpen={this.state.modalOpen} onRequestClose={this.handleCloseModal}/>
            </div>
        );
    }

});

const Portfolio=React.createClass({
    propTypes:{
        content:ResumePropTypes.projectsSet
    },

    render: function(){
        return(
            <section id="portfolio">
                <div className="row">
                    <div className='twelve columns collapsed'>
                        <h1>Portfolio</h1>
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            {this.propTypes.entry.map( (entry,index)
                                
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

module.exports=Portfolio;