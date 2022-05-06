import { CARD_COMPANY } from 'constants';
import PropTypes from 'prop-types';

import Container from './styles';

const cardNumberFormatter = (cardNumber) => {
  const newCardNumber = [...cardNumber].map((unit) => (unit === '' ? '0000' : unit));
  const maskingIndexes = [2, 3];

  maskingIndexes.forEach((index) => {
    if (newCardNumber.length <= index) return;

    newCardNumber[index] = '⦁'.repeat(newCardNumber[index].length);
  });

  return newCardNumber.join('-');
};

function Card({ companyId, cardNumber, userName, expireMonth, expireYear, isComplete, onClick }) {
  const { name = '', color = 'gray', icon = '' } = CARD_COMPANY[companyId] || {};

  return (
    <Container color={color} isComplete={isComplete} onClick={onClick}>
      <div className="card">
        <div className="company-name">{name}</div>
        <div className="icon">{icon}</div>
        <div className="user-name">{userName}</div>

        <div className="expire-date">
          {expireMonth && expireYear && `${expireMonth} / ${expireYear}`}
        </div>
        <div className="card-number">{cardNumberFormatter(cardNumber)}</div>
      </div>
    </Container>
  );
}

Card.defaultProps = {
  companyId: '0',
  cardNumber: ['', '', '', ''],
  userName: '',
  expireMonth: '',
  expireYear: '',
  isComplete: false,
};

Card.propTypes = {
  companyId: PropTypes.string,
  cardNumber: PropTypes.arrayOf(PropTypes.string),
  userName: PropTypes.string,
  expireMonth: PropTypes.string,
  expireYear: PropTypes.string,
  isComplete: PropTypes.bool,
};

export default Card;
