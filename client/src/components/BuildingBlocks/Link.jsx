import React from 'react';

const Link = ({ count, section }) => {
  const linkStyle = {
    color: 'rgb(57, 118, 220)',
    float: 'right !important',
    textDecoration: 'none',
    textAlign: 'right',
    fontSize: '16px',
    lineHeight: '1.25'
  };
  const linkContainerStyle = {
    margin: '0px',
    cursor: 'pointer',
    textAlign: 'right',
    paddingTop: '10px',
    paddingBottom: '10px',
    display: 'block'
  };
  return (
    <div style={linkContainerStyle}>
      <a style={linkStyle} href="#">{`View All ${section} (${count})`}</a>
    </div>
  );
};

export default Link;
