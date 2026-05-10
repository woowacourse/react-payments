import Input from '@/common/components/Input/Input';
import styled from 'styled-components';
import {useInputFocusMove} from '@/feature/CardRegister/hooks/useInputFocusMove';
import type {ExpiryInputProps} from '@/feature/CardRegister/types/cardRegisterInputProps';
import InputContainer from './InputContainer';
import {FieldErrorMessage, FieldLayout} from '../styles/inputFieldStyles';

type ExpiryFieldProps = {
  inputProps: ExpiryInputProps;
  errorMessage: string;
  errorIndex: number;
};

const ExpiryField = ({inputProps, errorMessage, errorIndex}: ExpiryFieldProps) => {
  const {month, year} = inputProps;
  const expiryInputs = [month, year];
  const {setInputRef, handleChange, handleKeyDown} = useInputFocusMove(expiryInputs);

  return (
    <InputContainer
      title='카드 유효기간을 입력해 주세요'
      description='월/년도(MMYY)를 순서대로 입력해 주세요.'
      label='유효기간'
    >
      <FieldLayout>
        <InputWrapper>
          <ExpiryInput
            {...month}
            ref={setInputRef(0)}
            strokeMode={errorIndex === 0 ? 'error' : 'default'}
            onChange={(event) => handleChange(0, event)}
          />
          <ExpiryInput
            {...year}
            ref={setInputRef(1)}
            strokeMode={errorIndex === 1 ? 'error' : 'default'}
            onChange={(event) => handleChange(1, event)}
            onKeyDown={(event) => handleKeyDown(1, event)}
          />
        </InputWrapper>

        <FieldErrorMessage>{errorMessage}</FieldErrorMessage>
      </FieldLayout>
    </InputContainer>
  );
};

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
`;

const ExpiryInput = styled(Input)`
  box-sizing: border-box;
  width: 100%;
  height: 32px;
`;

export default ExpiryField;
