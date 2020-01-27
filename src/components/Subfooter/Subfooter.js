import React, { Component } from 'react';
import LineBreak from '../LineBreak/LineBreak.js';
import './Subfooter.css';
import '../../App.css'

class Subfooter extends Component {

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
            <div className="subfooter-container">
                <LineBreak/>
                <div className="subfooter-text">THANKFUL YOU STOPPED BY</div>
                <LineBreak/>
                <div className="subfooter-text-right">a site designed and built by zach izzard, 2020</div>
            </div>
        )
    }
}

export default Subfooter;
