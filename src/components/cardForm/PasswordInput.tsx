import { useContext, useRef } from 'react';
import styled from 'styled-components';
import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';
import { DotIcon } from '../../assets/icons';
import { INPUT_MAX_LENGTH } from '../../utils/Constants';
import {
  CardFormErrorValueContext,
  CardFormValueContext,
} from '../../context/CardFormContext';
import { useMultipleInput } from '../../hooks/useMultipleInput';

const PasswordInput = () => {
  const { password, setPassword } = useContext(CardFormValueContext);
  const { passwordError, setPasswordError } = useContext(
    CardFormErrorValueContext
  );
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const mutableInputRefs = inputRefs.map(
    (inputRef) => inputRef as React.MutableRefObject<HTMLInputElement>
  );

  const { value, errorMessage, handleChangeInput } = useMultipleInput(
    inputRefs.length,
    mutableInputRefs,
    INPUT_MAX_LENGTH.PASSWORD_LENGTH
  );

  setPassword(value);
  setPasswordError(errorMessage);

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
