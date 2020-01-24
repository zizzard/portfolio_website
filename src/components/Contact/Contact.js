import React, { Component } from 'react';
import './Contact.css';
import '../../App.css'


class Contact extends Component {

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
            color: this.props.color
        }

        return (
            <div className="contact-container" style={inputStyle}>
                <div className="contact-title">CONTACT</div>
                <div className="contact-row">
                    <div className="contact-item">Zach Izzard</div>
                    <div className="contact-link">Resume</div>
                </div>
                <div className="contact-row">
                    <div className="contact-item">6097319486</div>
                    <div className="contact-link">GitHub</div>
                </div>
                <div className="contact-row">
                    <div className="contact-item">zachizzard@gmail.com</div>
                    <div className="contact-link">LinkedIn</div>
                </div>

            </div>

        )
    }
}

export default Contact;
