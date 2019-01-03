import React from 'react';

import Header from '../BuildingBlocks/Header.jsx';
import Link from '../BuildingBlocks/Link.jsx';
import VideoList from './VideoList.jsx';

const Videos = ({ movieData }) => {
  let count = 0;

  return (
    <section id="Videos">
      <div className="column">
        <div className="content_panel">
          <Header title={movieData.Title} section={'VIDEOS'} />
          <VideoList movieData={movieData} />
          <Link count={count} section={'Videos'} />
        </div>
      </div>
    </section>
  );
};

export default Videos;
