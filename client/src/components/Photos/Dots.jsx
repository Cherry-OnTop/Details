import React from 'react';

const Dots = ({ links, handleDotClick, setActiveDotClass }) => {
  let output = [];
  for (var i = 0; i < links.length / 4; i++) {
    output.push(
      <li key={i}>
        <button
          onClick={({ target }) =>
            handleDotClick(target.id, target.classList.value)
          }
          key={i}
          id={i}
          className={setActiveDotClass(i)}
        />
      </li>
    );
  }

  return <ul className="dots">{output}</ul>;
};

export default Dots;
