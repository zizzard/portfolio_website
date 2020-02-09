import React, { Component } from 'react';
import './Coursework.css';
import '../../App.css'

import CourseworkItem from '../CourseworkItem/CourseworkItem.js'
import CourseworkJson from '../../files/coursework.js' //coursework page json file
class Coursework extends Component {

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
            <div className="coursework-container">
                <div className="coursework-title">
                    <div className="coursework-bold">RELEVANT COURSEWORK</div>
                    <div className="coursework-bold">(SEMESTER)</div>
                </div>
                {
                    CourseworkJson.map((item, i) => (
                        <CourseworkItem title={item.title} semester={item.semester}/>
                    ))
                }
            </div>
        )
    }
}

export default Coursework;
