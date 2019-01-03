import React from 'react';

const TimePanel = ({ type, times }) => {
  return (
    <>
      <div className="showing_type">{type}</div>
      <div className="Times">
        {times.map((time, i) => {
          return (
            <a key={i} className="time_button">
              {time}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default TimePanel;
