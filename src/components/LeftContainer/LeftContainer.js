import React, { Component } from 'react';
import './LeftContainer.css';
import '../../App.css'
import About from '../About/About.js'
import Contact from '../Contact/Contact.js'
import LineBreak from '../HalfLineBreak/LineBreak.js'
import Experience from '../Experience/Experience.js'
import Education from '../Education/Education.js'

class LeftContainer extends Component {
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
            <div className="left-container">
                <About color={this.props.color}/>
                <Contact color={this.props.color} />
                <div style={{paddingBottom: "40px"}} />
                <LineBreak color="black" />
                <Experience color={this.props.color} />
                <LineBreak color="black" />
                <Education color={this.props.color} />
                <div style={{paddingBottom: "40px"}} />
            </div>
        )
    }
}

export default LeftContainer;
