import { useContext } from 'react';
import styled from 'styled-components';
import { HIDDEN_ELEMENT_STYLE, LENGTH, REGEX } from 'constants/constants';
import { useInputHandler } from 'hooks/useInputHandler';
import { StyledInput } from 'components/Input';
import InputBox from 'components/InputBox';
import { AddCardContext } from 'context/CardContext';
import Hyphen, { StyledHyphen } from 'components/Hypen';
import { CardNumber } from 'types/Card';
import { showNumberHyphen } from 'utils/hyphenStyle';
import { StyledCaption } from 'components/Caption';

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
        <NumberHyphen cardNumber={cardNumber} index={0} />
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
        <NumberHyphen cardNumber={cardNumber} index={1} />
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
        <NumberHyphen cardNumber={cardNumber} index={2} />
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
      <NumberCaption cardNumbers={Object.values(cardNumber)}>
        숫자 16자리를 모두 입력해 주세요.
      </NumberCaption>
    </>
  );
};

const NumberInput = styled(StyledInput)`
  width: 12vw;
`;

const NumberHyphen = styled(StyledHyphen)<{
  cardNumber: CardNumber;
  index: number;
}>`
  visibility: ${({ cardNumber, index }) => showNumberHyphen(cardNumber)[index]};
`;

const NumberCaption = styled(StyledCaption)<{ cardNumbers: string[] }>`
  visibility: ${({ cardNumbers }) =>
    (cardNumbers.join('').length === LENGTH.EACH_CARD_NUMBER * 4 ||
      cardNumbers.join('').length === 0) &&
    `${HIDDEN_ELEMENT_STYLE}`};
`;

export default CardNumberInput;
