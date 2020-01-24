import React, { Component } from 'react';
import './EducationTitle.css';
import '../../App.css'

class EducationTitle extends Component {

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
            <div className="education-title-container">
                <div className="education-title">
                    <div className="education-bold">UNIVERSITY OF SOUTHERN CALIFORNIA</div>
                    <div className="education-small">GPA: 3.96</div>
                </div>
                <div className="education-title">
                    <div className="education-small">BACHELOR OF SCIENCE IN COMPUTER SCIENCE</div>
                    <div className="education-small"><i>2017 AUG TO 2021 MAY</i></div>
                </div>
                <div className="education-title">
                    <div className="education-small">MINOR IN COMMUNICATION DESIGN</div>
                </div>
            </div>
        )
    }
}

export default EducationTitle;
