import { useContext, useRef } from 'react';
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
import {
  CardFormErrorValueContext,
  CardFormValueContext,
} from '../../context/CardFormContext';

const PasswordInput = () => {
  const { password, setPassword } = useContext(CardFormValueContext);
  const { passwordError, setPasswordError } = useContext(
    CardFormErrorValueContext
  );
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleChangeInput =
    (inputIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;

      if (isOverLength(inputValue, INPUT_MAX_LENGTH.PASSWORD_LENGTH)) return;
      if (isInputNumber(inputValue, INPUT_MAX_LENGTH.PASSWORD_LENGTH)) {
        setPasswordError(ERROR_MESSAGE.ONLY_NUMBER);
        return;
      }

      const newInputs = [...password];
      newInputs[inputIndex] = inputValue;

      setPassword(newInputs);
      setPasswordError('');

      if (
        isNextInputFocusable({
          inputValue,
          inputIndex,
          maxLength: INPUT_MAX_LENGTH.PASSWORD_LENGTH,
        })
      ) {
        const nextInputRef = inputRefs.at(inputIndex + 1);
        if (nextInputRef?.current) {
          nextInputRef.current.focus();
        }
      }
    };

  return (
    <InputGroup labelValue='카드 비밀번호' errorMessage={passwordError}>
      <BoxContainer>
        <InputBox width='43px' isError={!!passwordError}>
          <Input
            type='password'
            ref={inputRefs[0]}
            value={password[0]}
            onChange={handleChangeInput(0)}
          />
        </InputBox>
        <InputBox width='43px' isError={!!passwordError}>
          <Input
            type='password'
            ref={inputRefs[1]}
            value={password[1]}
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
