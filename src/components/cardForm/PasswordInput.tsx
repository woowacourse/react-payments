import { useRef } from 'react';
import styled from 'styled-components';
import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';
import { DotIcon } from '../../assets/icons';
import { Card } from '../../types/Card';

interface PasswordInputProps {
  password: Card['password'];
  setPassword: (password: Card['password']) => void;
  errorMessage: string;
  setErrorMessage: (errorMessage: string) => void;
}

const PasswordInput = ({
  password,
  setPassword,
  errorMessage,
  setErrorMessage,
}: PasswordInputProps) => {
  const refs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  const handleChangeInput =
    (inputIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;

      if (isOverLength(inputValue)) return;

      if (isNotInputNumber(inputValue)) {
        setErrorMessage('숫자만 입력해주세요');
        return;
      }

      const newInputs = [...password];
      newInputs[inputIndex] = inputValue;

      setPassword(newInputs);
      setErrorMessage('');

      if (isNextInputFocusable(inputValue, inputIndex)) {
        refs[inputIndex + 1].current?.focus();
      }
    };

  const isNotInputNumber = (inputValue: string) => {
    const regex = /^\d{0,1}$/;
    return !regex.test(inputValue);
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
            value={password[0]}
            onChange={handleChangeInput(0)}
          ></Input>
        </InputBox>
        <InputBox width='43px' isError={!!errorMessage}>
          <Input
            type='password'
            ref={refs[1]}
            value={password[1]}
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
