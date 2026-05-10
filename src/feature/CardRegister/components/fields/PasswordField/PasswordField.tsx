import Input from '@/common/components/Input/Input';
import styled from 'styled-components';
import type {CardRegisterInputProps} from '@/feature/CardRegister/types/cardRegisterInputProps';
import InputContainer from '../InputContainer/InputContainer';
import {FieldErrorMessage, FieldLayout} from '../../styles/inputFieldStyles';

type PasswordFieldProps = {
  inputProps: CardRegisterInputProps;
  errorMessage: string;
};

const PasswordField = ({inputProps, errorMessage}: PasswordFieldProps) => {
  return (
    <InputContainer title='비밀번호를 입력해 주세요' description='앞의 2자리를 입력해주세요' label='비밀번호 앞 2자리'>
      <FieldLayout>
        <InputWrapper>
          <PasswordInput {...inputProps} strokeMode={errorMessage ? 'error' : 'default'} />
        </InputWrapper>
        <FieldErrorMessage>{errorMessage}</FieldErrorMessage>
      </FieldLayout>
    </InputContainer>
  );
};

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
`;

const PasswordInput = styled(Input)`
  box-sizing: border-box;
  width: 100%;
  height: 32px;
`;

export default PasswordField;
