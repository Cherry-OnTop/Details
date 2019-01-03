import React from 'react';

import Header from '../BuildingBlocks/Header.jsx';
import TableRow from './TableRow.jsx';

const MovieInfo = ({ movieData }) => {
  const {
    Description,
    Rating,
    Genre,
    DirectedBy,
    WrittenBy,
    ReleaseDate,
    Runtime,
    Studio
  } = movieData.Info;

  return (
    <section id="MovieInfo">
      <div className="column">
        <div className="content_panel">
          <Header title={''} section={'MOVIE INFO'} />
          <div id="movie_description">{Description.repeat(6)}</div>
          <ul className="information">
            <TableRow isLink={false} label={'Rating:'} value={Rating} />
            <TableRow isLink={true} label={'Genre:'} value={Genre} />
            <TableRow isLink={true} label={'Directed By:'} value={DirectedBy} />
            <TableRow isLink={true} label={'Written By:'} value={WrittenBy} />
            <TableRow isLink={false} label={'Released'} value={ReleaseDate} />
            <TableRow isLink={false} label={'Runtime:'} value={Runtime} />
            <TableRow isLink={true} label={'Studio'} value={Studio} />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MovieInfo;
