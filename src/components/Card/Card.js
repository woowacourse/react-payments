import React from 'react';
// import PropTypes from 'prop-types';

const Card = (props) => {
  const { size = 'middle', name, expiration, bank, cardNumbers } = props;

  const sizeTable = {
    small: 'w-208 h-130',
    middle: 'w-213 h-133',
    large: 'w-293 h-183',
  };

  const heightTable = {
    small: 'h-5',
    middle: 'h-5',
    large: 'h-10',
  };

  return (
    <div className={`${sizeTable[size]} px-4 py-2 rounded bg-gray-350 shadow-lg font-mono tracking-wide`}>
      <span className={`${size === 'large' ? 'text-sm' : 'text-xxs'} inline-block text-black-500`}>{bank}</span>
      <div className={`w-1/5 h-1/5 ${size === 'large' ? 'mt-8' : 'mt-4'} rounded-md bg-yellow-450`}></div>
      <ul className={`flex mt-3  justify-between ${heightTable[size]} items-center mx-1`}>
        {cardNumbers.map((cardNumber) => (
          <li className={`${size === 'large' ? 'text-lg' : 'text-sm'} text-black-700`}>
            <span>{cardNumber.join('')}</span>
          </li>
        ))}
      </ul>
      <div className={`flex justify-between ${size === 'large' ? 'text-base' : 'text-xs'} text-black-700 mt-1 mx-0.5`}>
        <div>{name}</div>
        <div>{expiration}</div>
      </div>
    </div>
  );
};

export default Card;
