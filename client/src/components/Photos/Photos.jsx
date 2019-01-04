import React from 'react';
import { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import Header from '../BuildingBlocks/Header.jsx';
import ArrowButton from './ArrowButton.jsx';
import Dots from './Dots.jsx';
import Link from '../BuildingBlocks/Link.jsx';

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: props.movieData.Photos.Links,
      activePage: 0,
      elements: [],
      sliderDirection: 'right'
    };

    this.count = 0;
    this.handleDotClick = this.handleDotClick.bind(this);
    this.handleArrowClick = this.handleArrowClick.bind(this);
    this.setActiveDotClass = this.setActiveDotClass.bind(this);
  }

  createImageElements() {
    const elements = this.state.links.map((link, i) => {
      return (
        <div key={i} className="carousel_img">
          <img src={link} />
        </div>
      );
    });
    this.setState({
      elements: elements
    });
  }
  setImageElements() {
    let start = this.state.activePage * 4;
    console.log(this.state.activePage);
    let output = [];
    for (var i = start; i < start + 4; i++) {
      output.push(this.state.elements[i]);
    }
    return output;
  }
  setActiveDotClass(renderedDot) {
    if (this.state.activePage == renderedDot) {
      return 'active_dot';
    } else {
      return null;
    }
  }

  handleDotClick(clickedDot, isActive) {
    let direction;
    clickedDot < this.state.activePage
      ? (direction = 'left')
      : (direction = 'right');
    if (isActive !== 'active_dot') {
      this.setState({
        activePage: Number(clickedDot),
        sliderDirection: direction
      });
    }
  }
  handleArrowClick(direction) {
    const max = Math.floor(this.props.movieData.Photos.Links.length / 4);
    const min = 0;
    if (direction === 'left') {
      if (this.state.activePage === min) {
        this.setState({
          activePage: max,
          sliderDirection: direction
        });
      } else {
        this.setState({
          activePage: this.state.activePage - 1,
          sliderDirection: direction
        });
      }
    } else if (direction === 'right') {
      if (this.state.activePage === max) {
        this.setState({
          activePage: min,
          sliderDirection: direction
        });
      } else {
        this.setState({
          activePage: this.state.activePage + 1,
          sliderDirection: direction
        });
      }
    }
  }
  componentDidMount() {
    this.createImageElements();
  }
  render() {
    return (
      <section id="Photos">
        <div className="column">
          <div className="content_panel">
            <Header title={this.props.movieData.Title} section={'PHOTOS'} />
            <ul className="dots">
              <Dots
                links={this.state.links}
                handleDotClick={this.handleDotClick}
                setActiveDotClass={this.setActiveDotClass}
              />
            </ul>
            <div className="carousel">
              <ArrowButton
                left={'left'}
                handleArrowClick={this.handleArrowClick}
              />

              <div>
                <div className="carousel_list">
                  <CSSTransitionGroup
                    transitionName={`${this.state.sliderDirection}slider`}
                    transitionEnterTimeout={350}
                    transitionLeaveTimeout={350}
                  >
                    {this.setImageElements()}
                  </CSSTransitionGroup>
                </div>
              </div>

              <ArrowButton
                right={'right'}
                handleArrowClick={this.handleArrowClick}
              />
            </div>
            <Link count={10} section={'Photos'} />
          </div>
        </div>
      </section>
    );
  }
}

export default Photos;
