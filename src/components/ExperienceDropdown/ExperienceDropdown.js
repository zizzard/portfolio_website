import React, { Component } from 'react';
import './ExperienceDropdown.css';
import '../../App.css'
import Experience from '../Experience/Experience.js'
import Education from '../Education/Education.js'
import Header from '../Header/Header.js'

class ExperienceDropdown extends Component {
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
            <div className="portfolio-container-split">
                <Header color="black" aboutAction={this.props.aboutHandler} portfolioAction={this.props.portfolioHandler}
                                  experienceAction={this.props.experienceHandler} close={this.props.close} strikethrough="experience"/>
                <div className="half" >
                    <Experience color="white" />
                </div>
                <div className="half" >
                    <Education color="white" />
                </div>
            </div>
        )
    }
}

export default ExperienceDropdown;
