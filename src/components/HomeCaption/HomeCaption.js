import React, { Component } from 'react';
import './HomeCaption.css';
import '../../App.css'

import {Link} from "react-router-dom";

class HomeCaption extends Component {

    constructor(props) {
        super(props);
        this.state = {
            WindowSize: window.innerWidth,
            expand: false,
            expandText: "expand +"
        };

        this.expand = this.expand.bind(this);
    }

    handleResize(WindowSize, event) {
        this.setState({
            WindowSize: window.innerWidth
        });
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize.bind(this));
    }

    expand(){
        if(this.state.expand){
            this.setState({
                expand: false,
                expandText: "expand +"
            });
        }else{
            this.setState({
                expand: true,
                expandText: "collapse -"
            });
        }
    }

    render() {
        return (
            <div className="outer-caption">
                <div className="inner-caption">
                    <div className="caption-left">
                        <div className="caption-expand-pointer" onClick={this.expand}>{this.state.expandText}</div>
                    </div>
                    <div className="caption-right">
                        <div className="caption-title">{this.props.title}</div>
                        <div className="caption-medium">{this.props.medium}</div>
                        <div className="caption-year">{this.props.year}</div>
                    </div>
                </div>
                {this.state.expand ? <div>
                                        <div className="caption-description">{this.props.description}</div>
                                        <Link to={"/project" + this.props.id} className="view-project"><div>CLICK HERE TO VIEW THIS PROJECT</div></Link>
                                    </div> : null}
            </div>
        )
    }
}

export default HomeCaption;
