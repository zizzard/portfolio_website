import React, { Component } from 'react';
import './Header.css';
import '../../App.css'

import {Link} from "react-router-dom";


class Header extends Component {

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
        if(this.props.color === "black"){
            this.inputStyle = {
                color: "white",
                background: "black",
                zIndex: 2
            }
            this.rightText = "X CLOSE"
            this.action = this.props.close;
        }else if(this.props.color === "home"){
            this.rightText = <Link to="/" style={{textDecoration: "none", color: "black"}}>HOME</Link>
        }else{
            this.rightText = "ZACH IZZARD"
        }

        if(this.props.strikethrough === "about"){
            this.about = <div className="header-item" onClick={this.props.aboutAction}><span className="strikeout">ABOUT + CONTACT</span></div>;
        }else{
            this.about = <div className="header-item" onClick={this.props.aboutAction}>ABOUT + CONTACT</div>
        }

        if(this.props.strikethrough === "portfolio"){
            this.portfolio = <div className="header-item" onClick={this.props.portfolioAction}><span className="strikeout">PORTFOLIO</span></div>;
        }else{
            this.portfolio = <div className="header-item" onClick={this.props.portfolioAction}>PORTFOLIO</div>;
        }

        if(this.props.strikethrough === "experience"){
            this.experience = <div className="header-item" onClick={this.props.experienceAction}><span className="strikeout">EXPERIENCE</span></div>;
        }else{
            this.experience = <div className="header-item" onClick={this.props.experienceAction}>EXPERIENCE</div>;
        }

        return (
            <div className="header" style={this.inputStyle}>
                <div className="header-left">
                    {this.about}
                    {this.portfolio}
                    {this.experience}
                </div>
                <div className="header-right">
                    <div className="header-item" onClick={this.action}>{this.rightText}</div>
                </div>
            </div>
        )
    }
}

export default Header;
