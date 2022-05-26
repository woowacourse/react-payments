import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AddCardContext from '../../AddCardContext';
import { CardType, CardTypeWithNick, AddCardContextInterface } from '../../types/CardType';

interface CardProps {
  completedCard: CardTypeWithNick;
  big: boolean;
}

function Card({ completedCard, big }: CardProps): JSX.Element {
  const card: CardType | CardTypeWithNick =
    completedCard || useContext<AddCardContextInterface>(AddCardContext).card;

  const isEmptyCard = (): boolean => Object.values(card).every((value) => value === '');

  const getCardWrapperClassName = (): string => {
    if (big) return 'big-card';
    return isEmptyCard() ? 'empty-card' : 'small-card';
  };

  return (
    <div className="card-box">
      <div className={getCardWrapperClassName()}>
        <div className="card-top">
          <span className={big ? 'card-text__big' : 'card-text'}>안카드</span>
        </div>
        <div className="card-middle">
          <div className={big ? 'big-card__chip' : 'small-card__chip'} />
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span
              className={big ? 'card-text__big' : 'card-text'}
            >{`${card.firstCardNumber} ${card.secondCardNumber}`}</span>
            <input
              className="card-text-dot"
              type="password"
              value={card.thirdCardNumber}
              disabled
            />
            <input
              className="card-text-dot"
              type="password"
              value={card.fourthCardNumber}
              disabled
            />
          </div>
        </div>
        <div className="card-bottom__info">
          <span className={big ? 'card-text__big name-wrap' : 'card-text name-wrap'}>
            {card.ownerName || 'NAME'}
          </span>
          <span className={big ? 'card-text__big' : 'card-text'}>{`${card.expireMonth || 'MM'}/${
            card.expireYear || 'YY'
          }`}</span>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  completedCard: PropTypes.shape({
    firstCardNumber: PropTypes.string,
    secondCardNumber: PropTypes.string,
    thirdCardNumber: PropTypes.string,
    fourthCardNumber: PropTypes.string,
    expireMonth: PropTypes.string,
    expireYear: PropTypes.string,
    ownerName: PropTypes.string,
    securityCode: PropTypes.string,
    firstPassword: PropTypes.string,
    secondPassword: PropTypes.string,
  }),
  big: PropTypes.bool,
};

Card.defaultProps = {
  completedCard: null,
  big: false,
};

export default Card;
