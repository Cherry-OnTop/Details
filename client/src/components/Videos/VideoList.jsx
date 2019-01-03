import React from 'react';

const VideoList = ({ movieData }) => {
  return (
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
  );
};

export default VideoList;
