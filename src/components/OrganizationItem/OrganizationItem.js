import React, { Component } from 'react';
import './OrganizationItem.css';
import '../../App.css'

class OrganizationItem extends Component {

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
            <div className="organization-item-container">
                <div className="organization-item">{this.props.title}<i>{this.props.subtitle}</i></div>
                <div className="organization-item"><i>{this.props.dates}</i></div>
            </div>
        )
    }
}

export default OrganizationItem;
