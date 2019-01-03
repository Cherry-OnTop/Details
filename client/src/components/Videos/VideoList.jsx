import React from 'react';

const VideoList = ({ trailers, title }) => {
  return (
    <div className="video_list">
      {trailers.Links.map((video, i) => {
        return (
          <div key={i} className="video_container">
            <iframe src={video} />
            <div className="video_description">{`${title} Trailer ${i +
              1}`}</div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoList;
