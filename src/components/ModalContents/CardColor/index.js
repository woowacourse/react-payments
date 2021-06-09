import React from 'react';
import PropTypes from 'prop-types';
import { CARD } from '../../../constants/style';
import CardColorItem from './CardColorItem';
import CardColorWrapper from './index.styles';

const CardColor = ({ handleCardColor, setIsModalOpen }) => {
  return (
    <CardColorWrapper>
      {Object.keys(CARD).map((key, index) => (
        <CardColorItem
          key={index}
          color={CARD[key]}
          name={key}
          handleCardColor={handleCardColor}
          setIsModalOpen={setIsModalOpen}
        />
      ))}
    </CardColorWrapper>
  );
};

CardColor.propTypes = {
  setIsModalOpen: PropTypes.func,
  handleCardColor: PropTypes.func,
};

export default CardColor;
