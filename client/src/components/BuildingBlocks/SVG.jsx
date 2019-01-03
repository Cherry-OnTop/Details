import React from 'react';

const ArrowButton = ({ left, right, handleArrowClick }) => {
  let direction = '';
  if (left !== undefined) direction = left;
  else direction = right;

  const rightArrow = 'M10 6l-1.41 1.41 4.58 4.59-4.58 4.59 1.41 1.41 6-6z';
  const leftArrow = 'M15.41 7.41l-1.41-1.41-6 6 6 6 1.41-1.41-4.58-4.59z';

  return (
    <button
      className={`carousel_button ${direction}`}
      onClick={() => handleArrowClick(direction)}
    >
      <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
        <g>
          <path d={direction === 'left' ? leftArrow : rightArrow} />
        </g>
      </svg>
    </button>
  );
};

export default ArrowButton;
