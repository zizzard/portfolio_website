import React, { Component } from 'react';
import './ImageFrame.css';
import '../../App.css'

class ImageFrame extends Component {

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
            <div className="image-frame">
                <img className="image" src={this.props.url} alt="" id={this.props.id} onLoad={this.props.updateHeight}></img>
            </div>
        )
    }
}

export default ImageFrame;
