import { ChangeEvent, useState } from 'react';

import { Input } from '../../index';

import * as styled from './CardNumbersInput.styled';
import { isNumeric } from '../../../domain/validator';
import { CardInfo } from '../../../App';

interface CardNumberInputBoxProps {
  setCardInfo: CallableFunction;
  numbers: any;
}

const CardNumberInputBox = ({ setCardInfo, numbers }: CardNumberInputBoxProps) => {
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
          <styled.Inputs>
            {Object.keys(numbers).map((key, index) => {
              return (
                <>
                  <Input
                    key={key}
                    name={key}
                    value={numbers[key]}
                    onChange={onChange}
                    width="l"
                    type={index < 2 ? 'text' : 'password'}
                    maxLength={4}
                  />
                  <styled.CardNumberDivision>
                    {index !== 3 && numbers[key].length === 4 ? '-' : ''}
                  </styled.CardNumberDivision>
                </>
              );
            })}
          </styled.Inputs>
        </styled.InputContainer>
      </label>
      <styled.ErrorMessage>{errorMessage}</styled.ErrorMessage>
    </styled.CardNumberInputBox>
  );
};

export default CardNumberInputBox;
