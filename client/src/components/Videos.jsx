import React from 'react';
import Header from './BuildingBlocks/Header.jsx';
import Content from './BuildingBlocks/Content.jsx';
import Link from './BuildingBlocks/Link.jsx';

const Videos = ({ movieData }) => {
  console.log(movieData);
  let count = 0;

  return (
    <section id="Videos">
      <div className="column">
        <div className="content_panel">
          <Header title={movieData.Title} section={'VIDEOS'} />
          {movieData.Trailer.Links.map((video, i) => {
            count++;
            return (
              <div className="video_container">
                <iframe src={video} />
                <div>{`${movieData.Title} Trailer ${i + 1}`}</div>
              </div>
            );
          })}
          <Link count={count} section={'Videos'} />
        </div>
      </div>
    </section>
  );
};

export default Videos;
