import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import PaymentsFormTitle from "./common/PaymentsFormTitle";
import PaymentsInputField from "./common/PaymentsInputField";

import OPTION from "../constants/option";

import { FormSection, InputFieldContainer, InputForm, Label, ErrorMessage } from "./style/FormSection"


const PaymentsInputFieldUppercase = styled(PaymentsInputField)`
  text-transform: uppercase;
`

const NameFormSection = ({ changeName }) => {

  const regex = /^[a-zA-Z]+ ?[a-zA-Z]*$/;
  const typeErrorMessage = "영어만 입력 가능합니다.";

  const [inputState, setInputState] = useState<InputState>({
    value: '',
    hasError: false,
    hasFocus: false,
    isFilled: false,
  });
  const [errorMessage, setErrorMessage] = useState('');

  const nameRef = useRef<HTMLInputElement>(null);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const isFilled = newValue.length === OPTION.nameMaxLength;

    if (
      newValue.length <= OPTION.nameMaxLength &&
      !regex.test(newValue)
    ) {
      setInputState(
        {
          ...inputState,
          value: newValue.slice(0, newValue.length - 1),
          hasError: true
        });
      setErrorMessage(typeErrorMessage);
    } else if (newValue.length > OPTION.nameMaxLength) {
      setInputState(
        {
          ...inputState,
          value: newValue.slice(0, OPTION.nameMaxLength),
          hasError: false
        }
      );
    } else {
      setInputState(
        {
          ...inputState,
          value: newValue,
          hasError: false,
          isFilled: isFilled,
        }
      );
    }
  };

  const handleOnFocus = () => {
    setInputState({
      ...inputState,
      hasFocus: true
    });
  };

  const handleOnBlur = () => {
    setInputState({
      ...inputState,
      hasFocus: false
    });
  };

  useEffect(() => {
    resetErrors();
  }, [inputState.hasFocus])

  useEffect(() => {
    changeName(inputState.value)
  }, [inputState.value])


  const resetErrors = () => {
    setInputState({
      ...inputState,
      hasError: false
    });
    setErrorMessage("");
  }


  return (
    <FormSection>
      <PaymentsFormTitle
        title="카드 소유자 이름을 입력해 주세요" />
      <InputForm>
        <Label>소유자 이름</Label>
        <InputFieldContainer className="input-field-container">
          <PaymentsInputFieldUppercase
            className="name-form-section"
            ref={nameRef}
            placeholder="FAMILY / GIVEN"
            maxLength={OPTION.nameMaxLength}
            value={inputState.value}
            hasError={inputState.hasError}
            handleValueChange={(e) => handleValueChange(e)}
            handleOnFocus={handleOnFocus}
            handleOnBlur={handleOnBlur}
          />
        </InputFieldContainer>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </InputForm>
    </FormSection>
  )
}

export default NameFormSection;