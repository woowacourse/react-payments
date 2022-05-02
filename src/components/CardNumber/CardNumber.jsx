import PropTypes from 'prop-types';

import { LIMIT_LENGTH } from 'constants';
import { limitInputLength, inputNumberOnly } from 'utils';

function CardNumber({ cardInfo, setCardInfo }) {
  const handleChange = (event) => {
    const { value, name } = event.target;

    const cardNumberInput = inputNumberOnly(value);

    const cardNumberInputLengthSliced =
      cardNumberInput.length > LIMIT_LENGTH.CARD_NUMBER
        ? limitInputLength(cardNumberInput, LIMIT_LENGTH.CARD_NUMBER)
        : cardNumberInput;

    setCardInfo({
      ...cardInfo,
      [name]: cardNumberInputLengthSliced,
    });
  };

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <input
          name="number1"
          className={`input-basic ${
            cardInfo.number1.length >= LIMIT_LENGTH.CARD_NUMBER ? 'input-correct' : null
          }`}
          type="text"
          onChange={handleChange}
          value={cardInfo.number1}
          required
        />
        <input
          name="number2"
          className={`input-basic ${
            cardInfo.number2.length >= LIMIT_LENGTH.CARD_NUMBER ? 'input-correct' : null
          }`}
          type="text"
          onChange={handleChange}
          value={cardInfo.number2}
          required
        />
        <input
          name="number3"
          className={`input-basic ${
            cardInfo.number3.length >= LIMIT_LENGTH.CARD_NUMBER ? 'input-correct' : null
          }`}
          type="password"
          onChange={handleChange}
          value={cardInfo.number3}
          required
        />
        <input
          name="number4"
          className={`input-basic ${
            cardInfo.number4.length >= LIMIT_LENGTH.CARD_NUMBER ? 'input-correct' : null
          }`}
          type="password"
          onChange={handleChange}
          value={cardInfo.number4}
          required
        />
      </div>
    </div>
  );
}

export default CardNumber;

CardNumber.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  setCardInfo: PropTypes.func.isRequired,
};
