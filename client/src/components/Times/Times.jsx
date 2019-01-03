import React from 'react';

import Header from '../BuildingBlocks/Header.jsx';
import Link from '../BuildingBlocks/Link.jsx';
import TheaterHeading from './TheaterHeading.jsx';
import TimePanel from './TimePanel.jsx';

const Times = ({ movieData }) => {
  const { Theater, Showtimes } = movieData;
  return (
    <section id="Videos">
      <div className="column">
        <Header title={''} section={'TICKETS & SHOWTIMES'} />
        <div className="content_panel">
          <TheaterHeading theater={Theater} />
          <div className="showtimes">
            <TimePanel type={'STANDARD SHOWTIMES'} times={Showtimes.Standard} />
            <TimePanel type={'IMAX SHOWTIMES'} times={Showtimes.Imax} />
          </div>
        </div>
        <Link count={0} section={'Theaters & Showtimes'} />
      </div>
    </section>
  );
};
export default Times;
