import React, { Component } from 'react';
import './Contact.css';
import '../../App.css'
import Resume from '../../files/resume.pdf';

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
                    <div className="contact-link"><a href={Resume} style={inputStyle}>Resume</a></div>
                </div>
                <div className="contact-row">
                    <div className="contact-item">6097319486</div>
                    <div className="contact-link"><a href="https://github.com/zizzard" style={inputStyle}>GitHub</a></div>
                </div>
                <div className="contact-row">
                    <div className="contact-item">zachizzard@gmail.com</div>
                    <div className="contact-link"><a href="https://www.linkedin.com/in/zachizzard/" style={inputStyle}>LinkedIn</a></div>
                </div>

            </div>

        )
    }
}

export default Contact;
