import { useEffect } from 'react';
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

const PasswordFormSection = ({
  changePassword,
  changeIsValid,
}: {
  changePassword: (password: string) => void;
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
    inputLength: OPTION.passwordInputCount,
    maxLength: OPTION.passwordMaxLength,
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
        stateText: 'password',
        errorText: ERROR_MESSAGE.passwordOutOfRange,
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
        stateText: 'password',
        errorText: ERROR_MESSAGE.passwordOutOfRange,
      });
  }, [inputState[0].hasFocus]);

  useEffect(() => {
    changeIsValid({
      state: 'password',
      isValid: checkError(inputState),
    });
  }, [!inputState[0].hasFocus]);

  useEffect(() => {
    changePassword(inputState[0].value);
  }, [inputState[0].value]);

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
            placeholder="••"
            maxLength={OPTION.passwordMaxLength}
            value={inputState[0].value}
            hasError={inputState[0].hasError}
            handleValueChange={(e) => handleValueChange(e, 0)}
            handleOnFocus={() => setFocus(0)}
            handleOnBlur={() => setBlur(0)}
            onEnter={(e) => handleKeyPress(e)}
            type="password"
          />
        </InputFieldContainer>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </InputForm>
    </FormSection>
  );
};

export default PasswordFormSection;
