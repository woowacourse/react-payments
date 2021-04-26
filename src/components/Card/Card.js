import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const { size = 'middle', name = 'NAME', expiration, cardCompany, cardNumbers } = props;

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

  const changeSecurityCode = (numbers) => {
    return '*'.repeat(numbers.length);
  };

  return (
    <div
      className={`${sizeTable[size]} px-4 py-2 rounded-xl bg-gray-350 ${cardCompany.color} shadow-lg font-mono tracking-wide`}
    >
      <span className={`${size === 'large' ? 'text-sm' : 'text-xxs'} inline-block text-black-500`}>
        {cardCompany.name}
      </span>
      <div className={`w-1/5 h-1/5 ${size === 'large' ? 'mt-8' : 'mt-4'} rounded-md bg-yellow-450`}></div>
      <ul className={`flex mt-3 text-sm ${heightTable[size]} items-center mx-1`}>
        {Array.from({ length: 4 }).map((_, index) => {
          const currentKey = Object.keys(cardNumbers)[index];
          return (
            <li
              key={`cardNumber-${currentKey}`}
              className={`${size === 'large' ? 'text-lg mr-9' : 'text-sm mr-3'} text-black-700 w-8`}
            >
              <div>{index > 1 ? changeSecurityCode(cardNumbers[currentKey]) : cardNumbers[currentKey]}</div>
            </li>
          );
        })}
      </ul>
      <div className={`flex justify-between ${size === 'large' ? 'text-base' : 'text-xs'} text-black-700 mt-1 mx-0.5`}>
        <div>{name}</div>
        <div>{expiration}</div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  size: PropTypes.string,
  name: PropTypes.string,
  expiration: PropTypes.string,
  cardCompany: PropTypes.object,
  cardNumbers: PropTypes.object,
};
