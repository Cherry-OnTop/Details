import React from 'react';
import Header from './BuildingBlocks/Header.jsx';
import Content from './BuildingBlocks/Content.jsx';
import Link from './BuildingBlocks/Link.jsx';

const Photos = ({ movieData }) => {
  const ulStyle = {
    display: 'block',
    position: 'absolute',
    right: '0',
    listStyle: 'none',
    display: 'block',
    textAlign: 'right',
    padding: '0',
    width: '100%',
    top: '-26px',
    bottom: 'auto',
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    paddingInlineStart: '40px'
  };
  const pageDots = () => {
    var outputJsx = [];
    for (var i = 0; i < movieData.Photos.Links.length / 4; i++) {
      outputJsx.push(
        <div className="page-dots">
          <ul style={ulStyle} />
        </div>
      );
    }
    return outputJsx;
  };
  const createContent = () => {
    return movieData.Photos.Links.map((link) => {
      count++;
      return;
    });
  };

  let count = 0;
  return (
    <>
      <Header title={movieData.Title} section={'PHOTOS'} />
      {pageDots()}
      <Content content={createContent()} />
      <Link count={count} section={'Photos'} />
    </>
  );
};

export default Photos;
