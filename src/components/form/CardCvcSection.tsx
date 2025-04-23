import styled from 'styled-components';
import Title from '../title/Title';
import InputField from '../inputField/InputField';
import Input from '../input/Input';
import {useState} from 'react';
import isNumberWithinRange from '../../utils/isNumberWithinRange';
import {MESSAGE} from '../constants/error';

const INPUT_MAX_LENGTH = 3;

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const CardCvcSection = ({
  value: cvcNumber,
  onChange: onCvcNumberChange,
}: Props) => {
  const [error, setError] = useState('');

  const handleInput = (value: string) => {
    onCvcNumberChange(value);

    if (!isNumberWithinRange(value, INPUT_MAX_LENGTH)) {
      setError(MESSAGE.INVALID_NUMBER);
      return;
    }

    setError('');
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
          maxLength={INPUT_MAX_LENGTH}
          isError={error.length > 0}
          placeholder="123"
          value={cvcNumber}
          onChange={(e) => handleInput(e.target.value)}
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
