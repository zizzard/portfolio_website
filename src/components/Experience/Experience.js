import React, { Component } from 'react';
import './Experience.css';
import '../../App.css'
import ExperienceItem from '../ExperienceItem/ExperienceItem.js'

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
                <ExperienceItem employeer="USC VITERBI SCHOOL OF ENGINEERING" location="LOS ANGELES, CA" title="LEAD COURSE PRODUCER (CSCI 102)" dates="2018 AUG TO DEC 2019"
                                body="Head course producer for CSCI 102 - Fundamentals of Computation starting in the Fall 2018 semester. I hold office hours to assist students outside of lecture, lead lab sections to reinforce material and answer student questions, graded student’s assignments and exams, and coordinated scheduling CP Office Hours."/>
                <ExperienceItem employeer="COMCAST" location="DENVER, CO" title="SOFTWARE ENGINEERING INTERN (DATA EXPERIENCE TEAM)" dates="2019 MAY TO AUG"
                            body="Intern for Open Ingest team within the Data Experience (dx) Organization. Created a Docker container to host the tool Pentaho Data Integration to build ETL operations which were submitted on a Hadoop YARN Cluster. During Lab Week, I built an API to serve machine learning pipelines."/>
                <ExperienceItem employeer="BITMARK, INC. " location="REMOTE" title="SOFTWARE ENGINEERING INTERN (BITMARK NODE TEAM)" dates="2018 MAY TO AUG"
                            body="Developed a desktop application in the Electron Framework to allow users to seamlessly interact with the Bitmark Node Blockchain and Docker Container. Previously, all interaction with the software was tedious, as it occurred solely in a command line interface."/>

            </div>
        )
    }
}

export default Experience;
