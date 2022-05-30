import styled from 'styled-components';
import LabeledInput from '../../Atoms/LabeledInput';
import Input from '../../Atoms/Input';
import { COUNT, INPUT_TITLE } from '../../../constant';
import { PasswordsInput } from 'types/SomeInput';
import { MutableRefObject, ChangeEvent } from 'react';

interface PasswordInputProps {
  password: PasswordsInput<string>;
  validations: PasswordsInput<boolean>;
  inputRefs: PasswordsInput<MutableRefObject<HTMLInputElement | null>>;
  onPasswordChange: (event?: ChangeEvent<HTMLInputElement>) => void;
}

function PasswordInput({ password, validations, inputRefs, onPasswordChange }: PasswordInputProps) {
  return (
    <LabeledInput text={INPUT_TITLE.PASSWORD}>
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
            maxLength={COUNT.PASSWORD_MAX_LENGTH}
            onChange={onPasswordChange}
            isValid={validations[order]}
          />
        ))}
        {Array.from({ length: COUNT.PASSWORD_DISABLE_COUNT }).map((_, index) => (
          <Input
            key={index}
            value="."
            width="43px"
            height="45px"
            type="password"
            isValid={true}
            disabled={true}
            readonly={true}
          />
        ))}
      </InputContainer>
    </LabeledInput>
  );
}

export default PasswordInput;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 193px;
  gap: 7px;
`;
