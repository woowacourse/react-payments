import { useEffect } from 'react';
import useInput from '../hooks/useInput';
import checkError from '../domains/checkError';
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

const CVCFormSection = ({
  changeCVC,
  changeIsValid,
}: {
  changeCVC: (cvc: string) => void;
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
    inputLength: OPTION.cvcInputCount,
    maxLength: OPTION.cvcMaxLength,
    regex: REGEX.numbers,
    errorText: ERROR_MESSAGE.onlyNumber,
  });

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      validateAndCheckError({
        inputState,
        setInputState,
        setErrorMessage,
        changeIsValid,
        stateText: 'cvc',
        errorText: ERROR_MESSAGE.cvcOutOfRange,
      });
    }
  };

  useEffect(() => {
    resetErrors();
    if (!inputState[0].hasFocus) {
      validateAndCheckError({
        inputState,
        setInputState,
        setErrorMessage,
        changeIsValid,
        stateText: 'cvc',
        errorText: ERROR_MESSAGE.cvcOutOfRange,
      });
    }
  }, [inputState[0].hasFocus]);

  useEffect(() => {
    changeCVC(inputState[0].value);
  }, [inputState[0].value]);

  useEffect(() => {
    changeIsValid({
      state: 'cvc',
      isValid: checkError(inputState),
    });
  }, [!inputState[0].hasFocus]);

  return (
    <FormSection>
      <PaymentsFormTitle title="CVC 번호를 입력해 주세요" />
      <InputForm>
        <Label>CVC</Label>
        <InputFieldContainer className="input-field-container">
          <PaymentsInputField
            className="cvc-form-section"
            placeholder="123"
            maxLength={OPTION.cvcMaxLength}
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
export default CVCFormSection;
