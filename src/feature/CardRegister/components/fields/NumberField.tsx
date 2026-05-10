import styled from 'styled-components';

import Input from '@/common/components/Input/Input';
import type {CardRegisterInputProps} from '@/feature/CardRegister/types/cardRegisterInputProps';
import {useInputFocusMove} from '@/feature/CardRegister/hooks/useInputFocusMove';
import InputContainer from './InputContainer';
import {FieldErrorMessage, FieldLayout} from '../styles/inputFieldStyles';

type NumberFieldProps = {
  inputProps: CardRegisterInputProps[];
  errorMessage: string;
  errorIndex: number;
};

const NumberField = ({inputProps, errorMessage, errorIndex}: NumberFieldProps) => {
  const {setInputRef, handleChange, handleKeyDown} = useInputFocusMove(inputProps);

  return (
    <InputContainer
      title='결제할 카드 번호를 입력해 주세요'
      description='본인 명의의 카드만 결제 가능합니다.'
      label='카드 번호'
    >
      <FieldLayout>
        <InputWrapper $columns={inputProps.map(({maxLength}) => `${maxLength}fr`).join(' ')}>
          {inputProps.map((props, index) => (
            <CardNumberInput
              key={index}
              {...props}
              ref={setInputRef(index)}
              strokeMode={index === errorIndex ? 'error' : 'default'}
              onChange={(event) => handleChange(index, event)}
              onKeyDown={(event) => handleKeyDown(index, event)}
            />
          ))}
        </InputWrapper>

        <FieldErrorMessage>{errorMessage}</FieldErrorMessage>
      </FieldLayout>
    </InputContainer>
  );
};

const InputWrapper = styled.div<{$columns: string}>`
  display: grid;
  grid-template-columns: ${({$columns}) => $columns};
  gap: 8px;
`;

const CardNumberInput = styled(Input)`
  box-sizing: border-box;
  width: 100%;
  height: 32px;
`;

export default NumberField;
