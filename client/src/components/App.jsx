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
      'ec2-18-218-43-35.us-east-2.compute.amazonaws.com/movie/';
    // process.env.NODE_ENV === 'production'
    //   ? process.env.API_URL
    //   : 'http://localhost:9002/movie/';
    this.movieId = document.URL.split('/')[4];
  }
  getMovie() {
    console.log('api url', this.API_URL);
    console.log('movieId', this.movieId);
    axios
      .get(`/movie/${this.movieId}`)
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
