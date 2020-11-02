import React, { Component } from "react";
import "./About.css";
import "../../App.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      WindowSize: window.innerWidth,
    };
  }

  handleResize(WindowSize, event) {
    this.setState({
      WindowSize: window.innerWidth,
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  render() {
    let inputStyle = {
      color: this.props.color,
    };

    return (
      <div className="about-container" style={inputStyle}>
        <div className="about-title">ABOUT</div>
        <div className="about-body">
          Before anything else, I want to thank you for visiting my website. It
          means the world to me. For as long as I forsee, I hope to use this
          website to catalog my art and my life, constantly evolving with my
          hopes and dreams at the time. In 2017, I enrolled at the University of
          Southern California to studying Computer Science. At the same time, I
          discovered the importance that art and music held to me; I quickly
          realized that a purely Computer Science education was not enough. By
          my junior year I added a minor in Communication Design and my focus
          completely shifted.
          <br />
          <br />
          And as I grow as an artist this website will constantly adapt. This is
          just a small bit, so I hope you like what I have in store. I promise
          it is special :)
        </div>
      </div>
    );
  }
}

export default About;

// As I dive head first into the art world I realize how much there is to discover. Yet, it is immediately clear what is important to me within
// art, and the art I create. First and foremost, I see art as the creative endeavour to translate emotions, and great art allows individuals to
// experience these emotions and connect with the artist. This is the reason I see myself as an artist, that is the desire to connect with other
// human beings. Hand in hand with that, is the idea that art is a collaborative process. I see this in two different ways. First, art should be
// created with directly others, as the meshing of minds and perspectives allows for greatness. Second, art should be inspired collaborativily.
// Virgil Abloh, my greatest inspiration, argued that you might be able to create a new design by changing a previous one by three per-cent. These
// two simple ideas will serve to guide me as I grow as an artist over my lifetime.
// <br/><br/>
