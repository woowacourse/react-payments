import { useEffect } from 'react';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import validateAndCheckError from '../domains/validateAndCheckError';
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

const PaymentsInputFieldUppercase = styled(PaymentsInputField)`
  text-transform: uppercase;
`;

const NameFormSection = ({
  changeName,
  changeIsValid,
}: {
  changeName: (name: string) => void;
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
    inputLength: OPTION.nameInputCount,
    maxLength: OPTION.nameMaxLength,
    regex: REGEX.name,
    errorText: ERROR_MESSAGE.onlyEnglish,
    betweenMaxLength: true,
  });

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      validateAndCheckError({
        inputState,
        setInputState,
        setErrorMessage,
        changeIsValid,
        stateText: 'name',
        errorText: ERROR_MESSAGE.nameOutOfRange,
      });
    }
  };

  useEffect(() => {
    resetErrors();
    if (!inputState[0].hasFocus)
      validateAndCheckError({
        inputState,
        setInputState,
        setErrorMessage,
        changeIsValid,
        stateText: 'name',
        errorText: ERROR_MESSAGE.nameOutOfRange,
      });
  }, [inputState[0].hasFocus]);

  useEffect(() => {
    changeName(inputState[0].value);
  }, [inputState[0].value]);

  useEffect(() => {
    changeIsValid({
      state: 'name',
      isValid: checkError(inputState),
    });
  }, [!inputState[0].hasFocus]);

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
            value={inputState[0].value}
            hasError={inputState[0].hasError}
            handleValueChange={(e) => handleValueChange(e, 0)}
            handleOnFocus={() => setFocus(0)}
            handleOnBlur={() => setBlur(0)}
            onEnter={(e) => handleKeyPress(e)}
          />
        </InputFieldContainer>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </InputForm>
    </FormSection>
  );
};

export default NameFormSection;
