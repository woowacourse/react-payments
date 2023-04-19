import { ChangeEvent, useState } from 'react';
import Input from '../Input/Input';
import * as styled from './ExpirationDateInputBox.styles';
import { isNumeric } from '../../validator';

interface DateStates {
  month: string;
  year: string;
  [key: string]: string;
}

const ExpirationDateInputBox = (props: any) => {
  const [date, setDate] = useState<DateStates>({
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

  const generateInputs = () => {
    return Object.keys(date).map((key) => (
      <Input
        key={key}
        name={key}
        value={date[key]}
        onChange={onChange}
        width="middle"
        type="text"
      />
    ));
  };

  return (
    <styled.ExpirationDateInputBox>
      <label>
        <div>만료일</div>
        <div>{generateInputs()}</div>
      </label>
      <styled.ErrorMessage>{errorMessage}</styled.ErrorMessage>
    </styled.ExpirationDateInputBox>
  );
};

export default ExpirationDateInputBox;
