import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CARD } from '../../../constants/constant';
import CardColorItem from './CardColorItem';

const CardColorWrapper = styled.div`
  display: grid;
  width: 90%;
  height: 95%;
  text-align: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin: 0 auto;
  cursor: pointer;
`;

// TODO : style 분리

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
