import React, { Component } from 'react';
import './PortfolioDropdown.css';
import '../../App.css'
import Header from '../Header/Header.js'
import PortfolioDropdownItem from '../PortfolioDropdownItem/PortfolioDropdownItem.js'

class PortfolioDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            WindowSize: window.innerWidth
        };
    }

    handleResize(WindowSize, event) {
        this.setState({
            WindowSize: window.innerWidth
        });
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize.bind(this));
    }

    render() {
        return (
            <div className="portfolio-dropdown">
                <Header color="black" aboutAction={this.props.aboutHandler} portfolioAction={this.props.portfolioHandler}
                                      experienceAction={this.props.experienceHandler} close={this.props.close} strikethrough="portfolio"/>
                <div className="dropdown-items">
                    {this.props.projects.map((project, index) => (
                        <div>
                            <PortfolioDropdownItem url={project.images[0].ref} title={project.title} medium={project.medium} year={project.year} body={project.short_description} id={project.id} portfolioAction={this.props.portfolioHandler}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default PortfolioDropdown;
