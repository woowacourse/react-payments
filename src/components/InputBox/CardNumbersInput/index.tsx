import { ChangeEvent, useState } from 'react';

import { Input } from '../../index';

import * as styled from './CardNumbersInput.styled';
import { isNumeric } from '../../../domain/validator';
import { CardInfo } from '../../../App';

const CardNumberInputBox = ({
  setCardInfo,
  numbers,
}: {
  setCardInfo: CallableFunction;
  numbers: any;
}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isNumeric(value)) return setErrorMessage('숫자만 입력 가능');

    if (errorMessage) setErrorMessage('');

    if (value.length > 4) return;

    setCardInfo((prev: CardInfo) => {
      return {
        ...prev,
        numbers: {
          ...numbers,
          [name]: value,
        },
      };
    });
  };

  return (
    <styled.CardNumberInputBox>
      <label>
        <styled.LabelHeader>
          <span>카드 번호</span>
        </styled.LabelHeader>
        <styled.InputContainer>
          {Object.keys(numbers).map((key) => {
            return (
              <Input
                key={key}
                name={key}
                value={numbers[key]}
                onChange={onChange}
                width="xl"
                type="text"
                maxLength={4}
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
