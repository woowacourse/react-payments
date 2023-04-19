import { ChangeEvent, useState } from 'react';
import Input from '../Input/Input';
import * as styled from './CardNumberBox.styled';
import { isNumeric } from '../../validator';

export interface NumbersState {
  first: string;
  second: string;
  third: string;
  fourth: string;
  [key: string]: string;
}

const CardNumberBox = () => {
  const [numbers, setNumbers] = useState<NumbersState>({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isNumeric(value)) return setErrorMessage('숫자만 입력 가능');

    if (errorMessage) setErrorMessage('');

    if (value.length > 4) return;

    setNumbers({
      ...numbers,
      [name]: value,
    });
  };

  return (
    <styled.CardNumberBox>
      <label>
        <div>카드 번호</div>
        <div>
          {Object.keys(numbers).map((key) => {
            return (
              <Input
                key={key}
                name={key}
                value={numbers[key]}
                onChange={onChange}
                width="large"
                type="text"
                maxLength={4}
              />
            );
          })}
        </div>
      </label>
      <styled.ErrorMessage>{errorMessage}</styled.ErrorMessage>
    </styled.CardNumberBox>
  );
};

export default CardNumberBox;
