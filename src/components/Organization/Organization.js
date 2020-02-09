import React, { Component } from 'react';
import './Organization.css';
import '../../App.css'

import OrganizationItem from '../OrganizationItem/OrganizationItem.js'
import OrganizationJson from '../../files/organizations.js' //organization page json file

class Organization extends Component {

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
            <div className="organization-container">
                <div className="education-bold">RELEVANT COURSEWORK</div>
                {
                    OrganizationJson.map((item, i) => (
                        <OrganizationItem title={item.title} subtitle={item.subtitle} dates={item.dates}/>
                    ))
                }
            </div>
        )
    }
}

export default Organization;
