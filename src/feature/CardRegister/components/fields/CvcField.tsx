import Input from '@/common/components/Input/Input';
import styled from 'styled-components';
import type {CardRegisterInputProps} from '@/feature/CardRegister/types/cardRegisterInputProps';
import InputContainer from './InputContainer';
import {FieldErrorMessage, FieldLayout} from '../styles/inputFieldStyles';

type CvcFieldProps = {
  inputProps: CardRegisterInputProps;
  errorMessage: string;
};

const CvcField = ({inputProps, errorMessage}: CvcFieldProps) => {
  return (
    <InputContainer title='CVC 번호를 입력해 주세요' label='CVC'>
      <FieldLayout>
        <InputWrapper>
          <CvcInput {...inputProps} strokeMode={errorMessage ? 'error' : 'default'} />
        </InputWrapper>
        <FieldErrorMessage>{errorMessage}</FieldErrorMessage>
      </FieldLayout>
    </InputContainer>
  );
};

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 14px;
`;

const CvcInput = styled(Input)`
  box-sizing: border-box;
  width: 100%;
  height: 32px;
`;

export default CvcField;
