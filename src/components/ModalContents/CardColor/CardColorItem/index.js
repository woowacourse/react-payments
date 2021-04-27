import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, FONT_SIZE } from '../../../../constants/constants';

const CardColorItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .card-color {
    margin: 0 auto 0.5rem auto;
    border-radius: 50%;
    width: 2.8rem;
    height: 2.8rem;
    background-color: ${({ color }) => color || COLOR.CARD.DEFAULT};
  }

  .card-name {
    font-size: ${FONT_SIZE.SMALL};
    letter-spacing: -0.085rem;
  }
`;

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
