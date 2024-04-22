import { useEffect, useState } from 'react';
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

const ExpirationDateFormSection = ({
  changeExpiration,
}: {
  changeExpiration: ({ month, year }: ChangeExpirationProps) => void;
}) => {
  const [hasNoAllFocus, setHasNoAllFocus] = useState(true);
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

  const formatMonth = () => {
    if (REGEX.oneToNine.test(inputState[0].value)) {
      setInputState((prevState) => ({
        ...prevState,
        0: {
          ...prevState[0],
          value: '0' + prevState[0].value,
          isFilled: true,
        },
      }));
    } else if (REGEX.zero.test(inputState[0].value)) {
      setInputState((prevState) => ({
        ...prevState,
        0: {
          ...prevState[0],
          value: OPTION.minMonth,
        },
      }));
    } else if (
      !REGEX.month.test(inputState[0].value) &&
      inputState[0].value.length
    ) {
      setInputState((prevState) => ({
        ...prevState,
        0: {
          ...prevState[0],
          value: OPTION.maxMonth,
        },
      }));
    }
  };

  const validateExpired = () => {
    const inputExpirationDate = new Date(
      `20${inputState[1].value}-${inputState[0].value}-01`,
    );
    const currentDate = new Date();

    if (inputExpirationDate < currentDate) {
      inputState[0].hasError = true;
      inputState[1].hasError = true;
      setErrorMessage(ERROR_MESSAGE.expiredCard);
    } else {
      setErrorMessage('');
    }
  };

  useEffect(() => {
    formatMonth();
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
        elseValidator: validateExpired,
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
          <PaymentsInputField
            placeholder="MM"
            maxLength={OPTION.expirationDateMaxLength}
            value={inputState[0].value}
            hasError={inputState[0].hasError}
            handleValueChange={(e) => handleValueChange(e, 0)}
            handleOnFocus={() => setFocus(0)}
            handleOnBlur={() => setBlur(0)}
          />
          <PaymentsInputField
            placeholder="YY"
            maxLength={OPTION.expirationDateMaxLength}
            value={inputState[1].value}
            hasError={inputState[1].hasError}
            handleValueChange={(e) => handleValueChange(e, 1)}
            handleOnFocus={() => setFocus(1)}
            handleOnBlur={() => setBlur(1)}
          />
        </InputFieldContainer>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </InputForm>
    </FormSection>
  );
};

export default ExpirationDateFormSection;
