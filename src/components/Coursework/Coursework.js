import React, { Component } from 'react';
import './Coursework.css';
import '../../App.css'

import CourseworkItem from '../CourseworkItem/CourseworkItem.js'

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
                <CourseworkItem title="DES 102 (DESIGN FUNDAMENTALS)" semester="SPRING 2020"/>
                <CourseworkItem title="CSCI 310 (SOFTWARE ENGINEERING)" semester="SPRING 2020"/>
                <CourseworkItem title="ITP 303 (FULL-STACK WEB DEVELOPMENT)" semester="SPRING 2020"/>
                <CourseworkItem title="DES 203 (DIGITAL TOOLS FOR DESIGN)" semester="FALL 2019"/>
                <CourseworkItem title="CSCI 356 (INTRODUCTION TO COMPUTER SYSTEMS)" semester="FALL 2019"/>
                <CourseworkItem title="CSCI 360 (INTRODUCTION TO ARTIFICIAL INTELLIGENCE)" semester="FALL 2019"/>
                <CourseworkItem title="CSCI 430 (INTRODUCTION TO COMPUTER AND NETWORK SECURITY)" semester="SPRING 2019"/>
                <CourseworkItem title="CSCI 499 (SPECIAL TOPICS: CONCEPTS OF PROGRAMMING LANGUAGES)" semester="SPRING 2019"/>
                <CourseworkItem title="CSCI 201 (PRINCIPLES OF SOFTWARE DEVELOPMENT)" semester="FALL 2018"/>
                <CourseworkItem title="CSCI 270 (INTRODUCTION TO ALGORITHMS AND THEORY OF COMPUTING)" semester="FALL 2018"/>
                <CourseworkItem title="MATH 225 (LINEAR ALGEBRA AND LINEAR DIFFERENTIAL EQUATIONS)" semester="FALL 2018"/>
                <CourseworkItem title="CSCI 104 (DATA STRUCTURES AND OBJECT ORIENTED DESIGN)" semester="SPRING 2018"/>
                <CourseworkItem title="CSCI 170 (DISCRETE METHODS IN COMPUTER SCIENCE)" semester="SPRING 2018"/>
            </div>
        )
    }
}

export default Coursework;
