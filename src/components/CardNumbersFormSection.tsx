import { useEffect, useState, useRef } from 'react';
import useInput from '../hooks/useInput';
import validateAndCheckError from '../domains/validateAndCheckError';

import PaymentsFormTitle from './common/PaymentsFormTitle';
import PaymentsInputField from './common/PaymentsInputField';
import ERROR_MESSAGE from '../constants/errorMessage';

import { OPTION } from '../constants/option';
import REGEX from '../constants/regex';

import {
  FormSection,
  InputFieldContainer,
  InputForm,
  Label,
  ErrorMessage,
} from './style/FormSection';

const CardNumbersFormSection = ({
  changeCardNumber,
  changeIsValid,
}: {
  changeCardNumber: (cardNumber: string[]) => void;
  changeIsValid: ({ state, isValid }: isValidProps) => void;
}) => {
  const {
    inputState,
    errorMessage,
    setInputState,
    setErrorMessage,
    handleValueChange,
    setFocus,
    setBlur,
    resetErrors,
  } = useInput({
    inputLength: OPTION.cardNumberInputCount,
    maxLength: OPTION.cardNumberMaxLength,
    regex: REGEX.numbers,
    errorText: ERROR_MESSAGE.onlyNumber,
  });

  const [hasNoAllFocus, setHasNoAllFocus] = useState(true);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleInputChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.value.length === OPTION.cardNumberMaxLength) {
      if (inputRefs[index].current) {
        inputRefs[index + 1].current?.focus();
      }
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      validateAndCheckError({
        inputState,
        setInputState,
        setErrorMessage,
        changeIsValid,
        stateText: 'cardNumber',
        errorText: ERROR_MESSAGE.cardNumberOutOfRange,
      });
    }
  };

  useEffect(() => {
    changeCardNumber([
      inputState[0].value,
      inputState[1].value,
      inputState[2].value,
      inputState[3].value,
    ]);
    setHasNoAllFocus(
      Object.values(inputState).every((field) => !field.hasFocus),
    );
  }, [inputState]);

  useEffect(() => {
    resetErrors();
    if (hasNoAllFocus) {
      validateAndCheckError({
        inputState,
        setInputState,
        setErrorMessage,
        changeIsValid,
        stateText: 'cardNumber',
        errorText: ERROR_MESSAGE.cardNumberOutOfRange,
      });
    }
  }, [hasNoAllFocus]);

  return (
    <FormSection>
      <PaymentsFormTitle
        title="결제할 카드 번호를 입력해 주세요"
        subTitle="본인 명의의 카드만 결제 가능합니다."
      />
      <InputForm>
        <Label>카드번호</Label>
        <InputFieldContainer className="input-field-container">
          {Array.from({ length: OPTION.cardNumberInputCount }).map(
            (_, index) => (
              <PaymentsInputField
                key={index}
                placeholder="1234"
                maxLength={OPTION.cardNumberMaxLength}
                value={inputState[index].value}
                hasError={inputState[index].hasError}
                handleValueChange={(e) => {
                  handleValueChange(e, index), handleInputChange(index, e);
                }}
                handleOnFocus={() => setFocus(index)}
                handleOnBlur={() => setBlur(index)}
                onEnter={(e) => handleKeyPress(e)}
                ref={inputRefs[index]}
              />
            ),
          )}
        </InputFieldContainer>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </InputForm>
    </FormSection>
  );
};

export default CardNumbersFormSection;
