import { useContext } from 'react';
import styled from 'styled-components';
import { HIDDEN_ELEMENT_STYLE, LENGTH, REGEX } from 'constants/constants';
import { useInputHandler } from 'hooks/useInputHandler';
import { StyledInput } from 'components/Input';
import InputBox from 'components/InputBox';
import { AddCardContext } from 'context/CardContext';

const CardNumberInput = () => {
  const { cardNumber, setCardNumber } = useContext(AddCardContext);

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
      <InputBox>
        <NumberInput
          type="text"
          name="number1"
          id="card-label"
          maxLength={LENGTH.EACH_CARD_NUMBER}
          inputMode="numeric"
          value={cardNumber.number1}
          ref={(el) => handleInputRef(el, 0)}
          onChange={handleCardNumber}
          placeholder="0000"
          autoFocus
          required
        />
        <Hyphen cardNumber={cardNumber.number1}>-</Hyphen>
        <NumberInput
          type="text"
          name="number2"
          maxLength={LENGTH.EACH_CARD_NUMBER}
          inputMode="numeric"
          value={cardNumber.number2}
          ref={(el) => handleInputRef(el, 1)}
          onChange={handleCardNumber}
          placeholder="0000"
          required
        />
        <Hyphen cardNumber={cardNumber.number2}>-</Hyphen>
        <NumberInput
          type="password"
          name="number3"
          maxLength={LENGTH.EACH_CARD_NUMBER}
          inputMode="numeric"
          value={cardNumber.number3}
          ref={(el) => handleInputRef(el, 2)}
          onChange={handleCardNumber}
          placeholder="0000"
          required
        />
        <Hyphen cardNumber={cardNumber.number3}>-</Hyphen>
        <NumberInput
          type="password"
          name="number4"
          maxLength={LENGTH.EACH_CARD_NUMBER}
          inputMode="numeric"
          value={cardNumber.number4}
          ref={(el) => handleInputRef(el, 3)}
          onChange={handleCardNumber}
          placeholder="0000"
          required
        />
      </InputBox>
      <Caption cardNumbers={Object.values(cardNumber)}>
        숫자 16자리를 모두 입력해 주세요.
      </Caption>
    </>
  );
};

const NumberInput = styled(StyledInput)`
  width: 12vw;
`;

const Hyphen = styled.p<{ cardNumber: string }>`
  font-weight: 900;
  align-self: center;
  visibility: ${({ cardNumber }) =>
    cardNumber.length !== LENGTH.EACH_CARD_NUMBER && `${HIDDEN_ELEMENT_STYLE}`};
`;

const Caption = styled.p<{ cardNumbers: string[] }>`
  color: var(--caption-color);
  font-size: 12px;
  margin: 8px 0 16px 4px;
  visibility: ${({ cardNumbers }) =>
    (cardNumbers.join('').length === LENGTH.EACH_CARD_NUMBER * 4 ||
      cardNumbers.join('').length === 0) &&
    `${HIDDEN_ELEMENT_STYLE}`};
`;

export default CardNumberInput;
