import React, { Component } from 'react';
import './ProjectTitle.css';
import '../../App.css'


class ProjectTitle extends Component {

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
            <div className="project-header">
                <div className="project-title-container">
                    <div className="project-title">{this.props.title}</div>
                    <div className="project-medium">{this.props.medium}</div>
                    <div className="project-year">{this.props.year}</div>
                </div>
                <div className="project-description">{this.props.description}</div>
            </div>
        )
    }
}

export default ProjectTitle;
