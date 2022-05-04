import PropTypes from 'prop-types';

import { LIMIT_LENGTH } from 'constants';
import { limitInputLength, inputNumberOnly } from 'utils';

function CardNumber({ cardNumbers, setCardNumbers }) {
  const handleChange = (event) => {
    const { value, name } = event.target;

    const cardNumberInput = inputNumberOnly(value);

    const cardNumberInputLengthSliced =
      cardNumberInput.length > LIMIT_LENGTH.CARD_NUMBER
        ? limitInputLength(cardNumberInput, LIMIT_LENGTH.CARD_NUMBER)
        : cardNumberInput;

    const newCardNumbers = [...cardNumbers];

    switch (name) {
      case 'number1':
        newCardNumbers[0] = cardNumberInputLengthSliced;
        break;
      case 'number2':
        newCardNumbers[1] = cardNumberInputLengthSliced;
        break;
      case 'number3':
        newCardNumbers[2] = cardNumberInputLengthSliced;
        break;
      case 'number4':
        newCardNumbers[3] = cardNumberInputLengthSliced;
        break;
      default:
        break;
    }

    setCardNumbers(newCardNumbers);
  };

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <input
          name="number1"
          className={`input-basic ${
            cardNumbers[0].length >= LIMIT_LENGTH.CARD_NUMBER ? 'input-correct' : null
          }`}
          type="number"
          onChange={handleChange}
          value={cardNumbers[0]}
          required
        />
        <input
          name="number2"
          className={`input-basic ${
            cardNumbers[1].length >= LIMIT_LENGTH.CARD_NUMBER ? 'input-correct' : null
          }`}
          type="number"
          onChange={handleChange}
          value={cardNumbers[1]}
          required
        />
        <input
          name="number3"
          className={`input-basic ${
            cardNumbers[2].length >= LIMIT_LENGTH.CARD_NUMBER ? 'input-correct' : null
          }`}
          type="password"
          onChange={handleChange}
          value={cardNumbers[2]}
          required
        />
        <input
          name="number4"
          className={`input-basic ${
            cardNumbers[3].length >= LIMIT_LENGTH.CARD_NUMBER ? 'input-correct' : null
          }`}
          type="password"
          onChange={handleChange}
          value={cardNumbers[3]}
          required
        />
      </div>
    </div>
  );
}

export default CardNumber;

CardNumber.propTypes = {
  cardNumbers: PropTypes.array.isRequired,
  setCardNumbers: PropTypes.func.isRequired,
};
