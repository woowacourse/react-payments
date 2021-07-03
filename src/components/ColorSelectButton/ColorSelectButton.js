import React from 'react';
import PropTypes from 'prop-types';

const ColorSelectButton = (props) => {
  const { company, onClick } = props;

  return (
    <li className="mt-4 list-none" onClick={onClick} data-company={company}>
      <button className="flex flex-col justify-center items-center text-center h-16 w-16">
        <div className={`w-10 h-10 rounded-full justify-center bg-${company}`}></div>
        <span className="mt-1 text-xs text-black-700">{`${company} 카드`}</span>
      </button>
    </li>
  );
};

export default ColorSelectButton;

ColorSelectButton.propTypes = {
  company: PropTypes.string.isRequired,
};
