import styled from 'styled-components';
import Title from '../title/Title';
import InputField from '../inputField/InputField';
import Input from '../input/Input';
import {ChangeEvent, useState} from 'react';
import isNumberWithinRange from '../../utils/isNumberWithinRange';
import {MESSAGE} from '../constants/error';

const INPUT_MAX_LENGTH = 2;

type Props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onError: (name: string, isError: boolean) => void;
};

const PasswordSection = ({value, onChange, onError}: Props) => {
  const [error, setError] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);

    const {value, name} = e.target;
    if (!isNumberWithinRange(value, INPUT_MAX_LENGTH)) {
      setError(MESSAGE.INVALID_NUMBER);
      onError(name, true);
      return;
    }

    onError(name, false);
    setError('');
  };

  const handleFocusout = (value: string) => {
    if (value.length < INPUT_MAX_LENGTH) {
      setError(MESSAGE.INPUT_LENGTH_LIMIT(INPUT_MAX_LENGTH));
    }
  };

  return (
    <CardNumberWrap>
      <Title>비밀번호를 입력해 주세요</Title>
      <InputField label="비밀번호 앞 2자리" errorMessage={error}>
        <Input
          name="password"
          type="password"
          maxLength={INPUT_MAX_LENGTH}
          isError={error.length > 0}
          placeholder="**"
          value={value}
          autoFocus
          onChange={(e) => handleInput(e)}
          onBlur={(e) => handleFocusout(e.target.value)}
        />
      </InputField>
    </CardNumberWrap>
  );
};

export default PasswordSection;

const CardNumberWrap = styled.div`
  height: 130px;
`;
