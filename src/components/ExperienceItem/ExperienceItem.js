import React, { Component } from 'react';
import './ExperienceItem.css';
import '../../App.css'

class ExperienceItem extends Component {

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
            <div className="experience-item-container">
                <div className="experience-title">
                    <div className="experience-employeer">{this.props.employeer}</div>
                    <div className="experience-location">{this.props.location}</div>
                </div>
                <div className="experience-subtitle">
                    <div className="experience-title">{this.props.title}</div>
                    <div className="experience-dates"><i>{this.props.dates}</i></div>
                </div>
                <div className="experience-body">{this.props.body}</div>
            </div>

        )
    }
}

export default ExperienceItem;
