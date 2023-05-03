import { useContext } from 'react';

import CardContext from '../../contexts/CardContext';

import { CARD_NUMBER } from '../../constants/card';
import { ERROR_MESSAGE } from '../../constants/message';
import { isNumeric } from '../validators/validator';
import { useInputValidator } from '../../hooks/useInputValidator';
import { useInputBox } from '../../hooks/useInputBox';

import * as styled from './SerialNumberBox.styled';
import * as commonStyled from '../Common/Common.styled';
import Input from '../Input/Input';

const SerialNumberBox = () => {
  const { serialNumbers, setSerialNumbers, company } = useContext(CardContext);
  const { validate, errorMessageState } = useInputValidator(
    isNumeric,
    ERROR_MESSAGE.SHOULD_NUMBER,
    CARD_NUMBER.MAX_LENGTH
  );

  return (
    <styled.SerialNumberBox>
      <label>
        <commonStyled.LabelTextParagraph>
          카드 번호
        </commonStyled.LabelTextParagraph>
        <styled.InputBox>
          {Object.entries(serialNumbers).map(([key, value]) => {
            const type =
              key === 'firstSerialNumber' || key === 'secondSerialNumber'
                ? 'text'
                : 'password';
            const isFirstInput = key === 'firstSerialNumber' ? true : false;
            const isCloseModal = company.name !== '';

            return (
              <Input
                key={key}
                name={key}
                value={value}
                onChange={useInputBox(
                  validate,
                  serialNumbers,
                  setSerialNumbers
                )}
                width="xl"
                type={type}
                maxLength={4}
                placeholder="0000"
                isFocus={isFirstInput && isCloseModal}
              />
            );
          })}
        </styled.InputBox>
      </label>
      <commonStyled.ErrorMessageParagraph>
        {errorMessageState}
      </commonStyled.ErrorMessageParagraph>
    </styled.SerialNumberBox>
  );
};

export default SerialNumberBox;
