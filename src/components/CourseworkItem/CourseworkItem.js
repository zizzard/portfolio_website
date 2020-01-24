import React, { Component } from 'react';
import './CourseworkItem.css';
import '../../App.css'

class CourseworkItem extends Component {

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
            <div className="coursework-item-container">
                <div className="coursework-item">{this.props.title}</div>
                <div className="coursework-item"><i>{this.props.semester}</i></div>
            </div>
        )
    }
}

export default CourseworkItem;
