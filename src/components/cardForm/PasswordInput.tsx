import { useRef } from 'react';
import styled from 'styled-components';
import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';
import { DotIcon } from '../../assets/icons';
import {
  isInputNumber,
  isNextInputFocusable,
  isOverLength,
} from '../../utils/InputValidate';
import { ERROR_MESSAGE, INPUT_MAX_LENGTH } from '../../utils/Constants';
import type { Card, InputProps } from '../../types/Card';

type PasswordInputProps = InputProps<Card['password']>;

const PasswordInput = ({
  value,
  setValue,
  errorMessage,
  setErrorMessage,
}: PasswordInputProps) => {
  const refs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  const handleChangeInput =
    (inputIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;

      if (isOverLength(inputValue, INPUT_MAX_LENGTH.PASSWORD_LENGTH)) return;
      if (isInputNumber(inputValue, INPUT_MAX_LENGTH.PASSWORD_LENGTH)) {
        setErrorMessage(ERROR_MESSAGE.ONLY_NUMBER);
        return;
      }

      const newInputs = [...value];
      newInputs[inputIndex] = inputValue;

      setValue(newInputs);
      setErrorMessage('');

      if (
        isNextInputFocusable({
          inputValue,
          inputIndex,
          maxLength: INPUT_MAX_LENGTH.PASSWORD_LENGTH,
        })
      ) {
        refs[inputIndex + 1].current?.focus();
      }
    };

  return (
    <InputGroup labelValue='카드 비밀번호' errorMessage={errorMessage}>
      <BoxContainer>
        <InputBox width='43px' isError={!!errorMessage}>
          <Input
            type='password'
            ref={refs[0]}
            value={value[0]}
            onChange={handleChangeInput(0)}
          />
        </InputBox>
        <InputBox width='43px' isError={!!errorMessage}>
          <Input
            type='password'
            ref={refs[1]}
            value={value[1]}
            onChange={handleChangeInput(1)}
          />
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
