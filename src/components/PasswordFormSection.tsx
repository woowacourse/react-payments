import { useEffect } from 'react';
import useInput from '../hooks/useInput';
import validateInputAndSetErrorMessage from '../domains/validateInputAndSetErrorMessage';

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

const PasswordFormSection = () => {
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
    inputLength: OPTION.passwordInputCount,
    maxLength: OPTION.passwordMaxLength,
    regex: REGEX.numbers,
    errorText: ERROR_MESSAGE.onlyNumber,
  });

  useEffect(() => {
    resetErrors();
    if (!inputState[0].hasFocus)
      validateInputAndSetErrorMessage({
        inputState,
        setInputState,
        setErrorMessage,
        errorText: ERROR_MESSAGE.passwordOutOfRange,
      });
  }, [inputState[0].hasFocus]);

  return (
    <FormSection>
      <PaymentsFormTitle
        title="비밀번호를 입력해 주세요"
        subTitle="앞의 2자리를 입력해주세요"
      />
      <InputForm>
        <Label>비밀번호 앞 2자리</Label>
        <InputFieldContainer className="input-field-container">
          <PaymentsInputField
            className="password-form-section"
            maxLength={OPTION.passwordMaxLength}
            value={inputState[0].value}
            hasError={inputState[0].hasError}
            handleValueChange={(e) => handleValueChange(e, 0)}
            handleOnFocus={() => setFocus(0)}
            handleOnBlur={() => setBlur(0)}
            type="password"
          />
        </InputFieldContainer>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </InputForm>
    </FormSection>
  );
};

export default PasswordFormSection;
