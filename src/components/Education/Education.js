import React, { Component } from 'react';
import './Education.css';
import '../../App.css'

import EducationTitle from '../EducationTitle/EducationTitle.js';
import Coursework from '../Coursework/Coursework.js';
import Organization from '../Organization/Organization.js'

class Education extends Component {

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
        let inputStyle = {
            color: this.props.color
        }

        return (
            <div className="education-container" style={inputStyle} >
                <EducationTitle/>
                <Coursework/>
                <Organization/>
            </div>
        )
    }
}

export default Education;
// <Coursework/>
// <Organizations/>
