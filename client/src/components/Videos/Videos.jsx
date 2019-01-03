import React from 'react';

import Header from '../BuildingBlocks/Header.jsx';
import Link from '../BuildingBlocks/Link.jsx';
import VideoList from './VideoList.jsx';

const Videos = ({ movieData }) => {
  const { Title, Trailer } = movieData;
  return (
    <section id="Videos">
      <div className="column">
        <div className="content_panel">
          <Header title={Title} section={'VIDEOS'} />
          <VideoList trailers={Trailer} title={Title} />
          <Link count={Trailer.Links.length} section={'Videos'} />
        </div>
      </div>
    </section>
  );
};

export default Videos;
