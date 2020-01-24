import React, { Component } from 'react';
import './Organization.css';
import '../../App.css'

import OrganizationItem from '../OrganizationItem/OrganizationItem.js'

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
                <OrganizationItem title="AAAI STUDENT CHAPTER AT USC - " subtitle="TREASURER (E-BOARD)" dates="2019 TO PRESENT"/>
                <OrganizationItem title="HACKSC JR - " subtitle="E-BOARD" dates="2017 TO 2019"/>
                <OrganizationItem title="CORPUS CALLOSUM - " subtitle="DEVELOPER" dates="2019 TO PRESENT"/>
                <OrganizationItem title="JOINT EDUCATION PROJECT - " subtitle="STUDENT TEACHER" dates="2018 TO 2019"/>
                <OrganizationItem title="SCIENCE OUTREACH - " subtitle="STUDENT TEACHER" dates="2017 TO 2018"/>
                <OrganizationItem title="PERIGO - " subtitle="FRONT-END DEVELOPER" dates="2018 TO 2019"/>
                <OrganizationItem title="DEAN’S LIST" subtitle="" dates="ALL SEMESETERS"/>
                <OrganizationItem title="NEW YORK ALUMNI ASSOCIATION SCHOLARSHIP" subtitle="" dates="2018"/>
            </div>
        )
    }
}

export default Organization;
