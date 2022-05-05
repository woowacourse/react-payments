import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ColorType } from '../../constant';
import EmptyCard from './EmptyCard';

const CardContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 10px 0;
`;

const Card = ({ name, cardInfo, expiredMonth, expiredYear, cardNumbers, onClick, size }) => {
  return (
    <CardContainer onClick={onClick}>
      <EmptyCard
        name={name}
        cardInfo={cardInfo}
        expiredMoth={expiredMonth}
        expiredYear={expiredYear}
        cardNumbers={cardNumbers}
        size={size}
      />
    </CardContainer>
  );
};

Card.propTypes = {
  cardInfo: PropTypes.object,
  name: PropTypes.string,
  expiredMonth: PropTypes.string,
  expiredYear: PropTypes.string,
  cardNumbers: PropTypes.array,
  onClick: PropTypes.func,
  size: PropTypes.string,
};

export default Card;
