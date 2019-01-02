import React from 'react';
import Header from './BuildingBlocks/Header.jsx';
import Content from './BuildingBlocks/Content.jsx';
import Link from './BuildingBlocks/Link.jsx';

const Videos = ({ movieData }) => {
  let count = 0;

  return (
    <section id="Videos">
      <div className="column">
        <div className="content_panel">
          <Header title={movieData.Title} section={'VIDEOS'} />
          <div className="video_list">
            {movieData.Trailer.Links.map((video, i) => {
              count++;
              return (
                <div key={i} className="video_container">
                  <iframe src={video} />
                  <div className="video_description">{`${
                    movieData.Title
                  } Trailer ${i + 1}`}</div>
                </div>
              );
            })}
          </div>
          <Link count={count} section={'Videos'} />
        </div>
      </div>
    </section>
  );
};

export default Videos;
