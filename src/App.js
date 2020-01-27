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
        this.setAboutShowState = this.setAboutShowState.bind(this);
        this.setPortfolioShowState = this.setPortfolioShowState.bind(this);
        this.setExperienceShowState = this.setExperienceShowState.bind(this);
        this.close = this.close.bind(this);

        this.state = {
            aboutShow: false,
            portfolioShow: false,
            experienceShow: false,
            page: "body",
            dev: false
        };
    }

    aboutHandler(){
        console.log("ABOUT");
        if(this.state.aboutShow){
            this.setState({
                aboutShow: false,
                portfolioShow: false,
                experienceShow: false
            });
            this.setAboutShowState(false);
            this.setPortfolioShowState(false);
            this.setExperienceShowState(false);
        }else{
            this.setState({
                aboutShow: true,
                portfolioShow: false,
                experienceShow: false
            });
            this.setAboutShowState(true);
            this.setPortfolioShowState(false);
            this.setExperienceShowState(false);
        }
    }

    portfolioHandler(){
        if(this.state.portfolioShow){
            this.setState({
                aboutShow: false,
                portfolioShow: false,
                experienceShow: false
            });
            this.setAboutShowState(false);
            this.setPortfolioShowState(false);
            this.setExperienceShowState(false);
        }else{
            this.setState({
                aboutShow: false,
                portfolioShow: true,
                experienceShow: false
            });
            this.setAboutShowState(false);
            this.setPortfolioShowState(true);
            this.setExperienceShowState(false);
        }
    }

    experienceHandler(){
        if(this.state.experienceShow){
            this.setState({
                aboutShow: false,
                portfolioShow: false,
                experienceShow: false
            });
            this.setAboutShowState(false);
            this.setPortfolioShowState(false);
            this.setExperienceShowState(false);
        }else{
            this.setState({
                aboutShow: false,
                portfolioShow: false,
                experienceShow: true
            });
            this.setAboutShowState(false);
            this.setPortfolioShowState(false);
            this.setExperienceShowState(true);
        }
    }

    setAboutShowState(t){
        if(t) this.setState({about: <AboutDropdown aboutHandler={this.aboutHandler} portfolioHandler={this.portfolioHandler} experienceHandler={this.experienceHandler} close={this.close} />})
        else this.setState({about: false })
    }

    setPortfolioShowState(t){
        if(t){
            this.setState({
                portfolio: <PortfolioDropdown aboutHandler={this.aboutHandler} portfolioHandler={this.portfolioHandler} experienceHandler={this.experienceHandler} close={this.close} projects={Projects}/>,
                page: "portfolio"
            });
        }else{
            this.setState({
                portfolio: false,
                page: "body"
            })
        }
    }

    setExperienceShowState(t){
        if(t) this.setState({experience: <ExperienceDropdown aboutHandler={this.aboutHandler} portfolioHandler={this.portfolioHandler} experienceHandler={this.experienceHandler} close={this.close} /> })
        else this.setState({experience: false })
    }

    close(){
        this.setState({
            aboutShow: false,
            portfolioShow: false,
            experienceShow: false
        });
        this.setAboutShowState(false);
        this.setPortfolioShowState(false);
        this.setExperienceShowState(false);
    }

    render(){
        let page
        if(this.state.page === "body"){
            page = <Body projects={Projects} />
        }else{
            page = false
        }

        return(
            <Router>
                <Switch>
                    <Route exact path="/">
                        <div className="App">
                            {this.state.about}
                            {this.state.portfolio}
                            {this.state.experience}
                            <Header color="white" aboutAction={this.aboutHandler} portfolioAction={this.portfolioHandler}
                                                  experienceAction={this.experienceHandler}/>
                            {page}
                        </div>
                    </Route>
                    {
                        Projects.map((project, index) => (
                            <Route exact path={"/project" + project.id} >
                                {this.state.about}
                                {this.state.portfolio}
                                {this.state.experience}
                                <Header color="home" aboutAction={this.aboutHandler} portfolioAction={this.portfolioHandler}
                                                      experienceAction={this.experienceHandler}/>
                                    <Project title={project.title} medium={project.medium} description={project.description} year={project.year} size={project.size} images={project.images} />
                            </Route>
                        ))
                    }
                </Switch>
            </Router>
        );
    }
}

export default App;
