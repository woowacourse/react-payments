import { useContext } from 'react';
import CardContext from 'contexts';

const formatCardNumber = (cardNumber) => {
  const newCardNumber = [...cardNumber].map((unit) => (unit === '' ? '0000' : unit));
  const maskingIndexes = [2, 3];

  maskingIndexes.forEach((index) => {
    if (newCardNumber.length <= index) return;

    newCardNumber[index] = '⦁'.repeat(newCardNumber[index].length);
  });

  return newCardNumber.join('-');
};

function Card() {
  // eslint-disable-next-line operator-linebreak
  const { isComplete, companyName, cardNumber, userName, expireMonth, expireYear } =
    useContext(CardContext);

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

export default Card;
