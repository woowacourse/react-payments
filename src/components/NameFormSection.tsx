import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import PaymentsFormTitle from './common/PaymentsFormTitle';
import PaymentsInputField from './common/PaymentsInputField';

import ERROR_MESSAGE from '../constants/errorMessage';
import OPTION from '../constants/option';
import REGEX from '../constants/regex';

import {
  FormSection,
  InputFieldContainer,
  InputForm,
  Label,
  ErrorMessage,
} from './style/FormSection';

const PaymentsInputFieldUppercase = styled(PaymentsInputField)`
  text-transform: uppercase;
`;

const NameFormSection = ({ ...props }) => {
  const { changeName } = props;

  const [inputState, setInputState] = useState<InputState>({
    value: '',
    hasError: false,
    hasFocus: false,
    isFilled: false,
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const isFilled = newValue.length === OPTION.nameMaxLength;

    if (newValue.length <= OPTION.nameMaxLength && !REGEX.name.test(newValue)) {
      setInputState({
        ...inputState,
        value: newValue.slice(0, newValue.length - 1),
        hasError: true,
      });
      setErrorMessage(ERROR_MESSAGE.onlyEnglish);
    } else if (newValue.length > OPTION.nameMaxLength) {
      setInputState({
        ...inputState,
        value: newValue.slice(0, OPTION.nameMaxLength),
        hasError: false,
      });
    } else {
      setInputState({
        ...inputState,
        value: newValue,
        hasError: false,
        isFilled: isFilled,
      });
    }
  };

  const setFocus = () => {
    setInputState({
      ...inputState,
      hasFocus: true,
    });
  };

  const setBlur = () => {
    setInputState({
      ...inputState,
      hasFocus: false,
    });
  };

  useEffect(() => {
    resetErrors();
  }, [inputState.hasFocus]);

  useEffect(() => {
    changeName(inputState.value);
  }, [inputState.value]);

  const resetErrors = () => {
    setInputState({
      ...inputState,
      hasError: false,
    });
    setErrorMessage('');
  };

  return (
    <FormSection>
      <PaymentsFormTitle title="카드 소유자 이름을 입력해 주세요" />
      <InputForm>
        <Label>소유자 이름</Label>
        <InputFieldContainer className="input-field-container">
          <PaymentsInputFieldUppercase
            className="name-form-section"
            placeholder="FAMILY / GIVEN"
            maxLength={OPTION.nameMaxLength}
            value={inputState.value}
            hasError={inputState.hasError}
            handleValueChange={(e) => handleValueChange(e)}
            handleOnFocus={setFocus}
            handleOnBlur={setBlur}
          />
        </InputFieldContainer>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </InputForm>
    </FormSection>
  );
};

export default NameFormSection;
