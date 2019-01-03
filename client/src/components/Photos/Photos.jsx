import React from 'react';
import { Component } from 'react';
import Header from '../BuildingBlocks/Header.jsx';
import Content from '../BuildingBlocks/Content.jsx';
import ArrowButton from './SVG.jsx';
import Link from '../BuildingBlocks/Link.jsx';

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: props.movieData.Photos.Links,
      activePage: 1,
      pages: []
    };
    this.count = 0;
    this.handleDotClick = this.handleDotClick.bind(this);
    this.handleArrowClick = this.handleArrowClick.bind(this);
  }
  renderDots() {
    let output = [];
    for (var i = 0; i < this.state.links.length / 4; i++) {
      output.push(
        <li key={i}>
          <button
            onClick={({ target }) =>
              this.handleDotClick(target.id, target.classList.value)
            }
            key={i}
            id={i + 1}
            className={this.setActiveDotClass(i)}
          />
        </li>
      );
    }
    return output;
  }
  renderPage() {
    let page = this.state.pages[this.state.activePage - 1];

    return page === undefined
      ? null
      : page.map((link, i) => {
          return (
            <div key={i} className="carousel_img">
              <img src={link} />
            </div>
          );
        });
  }
  setPages() {
    let photos = this.props.movieData.Photos.Links;
    let pageList = [];
    let page = [];
    for (var i = 0; i <= photos.length; i++) {
      if (page.length < 4) {
        page.push(photos[i]);
      } else {
        pageList.push(page);
        page = [];
        page.push(photos[i]);
      }
      if (i === photos.length) {
        pageList.push(page);
      }
    }
    this.setState({
      pages: pageList
    });
  }
  setActiveDotClass(renderedDot) {
    if (this.state.activePage == renderedDot + 1) {
      return 'active_dot';
    } else {
      return null;
    }
  }

  handleDotClick(clickedDot, isActive) {
    if (isActive !== 'active_dot') {
      this.setState({
        activePage: clickedDot
      });
    }
  }
  handleArrowClick(direction) {
    const max = Math.floor(this.props.movieData.Photos.Links.length / 4 + 1);
    const min = 1;
    if (direction === 'left') {
      if (this.state.activePage === min) {
        this.setState({
          activePage: max
        });
      } else {
        this.setState({
          activePage: this.state.activePage - 1
        });
      }
    } else if (direction === 'right') {
      if (this.state.activePage === max) {
        this.setState({
          activePage: min
        });
      } else {
        this.setState({
          activePage: this.state.activePage + 1
        });
      }
    }
  }
  componentDidMount() {
    this.setPages();
  }
  render() {
    return (
      <section id="Photos">
        <div className="column">
          <div className="content_panel">
            <Header title={this.props.movieData.Title} section={'PHOTOS'} />
            <ul className="dots">{this.renderDots()}</ul>
            <div className="carousel">
              <ArrowButton
                left={'left'}
                handleArrowClick={this.handleArrowClick}
              />
              <div className="carousel_list">{this.renderPage()}</div>
              <ArrowButton
                left={'right'}
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
