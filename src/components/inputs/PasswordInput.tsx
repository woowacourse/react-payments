import styled from 'styled-components';
import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';
import { DotIcon } from '../../assets/icons';
import { useState, useRef } from 'react';

const PasswordInput = () => {
  const [inputs, setInputs] = useState(['', '']);
  const [errorMessage, setErrorMessage] = useState('');

  const refs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  const handleChangeInput =
    (inputIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;

      if (isNotInputNumber(inputValue)) {
        setErrorMessage('숫자만 입력해주세요');
        return;
      }
      if (isOverLength(inputValue)) return;

      const newInputs = [...inputs];
      newInputs[inputIndex] = inputValue;

      setInputs(newInputs);

      if (isNextInputFocusable(inputValue, inputIndex)) {
        refs[inputIndex + 1].current?.focus();
      }
    };

  const isNotInputNumber = (inputValue: string) => {
    return Number.isNaN(Number(inputValue));
  };

  const isOverLength = (inputValue: string) => {
    return inputValue.length > 1;
  };

  const isNextInputFocusable = (inputValue: string, inputIndex: number) => {
    return inputIndex === 0 && inputValue.length > 0;
  };

  return (
    <InputGroup labelValue='카드 비밀번호' errorMessage={errorMessage}>
      <BoxContainer>
        <InputBox width='43px' isError={!!errorMessage}>
          <Input
            type='password'
            ref={refs[0]}
            value={inputs[0]}
            onChange={handleChangeInput(0)}
          ></Input>
        </InputBox>
        <InputBox width='43px' isError={!!errorMessage}>
          <Input
            type='password'
            ref={refs[1]}
            value={inputs[1]}
            onChange={handleChangeInput(1)}
          ></Input>
        </InputBox>
        <DotIcon />
        <DotIcon />
      </BoxContainer>
    </InputGroup>
  );
};

const BoxContainer = styled.div`
  display: flex;
  gap: 7px;
`;

export default PasswordInput;
