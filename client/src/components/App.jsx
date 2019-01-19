import React from 'react';
import { Component } from 'react';
import axios from 'axios';

import Videos from './Videos/Videos.jsx';
import Photos from './Photos/Photos.jsx';
import Description from './Description/Description.jsx';
import Times from './Times/Times.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: {}
    };
    this.API_URL =
      'http://18.217.66.137/movie/';
    // process.env.NODE_ENV === 'production'
    //   ? process.env.API_URL
    //   : 'http://localhost:9002/movie/';

    this.movieId = window.location.search.split('?')[1]
    // this.movieId = document.URL.substr(-3);
    // this.movieId = document.URL.split('/')[3];
  }
  getMovie() {
    console.log('window location', window.location.search)
    // console.log('api url', this.API_URL);
    // console.log('movieId', this.movieId);
    console.log('documentURL', document.URL)
    console.log('window location', this.movieId)

    // .get(`/movie/${this.movieId}`)
    axios
      .get(this.API_URL + this.movieId)
      .then(({ data }) => {
        console.log('this is the data from getMovie', data)
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
          <Description movieData={this.state.movieData} />
          <Times movieData={this.state.movieData} />
        </>
      );
    } else {
      return <div>Hello</div>;
    }
  }
}
export default App;
