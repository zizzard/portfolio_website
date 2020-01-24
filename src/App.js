import React, {Component} from 'react';
import './App.css';

import Header from './components/Header/Header.js'
import AboutDropdown from './components/AboutDropdown/AboutDropdown.js'
import ExperienceDropdown from './components/ExperienceDropdown/ExperienceDropdown.js'
import PortfolioDropdown from './components/PortfolioDropdown/PortfolioDropdown.js'
import Body from './components/Body/Body.js'
import Project from './components/Project/Project.js'

import Projects from './files/projects.js'; //project page json file

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
    constructor(props){
        super(props);

        this.generateProjectPage = this.generateProjectPage.bind(this);
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

    generateProjectPage(id){
        var project = Projects[id]
        if(!project) return false;

        this.setState({
            project: <Project title={project.title} medium={project.medium} description={project.description} year={project.year} size={project.size} images={project.images} />,
            page: "project_1"
        });
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

        if(this.state.dev){
            this.generateProjectPage();
            return(
                <div className="App">
                    {page}
                </div>
            );
        }else{
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
                        <Route exact path="/project1">
                            {this.state.about}
                            {this.state.portfolio}
                            {this.state.experience}
                            <Header color="home" aboutAction={this.aboutHandler} portfolioAction={this.portfolioHandler}
                                                  experienceAction={this.experienceHandler}/>
                            {
                                <Project title={Projects[0].title} medium={Projects[0].medium} description={Projects[0].description} year={Projects[0].year} size={Projects[0].size} images={Projects[0].images} />
                            }
                        </Route>
                        <Route exact path="/project2">
                            {this.state.about}
                            {this.state.portfolio}
                            {this.state.experience}
                            <Header color="home" aboutAction={this.aboutHandler} portfolioAction={this.portfolioHandler}
                                                  experienceAction={this.experienceHandler}/>
                            {
                                <Project title={Projects[1].title} medium={Projects[1].medium} description={Projects[1].description} year={Projects[1].year} size={Projects[1].size} images={Projects[1].images} />
                            }
                        </Route>
                    </Switch>
                </Router>
            );
        }
    }
}

export default App;
