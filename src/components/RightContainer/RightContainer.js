import React, { Component } from 'react';
import './RightContainer.css';
import '../../App.css'

class RightContainer extends Component {
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
            <div className="right-container">
                <img className="image" src={this.props.url} alt=""></img>
            </div>
        )
    }
}

export default RightContainer;
