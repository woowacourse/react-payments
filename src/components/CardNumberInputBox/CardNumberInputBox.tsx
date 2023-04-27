import { useContext } from 'react';

import CardInfoContext from '../../contexts/CardInfoContext';

import { CARD_NUMBER } from '../../constants/cardInfo';
import { ERROR_MESSAGE } from '../../constants/message';
import { isNumeric } from '../validators/validator';
import { useInputValidator } from '../../hooks/useInputValidator';
import { useInputBox } from '../../hooks/useInputBox';

import * as styled from './CardNumberInputBox.styled';
import Input from '../Input/Input';

const CardNumberInputBox = () => {
  const { cardNumbers, setCardNumbers, cardCompany } = useContext(CardInfoContext);
  const { validate, errorMessageState } = useInputValidator(
    isNumeric,
    ERROR_MESSAGE.SHOULD_NUMBER,
    CARD_NUMBER.MAX_LENGTH
  );

  return (
    <styled.CardNumberInputBox>
      <label>
        <styled.LabelHeader>
          <span>카드 번호</span>
        </styled.LabelHeader>
        <styled.InputContainer>
          {Object.entries(cardNumbers).map(([key, value]) => {
            const type =
              key === 'firstCardNumber' || key === 'secondCardNumber' ? 'text' : 'password';
            const isFirstInput = key === 'firstCardNumber' ? true : false;
            const isCloseModal = cardCompany.name !== '';

            return (
              <Input
                key={key}
                name={key}
                value={value}
                onChange={useInputBox(validate, cardNumbers, setCardNumbers)}
                width="xl"
                type={type}
                maxLength={4}
                placeholder="0000"
                isFocus={isFirstInput && isCloseModal}
              />
            );
          })}
        </styled.InputContainer>
      </label>
      <styled.ErrorMessage>{errorMessageState}</styled.ErrorMessage>
    </styled.CardNumberInputBox>
  );
};

export default CardNumberInputBox;
