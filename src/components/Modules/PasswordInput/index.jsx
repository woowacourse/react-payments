import styled from 'styled-components';
import { useState, useRef } from 'react';
import LabeledInput from '../../Atoms/LabeledInput';
import Input from '../../Atoms/Input';
import validator from '../../../validation';
import { numberRegex } from '../../../constant/regularExpression';

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 193px;
  gap: 7px;
`;

function PasswordInput() {
  const [password, setPassword] = useState({ first: '', second: '' });
  const [validations, setValidations] = useState({
    first: false,
    second: false,
  });
  const refs = { first: useRef(), second: useRef() };

  const onPasswordChange = ({ target, nativeEvent: { data } }) => {
    if (numberRegex.test(data) || !data) {
      updatePassword(target.name, target.value);
      updateValidations(target.name, target.value);
    }
  };

  const updatePassword = (order, number) => {
    setPassword(prevPassword => ({ ...prevPassword, [order]: number }));
  };

  const updateValidations = (order, number) => {
    setValidations(prevValidations => ({
      ...prevValidations,
      [order]: validator.validatePassword(number),
    }));
  };

  const focusNext = order => {};

  return (
    <LabeledInput text="카드 비밀번호">
      <InputContainer>
        {Object.keys(password).map(order => (
          <Input
            key={order}
            name={order}
            ref={refs[order]}
            value={password[order]}
            width="43px"
            height="45px"
            type="password"
            maxLength={1}
            onChange={onPasswordChange}
            isValid={validations[order]}
          />
        ))}
        {Array.from({ length: 2 }).map((_, index) => (
          <Input
            key={index}
            value="."
            width="43px"
            height="45px"
            type="password"
            isValid={true}
            disable={true}
            readonly={true}
          />
        ))}
      </InputContainer>
    </LabeledInput>
  );
}

export default PasswordInput;
