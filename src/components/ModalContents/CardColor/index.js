import React from 'react';
import PropTypes from 'prop-types';
import { CardColorWrapper } from './index.styles';
import { CARD } from '../../../constants/constant';
import CardColorItem from './CardColorItem';

const CardColor = ({ handleCardColor }) => {
  return (
    <CardColorWrapper>
      {Object.keys(CARD).map((key, index) => (
        <CardColorItem
          key={index}
          color={CARD[key]}
          name={key}
          handleCardColor={handleCardColor}
        />
      ))}
    </CardColorWrapper>
  );
};

CardColor.propTypes = {
  handleCardColor: PropTypes.func,
};

export default CardColor;
