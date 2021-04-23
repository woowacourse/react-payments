import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR } from '../constants/constants';

const CardWrapper = styled.div`
  width: 213px;
  height: 133px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 3px 3px 5px 0px #00000040;
  background-color: ${({ bgColor }) => bgColor || COLOR.CARD.DEFAULT};
`;

const Card = ({ add, cardInfos }) => {
  return (
    <CardWrapper>
      {add ? (
        <div>+</div>
      ) : (
        <>
          <div className='card__column'>{cardInfos.cardName}카드</div>
          <div className='card__column'></div>
          <div className='card__column'>{cardInfos.numbers}</div>
          <div className='card__column'>
            <div>{cardInfos.user}</div> <div>{cardInfos.expireDate}</div>
          </div>
        </>
      )}
    </CardWrapper>
  );
};

Card.propTypes = {
  add: PropTypes.bool,
  cardInfos: PropTypes.shape({
    cardName: PropTypes.string,
    numbers: PropTypes.string,
    user: PropTypes.string,
    expireDate: PropTypes.string,
  }),
};

export default Card;
