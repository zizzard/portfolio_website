import React, { Component } from 'react';
import './AboutDropdown.css';
import '../../App.css'
import About from '../About/About.js'
import Contact from '../Contact/Contact.js'
import Header from '../Header/Header.js'
class AboutDropdown extends Component {
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
            <div className="about-dropdown-container">
                <Header color="black" aboutAction={this.props.aboutHandler} portfolioAction={this.props.portfolioHandler}
                                  experienceAction={this.props.experienceHandler} close={this.props.close} strikethrough="about" />
                <div className="about-split">
                    <About color="white" />
                    <Contact color="white" />
                </div>
            </div>
        )
    }
}

export default AboutDropdown;
