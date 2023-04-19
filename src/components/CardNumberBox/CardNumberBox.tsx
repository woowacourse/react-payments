import { ChangeEvent, useState } from 'react';
import * as styled from './CardNumberBox.styles';
import { isNumeric } from '../../validator';
import { generateInputs } from '../generator';

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
        <div>{generateInputs(numbers, onChange, 'large')}</div>
      </label>
      <styled.ErrorMessage>{errorMessage}</styled.ErrorMessage>
    </styled.CardNumberBox>
  );
};

export default CardNumberBox;
