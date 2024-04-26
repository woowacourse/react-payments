import { useEffect, useRef, useState } from 'react';
import useInput from '../hooks/useInput';
import validateInputAndSetErrorMessage from '../domains/validateInputAndSetErrorMessage';
import { validateExpired, formatMonth } from '../utils/validateExpirationDate';
import checkError from '../domains/checkError';

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

const ExpirationDateFormSection = ({
  changeExpiration,
  changeIsValid,
}: {
  changeExpiration: ({ month, year }: ChangeExpirationProps) => void;
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
    inputLength: OPTION.expirationDateInputCount,
    maxLength: OPTION.expirationDateMaxLength,
    regex: REGEX.allNumbers,
    errorText: ERROR_MESSAGE.onlyNumber,
  });

  const [hasNoAllFocus, setHasNoAllFocus] = useState(true);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleInputChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.value.length === OPTION.expirationDateMaxLength) {
      if (inputRefs[index].current) {
        inputRefs[index + 1].current?.focus();
      }
    }
  };

  useEffect(() => {
    formatMonth({
      inputState,
      setInputState,
    });
  }, [inputState[0].hasFocus]);

  useEffect(() => {
    changeExpiration({ month: inputState[0].value, year: inputState[1].value });
    setHasNoAllFocus(
      Object.values(inputState).every((field) => !field.hasFocus),
    );
  }, [inputState]);

  useEffect(() => {
    resetErrors();
    if (hasNoAllFocus) {
      validateInputAndSetErrorMessage({
        inputState,
        setInputState,
        setErrorMessage,
        errorText: ERROR_MESSAGE.expiryFormat,
        elseValidator: () => validateExpired({ inputState, setErrorMessage }),
      });
      changeIsValid({
        state: 'expirationDate',
        isValid: checkError(inputState),
      });
    }
  }, [hasNoAllFocus]);

  return (
    <FormSection>
      <PaymentsFormTitle
        title="카드 유효기간을 입력해 주세요"
        subTitle="월/년도(MM/YY)를 순서대로 입력해 주세요."
      />
      <InputForm>
        <Label>유효기간</Label>
        <InputFieldContainer className="input-field-container">
          {['MM', 'YY'].map((placeholderText, index) => (
            <PaymentsInputField
              key={index}
              placeholder={placeholderText}
              maxLength={OPTION.cardNumberMaxLength}
              value={inputState[index].value}
              hasError={inputState[index].hasError}
              handleValueChange={(e) => {
                handleValueChange(e, index), handleInputChange(index, e);
              }}
              handleOnFocus={() => setFocus(index)}
              handleOnBlur={() => setBlur(index)}
              ref={inputRefs[index]}
            />
          ))}
        </InputFieldContainer>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </InputForm>
    </FormSection>
  );
};

export default ExpirationDateFormSection;
