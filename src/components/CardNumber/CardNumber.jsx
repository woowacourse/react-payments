import { useContext } from 'react';
import { CardInfoContext } from 'CardInfoContextProvider';

import { LIMIT_LENGTH, ACTION } from 'constants';
import { limitInputLength, inputNumberOnly } from 'utils';

function CardNumber() {
  const { state, dispatch } = useContext(CardInfoContext);

  const { number1, number2, number3, number4 } = state.card;

  const cardNumbers = [number1, number2, number3, number4];
  const setCardNumbers = (cardNumbers) => dispatch({ type: ACTION.SET_CARD_NUMBERS, cardNumbers });

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
        {cardNumbers.map((cardNumber, idx) => {
          return (
            <input
              name={`number${idx + 1}`}
              className={`input-basic ${
                cardNumber.length >= LIMIT_LENGTH.CARD_NUMBER ? 'input-correct' : ''
              }`}
              type={`${idx < 2 ? 'number' : 'password'}`}
              onChange={handleChange}
              value={cardNumber}
              key={idx}
              required
            />
          );
        })}
      </div>
    </div>
  );
}

export default CardNumber;
