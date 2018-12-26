import React from 'react';
const Header = ({ title, section }) => {
  return (
    <h2 className="panel-heading">
      <em>{title.toUpperCase()}</em>
      {` ${section}`}
    </h2>
  );
};
export default Header;
