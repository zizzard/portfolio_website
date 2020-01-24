import React, { Component } from 'react';
import './ProjectCaption.css';
import '../../App.css'


class ProjectCaption extends Component {

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
        if(this.props.color === "black"){
            this.inputStyle = {
                color: "white",
                background: "black"
            }
        }

        return (
            <div className="caption" style={this.inputStyle}>
                <div className="caption-expand">{this.props.caption}</div>
            </div>
        )
    }
}

export default ProjectCaption;
