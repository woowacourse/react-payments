import React, { useEffect, useState } from 'react';

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

const nowDate = new Date();
const year = nowDate.getFullYear().toString().slice(2, 4);
const month = (nowDate.getMonth() + 1).toString().padStart(2, '0');
const now = year + month;

const ExpirationDateFormSection = ({ ...props }) => {
  const { changeExpiration } = props;
  const initializeInputFieldState = (length: number) => {
    return Array.from({ length }, (_, index) => ({
      value: '',
      hasError: false,
      hasFocus: index === 0,
      isFilled: false,
    })).reduce((acc, curr, index) => {
      acc[index] = curr;
      return acc;
    }, {} as InputStates);
  };

  const regex = REGEX.allNumbers;

  const [inputState, setInputState] = useState<InputStates>(
    initializeInputFieldState(OPTION.expirationDateInputCount),
  );
  const [errorMessage, setErrorMessage] = useState('');
  const [hasNoFocus, setHasNoFocus] = useState(true);

  const handleValueChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newValue = e.target.value;
    const isFilled = newValue.length === OPTION.expirationDateMaxLength;

    if (
      newValue.length <= OPTION.expirationDateMaxLength &&
      !regex.test(newValue)
    ) {
      setInputState((prevState) => ({
        ...prevState,
        [index]: {
          ...prevState[index],
          value: newValue.slice(0, newValue.length - 1),
          hasError: true,
        },
      }));
      setErrorMessage(ERROR_MESSAGE.onlyNumber);
    } else if (newValue.length > OPTION.expirationDateMaxLength) {
      setInputState((prevState) => ({
        ...prevState,
        [index]: {
          ...prevState[index],
          value: newValue.slice(0, OPTION.expirationDateMaxLength),
          hasError: false,
        },
      }));
    } else {
      setInputState((prevState) => ({
        ...prevState,
        [index]: {
          ...prevState[index],
          value: newValue,
          hasError: false,
          isFilled: isFilled,
        },
      }));
    }
  };

  const setFocus = (index: number) => {
    setInputState((prevState) => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        hasFocus: true,
      },
    }));
  };

  const setBlur = (index: number) => {
    setInputState((prevState) => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        hasFocus: false,
      },
    }));
  };

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

  useEffect(() => {
    formatMonth();
  }, [inputState[0].hasFocus]);

  useEffect(() => {
    changeExpiration({ month: inputState[0].value, year: inputState[1].value });
    setHasNoFocus(Object.values(inputState).every((field) => !field.hasFocus));
  }, [inputState]);

  useEffect(() => {
    resetErrors();
    if (hasNoFocus) {
      handleValidate();
    }
  }, [hasNoFocus]);

  const resetErrors = () => {
    const newState = Object.keys(inputState).reduce<InputStates>((acc, key) => {
      const field = inputState[key];
      acc[key] = { ...field, hasError: false };
      return acc;
    }, {});

    setInputState(newState);
    setErrorMessage('');
  };

  const validateExpired = () => {
    const expireDate = +(inputState[1].value + inputState[0].value);
    const nowDate = +now;

    if (nowDate - expireDate > 0) {
      inputState[0].hasError = true;
      inputState[1].hasError = true;
      setErrorMessage(ERROR_MESSAGE.expiredCard);
    } else {
      setErrorMessage('');
    }
  };

  const handleValidate = () => {
    let hasAnyError = false;

    const newState = Object.keys(inputState).reduce<InputStates>((acc, key) => {
      const field = inputState[key];
      if (!field.isFilled) {
        acc[key] = { ...field, hasError: true };
        hasAnyError = true;
      } else {
        acc[key] = field;
      }
      return acc;
    }, {});

    setInputState(newState);

    if (hasAnyError) {
      setErrorMessage(ERROR_MESSAGE.expiryFormat);
    } else {
      validateExpired();
    }
  };

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
