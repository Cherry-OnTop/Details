import React from 'react';
import Header from './BuildingBlocks/Header.jsx';
import Link from './BuildingBlocks/Link.jsx';

const Times = ({ movieData }) => {
  return (
    <section id="Videos">
      <div className="column">
        <Header title={''} section={'TICKETS & SHOWTIMES'} />
        <div className="content_panel">
          <div className="theater_heading">
            <div className="location">
              Showtimes for <strong>today</strong> near{' '}
              <strong>New York, NY</strong>{' '}
              <a className="change_location">Change Location</a>
            </div>
            <div className="address">
              <h2>
                {movieData.Theater.toUpperCase()} | <a href="#">Map</a>
              </h2>
            </div>
          </div>
          <div className="showtimes">
            <div className="showing_type">STANDARD SHOWTIMES</div>
            <div className="Times">
              {movieData.Showtimes.Standard.map((time, i) => {
                return (
                  <a key={i} className="time_button">
                    {time}
                  </a>
                );
              })}
            </div>
            <div className="showing_type">IMAX SHOWTIMES</div>
            <div className="Times">
              {movieData.Showtimes.Imax.map((time, i) => {
                return (
                  <a key={i} className="time_button">
                    {time}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <Link count={0} section={'Theaters & Showtimes'} />
      </div>
    </section>
  );
};
export default Times;
