import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import EmptyCard from 'components/Card/EmptyCard';

const CardContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 10px 0;
`;

type CardProps = {
  name: string;
  cardType: {
    name: string;
    color: string;
  };
  expiredMonth: string;
  expiredYear: string;
  cardNumbers: Array<string>;
  onClick: Function;
  size: string;
};

const Card = ({
  name,
  cardType,
  expiredMonth,
  expiredYear,
  cardNumbers,
  onClick,
  size,
}: CardProps) => {
  return (
    <CardContainer onClick={onClick}>
      <EmptyCard
        name={name}
        cardType={cardType}
        expiredMonth={expiredMonth}
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
