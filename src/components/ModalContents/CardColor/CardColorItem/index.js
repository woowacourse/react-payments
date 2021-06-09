import React from 'react';
import PropTypes from 'prop-types';
import { CardColorItemWrapper, CardColor, CardName } from './index.styles';

const CardColorItem = ({ name, color, handleCardColor, setIsModalOpen }) => {
  const pickColor = () => {
    handleCardColor(name);
    setIsModalOpen(false);
  };

  return (
    <CardColorItemWrapper onClick={pickColor}>
      <CardColor color={color} />
      <CardName>{name} 카드</CardName>
    </CardColorItemWrapper>
  );
};

CardColorItem.propTypes = {
  setIsModalOpen: PropTypes.func,
  name: PropTypes.string,
  color: PropTypes.string,
  handleCardColor: PropTypes.func,
};

export default CardColorItem;
