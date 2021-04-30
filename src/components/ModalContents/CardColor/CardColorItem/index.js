import React from 'react';
import PropTypes from 'prop-types';
import { CardColorItemWrapper } from './index.styles';

const CardColorItem = ({ name, color, handleCardColor }) => {
  return (
    <CardColorItemWrapper color={color} onClick={() => handleCardColor(name)}>
      <div className='card-color'></div>
      <div className='card-name'>{name} 카드</div>
    </CardColorItemWrapper>
  );
};

CardColorItem.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  handleCardColor: PropTypes.func,
};

export default CardColorItem;
