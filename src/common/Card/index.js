import React from 'react';
import PropTypes from 'prop-types';
import { CARD } from '../../constants/style';
import {
  CardWrapper,
  CardColumn,
  CardName,
  CardNumbers,
  CardDetails,
  CardUser,
  CardDate,
  USIM,
} from './index.styles';

const Card = ({ cardInfo, cardMode, setIsModalOpen, disableClick }) => {
  const { cardName, numbers, user, expireDate } = cardInfo;

  const pickColor = () => {
    if (disableClick) return;
    setIsModalOpen(true);
  };

  return (
    <CardWrapper
      onClick={pickColor}
      cardMode={cardMode}
      bgColor={CARD[cardName]}
    >
      {cardMode ? (
        <div className='cardMode'>+</div>
      ) : (
        <>
          <CardColumn>
            <CardName>
              {cardName !== 'DEFAULT' ? `${cardName} 카드` : '  '}
            </CardName>
          </CardColumn>
          <CardColumn>
            <USIM />
          </CardColumn>
          <CardColumn>
            <CardNumbers>
              {numbers.first} {numbers.second}{' '}
              {'•'.repeat(numbers.third.length)}{' '}
              {'•'.repeat(numbers.fourth.length)}
            </CardNumbers>
          </CardColumn>
          <CardColumn>
            <CardDetails>
              <CardUser>{user || 'NAME'}</CardUser>

              <CardDate>
                {expireDate.month || 'MM'}/{expireDate.year || 'YY'}
              </CardDate>
            </CardDetails>
          </CardColumn>
        </>
      )}
    </CardWrapper>
  );
};

Card.propTypes = {
  disableClick: PropTypes.bool,
  isModalOpen: PropTypes.bool,
  setIsModalOpen: PropTypes.func,
  cardMode: PropTypes.bool,
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
  cardMode: false,
  cardInfo: {
    cardName: 'NAME',
    numbers: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
    user: '',
    expireDate: {
      month: 'MM',
      year: 'YY',
    },
  },
};

export default Card;
