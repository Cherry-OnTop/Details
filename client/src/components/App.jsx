import React from 'react';
import { Component } from 'react';
import axios from 'axios';

import Header from './Header.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: {}
    };
  }
  getMovie(movieId) {
    axios
      .get(`/movie/101`)
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
    return <Header title={this.state.movieData.Title} />;
  }
}
export default App;
