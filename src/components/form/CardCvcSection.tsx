import styled from 'styled-components';
import Title from '../title/Title';
import InputField from '../inputField/InputField';
import Input from '../input/Input';
import {ChangeEvent, useState} from 'react';
import isNumberWithinRange from '../../utils/isNumberWithinRange';
import {MESSAGE} from '../constants/error';

const INPUT_MAX_LENGTH = 3;

type Props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onError: (name: string, isError: boolean) => void;
};

const CardCvcSection = ({value, onChange, onError}: Props) => {
  const [error, setError] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);

    const {value, name} = e.target;
    if (!isNumberWithinRange(value, INPUT_MAX_LENGTH)) {
      setError(MESSAGE.INVALID_NUMBER);
      onError(name, true);
      return;
    }

    setError('');
    onError(name, false);
  };

  const handleFocusout = (value: string) => {
    if (value.length < INPUT_MAX_LENGTH)
      setError(MESSAGE.INPUT_LENGTH_LIMIT(INPUT_MAX_LENGTH));
  };

  return (
    <CardNumberWrap>
      <Title>CVC 번호를 입력해 주세요</Title>
      <InputField label="CVC" errorMessage={error}>
        <Input
          name="cvcNumber"
          maxLength={INPUT_MAX_LENGTH}
          isError={error.length > 0}
          placeholder="123"
          value={value}
          onChange={(e) => handleInput(e)}
          onBlur={(e) => handleFocusout(e.target.value)}
        />
      </InputField>
    </CardNumberWrap>
  );
};

export default CardCvcSection;

const CardNumberWrap = styled.div`
  height: 130px;
`;
