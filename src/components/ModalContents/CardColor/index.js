import React from 'react';
import PropTypes from 'prop-types';
import { CardColorWrapper } from './index.styles';
import { CARD } from '../../../constants/constant';
import CardColorItem from './CardColorItem';

const CardColor = ({ onClickCardColor }) => {
  return (
    <CardColorWrapper>
      {Object.keys(CARD).map((key, index) => (
        <CardColorItem
          key={index}
          color={CARD[key]}
          name={key}
          onClickCardColor={onClickCardColor}
        />
      ))}
    </CardColorWrapper>
  );
};

CardColor.propTypes = {
  onClickCardColor: PropTypes.func,
};

export default CardColor;
