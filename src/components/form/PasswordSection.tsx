import styled from 'styled-components';
import Title from '../title/Title';
import InputField from '../inputField/InputField';
import Input from '../input/Input';
import {useState} from 'react';
import isNumberWithinRange from '../../utils/isNumberWithinRange';
import {MESSAGE} from '../constants/error';

const INPUT_MAX_LENGTH = 2;

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const PasswordSection = ({value, onChange}: Props) => {
  const [error, setError] = useState('');

  const handleInput = (value: string) => {
    onChange(value);

    if (!isNumberWithinRange(value, INPUT_MAX_LENGTH)) {
      setError(MESSAGE.INVALID_NUMBER);
      return;
    }

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
          type="password"
          maxLength={INPUT_MAX_LENGTH}
          isError={error.length > 0}
          placeholder="**"
          value={value}
          onChange={(e) => handleInput(e.target.value)}
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
