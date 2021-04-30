import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { CARD, COLOR, FONT_SIZE, FONT_WEIGHT } from '../constants/constant';

const AddCard = css`
  .add {
    font-size: ${FONT_SIZE.XXLARGE};
    color: ${COLOR.PLUS};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: ${FONT_WEIGHT.BOLD};
  }
`;

const CardInfo = css`
  .card__column {
    display: flex;
    padding: 0.1rem 0;

    &.card-name {
      margin-bottom: 1.5rem;
      min-height: 21px;
    }

    &.card-numbers {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 19px;
      font-size: ${FONT_SIZE.NORMAL};
      font-weight: ${FONT_WEIGHT.BOLD};
      letter-spacing: 2px;
    }

    &.card-details {
      display: flex;
      min-height: 19px;
      justify-content: space-between;
      align-items: center;
      font-size: ${FONT_SIZE.NORMAL};
      font-weight: ${FONT_WEIGHT.BOLD};
      letter-spacing: 1.5px;

      .card-user {
        max-width: 10rem;
        max-height: 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .usim {
      width: 4rem;
      height: 2.5rem;
      border-radius: 4px;
      background-color: #cbba64;
    }
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.2rem 1.5rem;
  border-radius: 5px;
  box-shadow: 3px 3px 5px 0px #00000040;
  font-size: ${FONT_SIZE.LARGE};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  background-color: ${({ bgColor }) =>
    bgColor !== undefined ? bgColor : COLOR.CARD.DEFAULT};

  ${({ add }) => (add ? AddCard : CardInfo)}
`;

const Card = ({ add, cardInfo, handleModalOpen }) => {
  const { cardName, numbers, user, expireDate } = cardInfo;

  return (
    <CardWrapper
      add={add}
      bgColor={CARD[cardName]}
      onClick={() => handleModalOpen('cardColor')}
    >
      {add ? (
        <div className='add'>+</div>
      ) : (
        <>
          <div className='card__column card-name'>
            {cardName !== '' && `${cardName} 카드`}
          </div>
          <div className='card__column'>
            <div className='usim'></div>
          </div>
          <div className='card__column card-numbers'>
            {numbers.first} {numbers.second} {'•'.repeat(numbers.third.length)}{' '}
            {'•'.repeat(numbers.fourth.length)}
          </div>
          <div className='card__column card-details'>
            <div className='card-user'>{user !== '' ? user : 'NAME'}</div>
            <div className='card-date'>
              {expireDate.month || 'MM'}
              {'/'}
              {expireDate.year || 'YY'}
            </div>
          </div>
        </>
      )}
    </CardWrapper>
  );
};

Card.propTypes = {
  handleModalOpen: PropTypes.func,
  add: PropTypes.bool,
  cardInfo: PropTypes.shape({
    cardColor: PropTypes.string,
    cardName: PropTypes.string,
    numbers: PropTypes.shape({
      first: PropTypes.string,
      second: PropTypes.string,
      third: PropTypes.string,
      fourth: PropTypes.string,
    }),
    user: PropTypes.string,
    expireDate: PropTypes.shape({
      month: PropTypes.string,
      year: PropTypes.string,
    }),
  }),
};

Card.defaultProps = {
  add: false,
  cardInfo: {
    cardName: '',
    numbers: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
    user: 'NAME',
    expireDate: {
      month: '',
      year: '',
    },
  },
};

export default Card;
