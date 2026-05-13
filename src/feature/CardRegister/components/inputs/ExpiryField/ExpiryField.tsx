import Input from '@/common/components/Input/Input';
import styled from 'styled-components';
import {useSequentialInputFocus} from '@/feature/CardRegister/hooks/ui/useSequentialInputFocus';
import type {ExpiryInputProps} from '../shared.types';
import InputContainer from '../InputContainer/InputContainer';
import {FieldErrorMessage, FieldLayout} from '../styles/inputFieldStyles';

type ExpiryFieldProps = {
  inputProps: ExpiryInputProps;
  errorMessage: string;
  errorIndex: number;
};

const ExpiryField = ({inputProps, errorMessage, errorIndex}: ExpiryFieldProps) => {
  const {month, year} = inputProps;
  const [monthInputProps, yearInputProps] = useSequentialInputFocus([month, year]);

  return (
    <InputContainer
      title='카드 유효기간을 입력해 주세요'
      description='월/년도(MMYY)를 순서대로 입력해 주세요.'
      label='유효기간'
      labelFor='card-expiry-month'
    >
      <FieldLayout>
        <InputWrapper>
          <ExpiryInput
            id='card-expiry-month'
            {...monthInputProps}
            strokeMode={errorIndex === 0 ? 'error' : 'default'}
          />
          <ExpiryInput
            id='card-expiry-year'
            {...yearInputProps}
            strokeMode={errorIndex === 1 ? 'error' : 'default'}
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
