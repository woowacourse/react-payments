import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { HIDDEN_ELEMENT_STYLE, LENGTH, REGEX } from 'constants/constants';
import { Card } from 'types/Card';
import { useInputHandler } from 'hooks/useInputHandler';

type CardNumber = Pick<Card, 'number1' | 'number2' | 'number3' | 'number4'>;

interface Props {
  cardNumber: CardNumber;
  setCardNumber: Dispatch<SetStateAction<CardNumber>>;
}

const CardNumberInput = (props: Props) => {
  const { cardNumber, setCardNumber } = props;

  const { handleInput: handleCardNumber, handleRef: handleInputRef } =
    useInputHandler(setCardNumber, {
      length: LENGTH.EACH_CARD_NUMBER,
      regex: REGEX.ONLY_NUMBER,
    });

  return (
    <>
      <label className="label-text" htmlFor="card-label">
        카드 번호
      </label>
      <S.InputBox>
        <S.Input
          type="text"
          name="number1"
          id="card-label"
          aria-labelledby="card-label"
          maxLength={LENGTH.EACH_CARD_NUMBER}
          inputMode="numeric"
          value={cardNumber.number1}
          ref={(el) => handleInputRef(el, 0)}
          onChange={handleCardNumber}
          placeholder="0000"
          autoFocus
          required
        />
        <S.Hyphen cardNumber={cardNumber.number1}>-</S.Hyphen>
        <S.Input
          type="text"
          name="number2"
          aria-labelledby="card-label"
          maxLength={LENGTH.EACH_CARD_NUMBER}
          inputMode="numeric"
          value={cardNumber.number2}
          ref={(el) => handleInputRef(el, 1)}
          onChange={handleCardNumber}
          placeholder="0000"
          required
        />
        <S.Hyphen cardNumber={cardNumber.number2}>-</S.Hyphen>
        <S.Input
          type="password"
          name="number3"
          aria-labelledby="card-label"
          maxLength={LENGTH.EACH_CARD_NUMBER}
          inputMode="numeric"
          value={cardNumber.number3}
          ref={(el) => handleInputRef(el, 2)}
          onChange={handleCardNumber}
          placeholder="0000"
          required
        />
        <S.Hyphen cardNumber={cardNumber.number3}>-</S.Hyphen>
        <S.Input
          type="password"
          name="number4"
          aria-labelledby="card-label"
          maxLength={LENGTH.EACH_CARD_NUMBER}
          inputMode="numeric"
          value={cardNumber.number4}
          ref={(el) => handleInputRef(el, 3)}
          onChange={handleCardNumber}
          placeholder="0000"
          required
        />
      </S.InputBox>
      <S.Caption cardNumbers={Object.values(cardNumber)}>
        숫자 16자리를 모두 입력해 주세요.
      </S.Caption>
    </>
  );
};

const S = {
  InputBox: styled.div`
    display: flex;
    justify-content: center;
    width: 88vw;
    height: 48px;
    margin-top: 12px;
    background: var(--input-background);
    border-radius: 8px;
  `,

  Input: styled.input`
    background: var(--input-background);
    width: 14vw;
    margin: 0 2.2vw;
    font-size: 14px;
    text-align: center;
    letter-spacing: 1px;
  `,

  Hyphen: styled.p<{ cardNumber: string }>`
    font-weight: 900;
    align-self: center;
    visibility: ${({ cardNumber }) =>
      cardNumber.length !== LENGTH.EACH_CARD_NUMBER &&
      `${HIDDEN_ELEMENT_STYLE}`};
  `,

  Caption: styled.p<{ cardNumbers: string[] }>`
    color: var(--caption-color);
    font-size: 12px;
    margin: 8px 0 16px 4px;
    visibility: ${({ cardNumbers }) =>
      cardNumbers.join('').length ===
        LENGTH.EACH_CARD_NUMBER * LENGTH.EACH_CARD_NUMBER &&
      `${HIDDEN_ELEMENT_STYLE}`};
  `,
};

export default CardNumberInput;
