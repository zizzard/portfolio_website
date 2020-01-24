import React, { Component } from 'react';
import '../../App.css'
import ImageFrame from '../ImageFrame/ImageFrame.js'
import ProjectCaption from '../ProjectCaption/ProjectCaption.js'

class ProjectItem extends Component {
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
            <div id={this.props.id}>
                <ImageFrame url={this.props.url} />
                <ProjectCaption caption={this.props.caption} color={this.props.color}/>
            </div>
        )
    }
}

export default ProjectItem;
