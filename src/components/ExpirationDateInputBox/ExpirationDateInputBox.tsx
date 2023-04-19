import { ChangeEvent, useState } from 'react';
import * as styled from './ExpirationDateInputBox.styles';
import { isNumeric } from '../../validator';
import { generateInputs } from '../generator';

export interface DateState {
  month: string;
  year: string;
  [key: string]: string;
}

const ExpirationDateInputBox = (props: any) => {
  const [date, setDate] = useState<DateState>({
    month: '',
    year: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isNumeric(value)) return setErrorMessage('숫자만 입력 가능');

    if (errorMessage) setErrorMessage('');

    if (value.length > 2) return;

    setDate({
      ...date,
      [name]: value,
    });
  };

  return (
    <styled.ExpirationDateInputBox>
      <label>
        <div>만료일</div>
        <div>{generateInputs(date, onChange, 'middle', 'MMYY')}</div>
      </label>
      <styled.ErrorMessage>{errorMessage}</styled.ErrorMessage>
    </styled.ExpirationDateInputBox>
  );
};

export default ExpirationDateInputBox;
