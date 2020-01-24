import React, { Component } from 'react';
import './Body.css';
import '../../App.css'
import ImageFrame from '../ImageFrame/ImageFrame.js'
import HomeCaption from '../HomeCaption/HomeCaption.js'
import LineBreak from '../LineBreak/LineBreak.js'
import LeftContainer from '../LeftContainer/LeftContainer.js'
import RightContainer from '../RightContainer/RightContainer.js'
import Subfooter from '../Subfooter/Subfooter.js'

import {Link} from "react-router-dom";

class Body extends Component {
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
            <div id="body">
                {this.props.projects.map((project, index) => (
                    <div>
                        <Link to={"/project" + project.id}><ImageFrame url={project.images[0].ref} id={project.id} /></Link>
                        <HomeCaption description={project.description} title={project.title} medium={project.medium} year={project.year} />
                    </div>
                ))}
                <LineBreak/>
                <div className="body-container-split">
                    <LeftContainer color="black" />
                    <RightContainer url={require("../../files/portrait.png")}/>
                </div>
                <Subfooter/>
            </div>
        )
    }
}

export default Body;
