import React, {Component} from 'react';
import './App.css';

import Header from './components/Header/Header.js'
import AboutDropdown from './components/AboutDropdown/AboutDropdown.js'
import ExperienceDropdown from './components/ExperienceDropdown/ExperienceDropdown.js'
import PortfolioDropdown from './components/PortfolioDropdown/PortfolioDropdown.js'
import Body from './components/Body/Body.js'
import Project from './components/Project/Project.js'

import Projects from './files/projects.js'; //project page json file

import { HashRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
    constructor(props){
        super(props);

        this.aboutHandler = this.aboutHandler.bind(this);
        this.portfolioHandler = this.portfolioHandler.bind(this);
        this.experienceHandler = this.experienceHandler.bind(this);
        this.close = this.close.bind(this);

        this.state = {
            aboutShow: false,
            portfolioShow: false,
            experienceShow: false,
            body: true
        };
    }

    componentDidMount() {
        document.title = "ZACH IZZARD";
    }

    aboutHandler(){
        if(this.state.aboutShow){
            this.setState({
                aboutShow: false,
                portfolioShow: false,
                experienceShow: false,
                body: true
            });
        }else{
            this.setState({
                aboutShow: true,
                portfolioShow: false,
                experienceShow: false,
                body: true
            });
        }
    }

    portfolioHandler(){
        if(this.state.portfolioShow){
            this.setState({
                aboutShow: false,
                portfolioShow: false,
                experienceShow: false,
                body: true
            });
        }else{
            this.setState({
                aboutShow: false,
                portfolioShow: true,
                experienceShow: false,
                body: false
            });
        }
    }

    experienceHandler(){
        if(this.state.experienceShow){
            this.setState({
                aboutShow: false,
                portfolioShow: false,
                experienceShow: false,
                body: true
            });
        }else{
            this.setState({
                aboutShow: false,
                portfolioShow: false,
                experienceShow: true,
                body: true
            });
        }
    }

    close(){
        this.setState({
            aboutShow: false,
            portfolioShow: false,
            experienceShow: false,
            body: true
        });
    }

    render(){
        return(
            <Router key="root">
                <Switch>
                    <Route exact path="/" key="app">
                        <div className="App">
                            {this.state.aboutShow ? <AboutDropdown aboutHandler={this.aboutHandler} portfolioHandler={this.portfolioHandler} experienceHandler={this.experienceHandler} close={this.close} /> : null}
                            {this.state.portfolioShow ? <PortfolioDropdown aboutHandler={this.aboutHandler} portfolioHandler={this.portfolioHandler} experienceHandler={this.experienceHandler} close={this.close} projects={Projects}/> : null}
                            {this.state.experienceShow ? <ExperienceDropdown aboutHandler={this.aboutHandler} portfolioHandler={this.portfolioHandler} experienceHandler={this.experienceHandler} close={this.close} /> : null}
                            <Header color="white" aboutAction={this.aboutHandler} portfolioAction={this.portfolioHandler}
                                                  experienceAction={this.experienceHandler}/>
                            {this.state.body ? <Body projects={Projects} /> : null}
                        </div>
                    </Route>
                    {
                        Projects.map((project, index) => (
                            <Route exact path={"/project" + project.id} key={project.id}>
                                {this.state.aboutShow ? <AboutDropdown aboutHandler={this.aboutHandler} portfolioHandler={this.portfolioHandler} experienceHandler={this.experienceHandler} close={this.close} /> : null}
                                {this.state.portfolioShow ? <PortfolioDropdown aboutHandler={this.aboutHandler} portfolioHandler={this.portfolioHandler} experienceHandler={this.experienceHandler} close={this.close} projects={Projects}/> : null}
                                {this.state.experienceShow ? <ExperienceDropdown aboutHandler={this.aboutHandler} portfolioHandler={this.portfolioHandler} experienceHandler={this.experienceHandler} close={this.close} /> : null}
                                <Header color="home" aboutAction={this.aboutHandler} portfolioAction={this.portfolioHandler}
                                                      experienceAction={this.experienceHandler}/>
                                {this.state.body ? <Project title={project.title} medium={project.medium} description={project.description} year={project.year} size={project.size} images={project.images} /> : null}
                            </Route>
                        ))
                    }
                </Switch>
            </Router>
        );
    }
}

export default App;
