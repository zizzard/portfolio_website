import React, { Component } from 'react';
import './Project.css';
import '../../App.css'
import ProjectItem from '../ProjectItem/ProjectItem.js'
import ProjectTitle from '../ProjectTitle/ProjectTitle.js'
import Subfooter from '../Subfooter/Subfooter.js'

class Project extends Component {
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
            <div id="body">
                <ProjectTitle title={this.props.title} medium={this.props.medium} year={this.props.year} description={this.props.description}/>
                {this.props.images.map((image, index) => (
                        <ProjectItem url={image.ref} caption={image.caption} id={index} color="white" />
                ))}
                <Subfooter/>
            </div>
        )
    }
}

export default Project;
