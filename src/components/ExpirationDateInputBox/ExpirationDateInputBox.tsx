import { useContext } from 'react';

import CardInfoContext from '../../contexts/CardInfoContext';

import { EXPIRATION_DATE } from '../../constants/cardInfo';
import { ERROR_MESSAGE } from '../../constants/message';
import { isNumeric } from '../validators/validator';
import { useInputValidator } from '../../hooks/useInputValidator';
import { useInputBox } from '../../hooks/useInputBox';

import * as styled from './ExpirationDateInputBox.styled';
import Input from '../Input/Input';

const ExpirationDateInputBox = () => {
  const { expirationDate, setExpirationDate, cardNumbers } = useContext(CardInfoContext);
  const { validate, errorMessageState } = useInputValidator(
    isNumeric,
    ERROR_MESSAGE.SHOULD_NUMBER,
    EXPIRATION_DATE.MAX_LENGTH
  );

  const { onChange } = useInputBox(validate, expirationDate, setExpirationDate);

  return (
    <styled.ExpirationDateInputBox>
      <label>
        <styled.LabelHeader>
          <span>만료일</span>
        </styled.LabelHeader>
        <styled.InputContainer>
          {Object.entries(expirationDate).map(([key, value]) => {
            const placeholder = key === 'month' ? 'MM' : 'YY';
            const isMonthInput = key === 'month';
            const isCardNumbersFull = cardNumbers.fourthCardNumber.length === 4;

            return (
              <Input
                key={key}
                name={key}
                value={value ?? ''}
                onChange={onChange}
                width="s"
                type="text"
                maxLength={2}
                placeholder={placeholder}
                isFocus={isMonthInput && isCardNumbersFull}
              />
            );
          })}
        </styled.InputContainer>
      </label>
      <styled.ErrorMessage>{errorMessageState}</styled.ErrorMessage>
    </styled.ExpirationDateInputBox>
  );
};

export default ExpirationDateInputBox;
