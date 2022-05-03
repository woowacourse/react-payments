import styled from 'styled-components';
import { useContext } from 'react';
import LabeledInput from '../../Atoms/LabeledInput';
import Input from '../../Atoms/Input';
import { PasswordContext } from '../../../context/PasswordContext';
import { COUNT } from '../../../constant';

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 193px;
  gap: 7px;
`;

function PasswordInput() {
  const { password, validations, inputRefs, onPasswordChange } =
    useContext(PasswordContext);

  return (
    <LabeledInput text="카드 비밀번호">
      <InputContainer>
        {Object.keys(password).map(order => (
          <Input
            key={order}
            name={order}
            ref={inputRefs[order]}
            value={password[order]}
            width="43px"
            height="45px"
            type="password"
            maxLength={1}
            onChange={onPasswordChange}
            isValid={validations[order]}
          />
        ))}
        {Array.from({ length: COUNT.PASSWORD_DISABLE_COUNT }).map(
          (_, index) => (
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
          )
        )}
      </InputContainer>
    </LabeledInput>
  );
}

export default PasswordInput;
