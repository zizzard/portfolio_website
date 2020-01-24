import React, { Component } from 'react';
import './LineBreak.css';
import '../../App.css'

class LineBreak extends Component {

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
            background: this.props.color
        }

        return (
            <hr className="hr" style={inputStyle}/>
        )
    }
}

export default LineBreak;
