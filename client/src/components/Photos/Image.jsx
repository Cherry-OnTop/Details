import React from 'react';

const Image = ({ link }) => {
  return (
    <div className="carousel_img">
      <img src={link} />
    </div>
  );
};

export default Image;
