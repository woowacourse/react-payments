import React from 'react';
import PropTypes from 'prop-types';

const ColorSelectButton = (props) => {
  return (
    <li className="mt-4 list-none">
      <button className="flex flex-col justify-center items-center text-center h-16 w-16">
        <div className="w-10 h-10 rounded-full  justify-center"></div>
        <span className="mt-1 text-sm text-black-700">{props.cardName}</span>
      </button>
    </li>
  );
};

export default ColorSelectButton;

ColorSelectButton.propTypes = {
  color: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
};
