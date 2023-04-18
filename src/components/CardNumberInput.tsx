import { ChangeEvent, useState } from "react";
import { changeToValidValue } from "utils/inputValidator";

const CardNumberInput = () => {
  const [cardNumber, setCardNumber] = useState({
    number1: "",
    number2: "",
    number3: "",
    number4: "",
  });

  const handleCardNumber = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setCardNumber((prevState) => {
      return {
        ...prevState,
        [target.name]: changeToValidValue(target.value, {
          length: 4,
          regex: /[^\d]/g,
        }),
      };
    });

    moveFocus(target);
  };

  const moveFocus = (target: HTMLInputElement) => {
    const input = target.nextElementSibling;

    if (!(input instanceof HTMLInputElement) || !input) return;

    if (target.value.length === 4) input.focus();
  };

  return (
    <>
      <label htmlFor="card-label">카드 번호</label>
      <input
        type="text"
        name="number1"
        id="card-label"
        aria-labelledby="card-label"
        maxLength={4}
        value={cardNumber.number1}
        onChange={handleCardNumber}
        placeholder="0000"
        autoFocus
        required
      />
      <input
        type="text"
        name="number2"
        maxLength={4}
        aria-labelledby="card-label"
        value={cardNumber.number2}
        onChange={handleCardNumber}
        placeholder="0000"
        required
      />
      <input
        type="password"
        name="number3"
        maxLength={4}
        aria-labelledby="card-label"
        value={cardNumber.number3}
        onChange={handleCardNumber}
        placeholder="0000"
        required
      />
      <input
        type="password"
        name="number4"
        maxLength={4}
        aria-labelledby="card-label"
        value={cardNumber.number4}
        onChange={handleCardNumber}
        placeholder="0000"
        required
      />
    </>
  );
};

export default CardNumberInput;
