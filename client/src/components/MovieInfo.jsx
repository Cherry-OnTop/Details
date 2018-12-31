import React from 'react';
import Header from './BuildingBlocks/Header.jsx';

const MovieInfo = ({ movieData }) => {
  const info = movieData.Info;

  return (
    <section id="MovieInfo">
      <div className="column">
        <div className="content_panel">
          <Header title={''} section={'MOVIE INFO'} />

          <div id="movie_description">{info.Description.repeat(6)}</div>
          <ul className="information">
            <li className="information_row">
              <div className="label">Rating:</div>
              <div className="value">{info.Rating}</div>
            </li>
            <li className="information_row">
              <div className="label">Genre:</div>
              <div className="value">
                <a>{info.Genre}</a>
              </div>
            </li>
            <li className="information_row">
              <div className="label">Directed By:</div>
              <div className="value">
                <a>{info.DirectedBy}</a>
              </div>
            </li>
            <li className="information_row">
              <div className="label">Written By:</div>
              <div className="value">
                <a>{info.WrittenBy}</a>
              </div>
            </li>
            <li className="information_row">
              <div className="label">In Theaters:</div>
              <div className="value">{info.ReleaseDate}</div>
            </li>
            <li className="information_row">
              <div className="label">Runtime:</div>
              <div className="value">{info.Runtime}</div>
            </li>
            <li className="information_row">
              <div className="label">Studio:</div>
              <div className="value">
                <a>{info.Studio}</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MovieInfo;
