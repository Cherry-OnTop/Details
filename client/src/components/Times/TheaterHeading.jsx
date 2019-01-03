import React from 'react';

const TheaterHeading = ({ theater }) => {
  return (
    <div className="theater_heading">
      <div className="location">
        Showtimes for <strong>today</strong> near <strong>New York, NY</strong>{' '}
        <a className="change_location">Change Location</a>
      </div>
      <div className="address">
        <h2>
          {theater.toUpperCase()} | <a href="#">Map</a>
        </h2>
      </div>
    </div>
  );
};

export default TheaterHeading;
