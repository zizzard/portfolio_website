import React, { Component } from 'react';
import './Experience.css';
import '../../App.css'
import ExperienceItem from '../ExperienceItem/ExperienceItem.js'

import ExperienceJson from '../../files/experience.js' //experience page json file

class Experience extends Component {

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
            <div className="experience-container" style={inputStyle}>
            {
                ExperienceJson.map((item, i) => (
                    <ExperienceItem employeer={item.employeer} location={item.location} title={item.title} dates={item.dates} body={item.body}/>
                ))
            }
            </div>
        )
    }
}

export default Experience;
