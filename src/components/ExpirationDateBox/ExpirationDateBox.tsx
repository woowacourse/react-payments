import { useContext } from 'react';

import CardContext from '../../contexts/CardContext';

import { EXPIRATION_DATE } from '../../constants/card';
import { ERROR_MESSAGE } from '../../constants/message';
import { isNumeric } from '../validators/validator';
import { useInputValidator } from '../../hooks/useInputValidator';
import { useInputBox } from '../../hooks/useInputBox';

import * as styled from './ExpirationDateBox.styled';
import * as commonStyled from '../Common/Common.styled';
import Input from '../Input/Input';

const ExpirationDateBox = () => {
  const { expirationDate, setExpirationDate, serialNumbers } =
    useContext(CardContext);
  const { validate, errorMessageState } = useInputValidator(
    isNumeric,
    ERROR_MESSAGE.SHOULD_NUMBER,
    EXPIRATION_DATE.MAX_LENGTH
  );

  return (
    <styled.ExpirationDateBox>
      <label>
        <commonStyled.LabelTextParagraph>
          <span>만료일</span>
        </commonStyled.LabelTextParagraph>
        <styled.InputBox>
          {Object.entries(expirationDate).map(([key, value]) => {
            const placeholder = key === 'month' ? 'MM' : 'YY';
            const isMonthInput = key === 'month';
            const isSerialNumbersFull =
              serialNumbers.fourthSerialNumber.length === 4;

            return (
              <Input
                key={key}
                name={key}
                value={value ?? ''}
                onChange={useInputBox(
                  validate,
                  expirationDate,
                  setExpirationDate
                )}
                width="s"
                type="text"
                maxLength={2}
                placeholder={placeholder}
                isFocus={isMonthInput && isSerialNumbersFull}
              />
            );
          })}
        </styled.InputBox>
      </label>
      <commonStyled.ErrorMessageParagraph>
        {errorMessageState}
      </commonStyled.ErrorMessageParagraph>
    </styled.ExpirationDateBox>
  );
};

export default ExpirationDateBox;
