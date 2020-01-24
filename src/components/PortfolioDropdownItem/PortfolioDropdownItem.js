import React, { Component } from 'react';
import './PortfolioDropdownItem.css';
import '../../App.css'
import ImageFrame from '../ImageFrame/ImageFrame.js'
import Scroller from '../Scroller/Scroller.js'

import {Link} from "react-router-dom";

class PortfolioDropdownItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            WindowSize: window.innerWidth,
            height: 620
        };

        this.setHeight = this.setHeight.bind(this)
        this.updateHeight = this.updateHeight.bind(this)
    }

    updateHeight(){
        const id = document.getElementById(this.props.id);
        if(id === null) return;
        this.setHeight(id.clientHeight);
    }

    setHeight(height){
        if(height === 0) return;
        this.setState({height});
    }

    handleResize(WindowSize, event) {
        this.setState({
            WindowSize: window.innerWidth
        });
        this.updateHeight();
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize.bind(this));
    }


    render() {
        return (
            <div className="portfolio-dropdown-container">
                <div className="split" >
                    <Link to={"/project" + this.props.id} onClick={this.props.portfolioAction}><ImageFrame url={this.props.url} id={this.props.id} updateHeight={this.updateHeight}/></Link>
                </div>
                <div className="split" id="vertical" >
                    <Link to={"/project" + this.props.id} onClick={this.props.portfolioAction}><Scroller height={this.state.height} /></Link>
                    <div className="center-text">
                        <div className="dropdown-header">
                            <div className="dropdown-body">{this.props.title}</div>
                            <div className="dropdown-body">{this.props.medium}</div>
                        </div>
                        <div className="dropdown-body" id="right">{this.props.year}</div>
                        <div className="dropdown-body">{this.props.body}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioDropdownItem;
