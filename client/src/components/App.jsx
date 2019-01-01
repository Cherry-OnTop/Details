import React from 'react';
import { Component } from 'react';
import axios from 'axios';

import Videos from './Videos.jsx';
import Photos from './Photos.jsx';
import MovieInfo from './MovieInfo.jsx';
import Times from './Times.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: {}
    };
    this.movieId = document.URL.slice(document.URL.indexOf('?') + 1);
  }
  getMovie(movieId) {
    axios
      .get(this.movieId)
      .then(({ data }) => {
        this.setState({
          movieData: data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentDidMount() {
    this.getMovie();
  }
  render() {
    if (this.state.movieData.Title !== undefined) {
      return (
        <>
          <Videos movieData={this.state.movieData} />
          <Photos movieData={this.state.movieData} />
          <MovieInfo movieData={this.state.movieData} />
          <Times movieData={this.state.movieData} />;
        </>
      );
    } else {
      return <div />;
    }
  }
}
export default App;
