import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
  CARD_NUMBER_INPUT_TYPE,
  CardNumberInputType,
} from '../../../../config/inputField';
import { useFieldCompletion } from '../../../../hooks/useFieldCompletion';
import { useInputError } from '../../../../hooks/useInputError';
import { useInputFieldHandler } from '../../../../hooks/useInputFieldHandler';
import BaseInputField from '../../../ui/BaseInputField/BaseInputField';
import Input from '../../../ui/Input/Input';
import { InputFieldProps } from '../InputfieldProps';
import InputSection from '../../../ui/InputSection/InputSection';

interface onCardNumberChangeProps {
  name: string;
  value: string;
}

function CardNumberInputField({
  isFocused,
  inputValue,
  cardType,
  setInputValue,
  onComplete,
}: InputFieldProps<CardNumberInputType>) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const { errorTypes, errorMessage, validateInputError } = useInputError({
    inputValue,
  });

  const { onChange, onBlur } = useInputFieldHandler({
    hasError: Boolean(errorMessage),
    fieldName: 'cardNumber',
    inputRefs,
    validateInputError,
    setInputValue,
  });

  useFieldCompletion({
    fieldName: 'cardNumber',
    errorMessage,
    inputValue,
    onComplete,
  });

  const onCardNumberChange = ({ name, value }: onCardNumberChangeProps) => {
    onChange({ name, value });
    if (name === CARD_NUMBER_INPUT_TYPE[0]) {
      validateInputError(name, {
        errorType: 'noneCardType',
        isError: cardType === null,
      });
    }
  };

  useEffect(() => {
    if (isFocused) {
      inputRefs.current[0]?.focus();
    }
  }, []);

  return (
    <InputSection
      title="결제할 카드 번호를 입력해 주세요"
      caption="본인 명의의 카드만 결제 가능합니다."
    >
      <BaseInputField label="카드 번호" errorMessage={errorMessage}>
        {CARD_NUMBER_INPUT_TYPE.map((inputType, index) => (
          <InputWrapper key={inputType}>
            <Label htmlFor={`card-number-input-${inputType}`} />
            <Input
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              id={`card-number-input-${inputType}`}
              inputType="number"
              placeholder="1234"
              value={inputValue[inputType]}
              onChange={onCardNumberChange}
              onBlur={onBlur}
              name={inputType}
              isError={Boolean(errorTypes[inputType].length)}
            />
          </InputWrapper>
        ))}
      </BaseInputField>
    </InputSection>
  );
}

const InputWrapper = styled.div`
  width: 100%;
`;

const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export default CardNumberInputField;
