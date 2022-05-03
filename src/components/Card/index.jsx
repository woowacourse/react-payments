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

function Card({ companyName, cardNumber, userName, expireMonth, expireYear, isComplete }) {
  return (
    <div className="card-box">
      <div className={`small-card${isComplete ? '' : ' empty'}`}>
        <div className="card-top">
          <span className="card-text">{companyName}</span>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{formatCardNumber(cardNumber)}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text user-name">{userName}</span>
            <span className="card-text expire-date">
              {expireMonth && expireYear && `${expireMonth} / ${expireYear}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.defaultProps = {
  companyName: '',
  cardNumber: ['', '', '', ''],
  userName: '',
  expireMonth: '',
  expireYear: '',
  isComplete: false,
};

Card.propTypes = {
  companyName: PropTypes.string,
  cardNumber: PropTypes.arrayOf(PropTypes.string),
  userName: PropTypes.string,
  expireMonth: PropTypes.string,
  expireYear: PropTypes.string,
  isComplete: PropTypes.bool,
};

export default Card;
