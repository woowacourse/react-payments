import { ChangeEvent, Fragment, useState } from 'react';

import { Input } from '../../';

import * as styled from './CardNumbersInput.styled';
import { isNumeric } from '../../../domain/validator';
import { CardInfo } from '../../../App';
import LabelHeader from '../LabelHeader';

interface CardNumberInputBoxProps {
  refs: any;
  setCardInfo: CallableFunction;
  numbers: any;
}

const CardNumberInputBox = ({ refs, setCardInfo, numbers }: CardNumberInputBoxProps) => {
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
        <LabelHeader title="카드 번호" required={true} />
        <styled.InputContainer>
          <styled.Inputs>
            {Object.keys(numbers).map((key, index) => (
              <Fragment key={key}>
                <Input
                  name={key}
                  ref={refs[index]}
                  value={numbers[key]}
                  onChange={onChange}
                  type={index < 2 ? 'text' : 'password'}
                  width="l"
                  center={true}
                  maxLength={4}
                />
                <styled.CardNumberDivision>
                  {index !== 3 && numbers[key].length === 4 ? '-' : ''}
                </styled.CardNumberDivision>
              </Fragment>
            ))}
          </styled.Inputs>
        </styled.InputContainer>
      </label>
      <styled.ErrorMessage>{errorMessage}</styled.ErrorMessage>
    </styled.CardNumberInputBox>
  );
};

export default CardNumberInputBox;
