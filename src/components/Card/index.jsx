import PropTypes from 'prop-types';

const formatCardNumber = (cardNumber) => {
  const newCardNumber = [...cardNumber].map((unit) => (unit === '' ? '0000' : unit));
  const maskingIndexes = [2, 3];

  maskingIndexes.forEach((index) => {
    if (newCardNumber.length <= index) return;

    newCardNumber[index] = '⦁'.repeat(newCardNumber[index].length);
  });

  return newCardNumber.join('-');
};

function Card({ size, companyName, cardNumber, userName, expireMonth, expireYear, cardNickname }) {
  const cardTextStyle = size === 'small' ? 'card-text' : 'card-text__big';

  return (
    <div className="card-box">
      <div className={`${size}-card`}>
        <div className="card-top">
          <span className={cardTextStyle}>{companyName}</span>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className={cardTextStyle}>{formatCardNumber(cardNumber)}</span>
          </div>
          <div className="card-bottom__info">
            <span className={`${cardTextStyle} user-name`}>{userName}</span>
            <span className={`${cardTextStyle} expire-date`}>
              {expireMonth && expireYear && `${expireMonth} / ${expireYear}`}
            </span>
          </div>
        </div>
      </div>
      <span className="card-nickname">{cardNickname}</span>
    </div>
  );
}

Card.defaultProps = {
  size: 'small',
  companyName: '티거 카드 🐯',
  cardNumber: ['', '', '', ''],
  userName: '',
  expireMonth: '',
  expireYear: '',
  cardNickname: '',
};

Card.propTypes = {
  size: PropTypes.string,
  companyName: PropTypes.string,
  cardNumber: PropTypes.arrayOf(PropTypes.string),
  userName: PropTypes.string,
  expireMonth: PropTypes.string,
  expireYear: PropTypes.string,
  cardNickname: PropTypes.string,
};

export default Card;
