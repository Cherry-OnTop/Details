import React from 'react';

const TableRow = ({ label, value, isLink }) => {
  if (isLink) {
    return (
      <li className="information_row">
        <div className="label">{label}</div>
        <div className="value">
          <a>{value}</a>
        </div>
      </li>
    );
  } else {
    return (
      <li className="information_row">
        <div className="label">{label}</div>
        <div className="value">{value}</div>
      </li>
    );
  }
};

export default TableRow;
