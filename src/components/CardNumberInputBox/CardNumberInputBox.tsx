import { ChangeEvent, useState } from 'react';

import { CardNumbers, SetCardNumbers } from '../../types/state';
import { CARD_NUMBER } from '../../constants/cardInfo';
import { ERROR_MESSAGE } from '../../constants/message';

import { isNumeric } from '../validators/validator';

import * as styled from './CardNumberInputBox.styled';
import Input from '../Input/Input';

interface CardNumberInputBoxProps {
  cardNumbers: CardNumbers;
  setCardNumbers: SetCardNumbers;
}

const CardNumberInputBox = ({ cardNumbers, setCardNumbers }: CardNumberInputBoxProps) => {
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isNumeric(value) && value.length) {
      setErrorMessage(ERROR_MESSAGE.SHOULD_NUMBER);

      return;
    }

    if (errorMessage) setErrorMessage('');

    if (value.length > CARD_NUMBER.MAX_LENGTH) return;

    setCardNumbers({
      ...cardNumbers,
      [name]: value,
    });
  };

  return (
    <styled.CardNumberInputBox>
      <label>
        <styled.LabelHeader>
          <span>카드 번호</span>
        </styled.LabelHeader>
        <styled.InputContainer>
          {Object.entries(cardNumbers).map(([key, value]) => {
            return (
              <Input
                key={key}
                name={key}
                value={value}
                onChange={onChange}
                width="xl"
                type={key === 'first' || key === 'second' ? 'text' : 'password'}
                maxLength={4}
                placeholder="0000"
                isFocus={key === 'first' ? true : false}
              />
            );
          })}
        </styled.InputContainer>
      </label>
      <styled.ErrorMessage>{errorMessage}</styled.ErrorMessage>
    </styled.CardNumberInputBox>
  );
};

export default CardNumberInputBox;
