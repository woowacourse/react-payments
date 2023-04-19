import { useFocus } from "hooks/useFocus";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { changeToValidValue } from "utils/inputValidator";

const CardNumberInput = () => {
  const { handleRef, moveFocus } = useFocus();

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

  return (
    <>
      <S.Label htmlFor="card-label">카드 번호</S.Label>
      <S.InputBox>
        <S.Input
          type="text"
          name="number1"
          id="card-label"
          aria-labelledby="card-label"
          maxLength={4}
          inputMode="numeric"
          value={cardNumber.number1}
          ref={(el) => handleRef(el, 0)}
          onChange={handleCardNumber}
          placeholder="0000"
          autoFocus
          required
        />
        <S.Hyphen length={cardNumber.number1}>-</S.Hyphen>
        <S.Input
          type="text"
          name="number2"
          aria-labelledby="card-label"
          maxLength={4}
          inputMode="numeric"
          value={cardNumber.number2}
          ref={(el) => handleRef(el, 1)}
          onChange={handleCardNumber}
          placeholder="0000"
          required
        />
        <S.Hyphen length={cardNumber.number2}>-</S.Hyphen>
        <S.Input
          type="password"
          name="number3"
          aria-labelledby="card-label"
          maxLength={4}
          inputMode="numeric"
          value={cardNumber.number3}
          ref={(el) => handleRef(el, 2)}
          onChange={handleCardNumber}
          placeholder="0000"
          required
        />
        <S.Hyphen length={cardNumber.number3}>-</S.Hyphen>
        <S.Input
          type="password"
          name="number4"
          aria-labelledby="card-label"
          maxLength={4}
          inputMode="numeric"
          value={cardNumber.number4}
          ref={(el) => handleRef(el, 3)}
          onChange={handleCardNumber}
          placeholder="0000"
          required
        />
      </S.InputBox>
    </>
  );
};

const S = {
  Label: styled.label`
    color: var(--label-color);
  `,

  InputBox: styled.div`
    display: flex;
    justify-content: center;
    width: 88vw;
    height: 48px;
    margin-top: 14px;
    background: var(--input-background);
    border-radius: 8px;
  `,

  Input: styled.input`
    background: var(--input-background);
    width: 16vw;
    margin: 0 2.2vw;
    text-align: center;
  `,

  Hyphen: styled.p<{ length: string }>`
    font-weight: 900;
    align-self: center;
    visibility: ${({ length }) =>
      length.length !== 4 &&
      `
        visibility: hidden;
        opacity: 0; 
        pointer-events: none;
      `};
  `,
};

export default CardNumberInput;
