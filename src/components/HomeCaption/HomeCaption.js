import React, { Component } from 'react';
import './HomeCaption.css';
import '../../App.css'


class HomeCaption extends Component {

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
            <div className="caption">
                <div className="caption-left">
                    <div className="caption-expand">expand +</div>
                </div>
                <div className="caption-right">
                    <div className="caption-title">{this.props.title}</div>
                    <div className="caption-medium">{this.props.medium}</div>
                    <div className="caption-year">{this.props.year}</div>
                </div>
            </div>
        )
    }
}

export default HomeCaption;
