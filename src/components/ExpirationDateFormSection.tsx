import React, { useEffect, useRef, useState } from "react";

import PaymentsFormTitle from "./common/PaymentsFormTitle";
import PaymentsInputField from "./common/PaymentsInputField";

import OPTION from "../constants/option";

import { FormSection, InputFieldContainer, InputForm, Label, ErrorMessage } from "./style/FormSection"

const nowDate = new Date();
const year = nowDate.getFullYear().toString().slice(2, 4)
const month = (nowDate.getMonth() + 1).toString().padStart(2, '0')
const now = year + month

const ExpirationDateFormSection = ({ changeExpiration }) => {
  const initializeInputFieldState = (length: number) => {
    const obj = {};
    for (let i = 0; i < length; i++) {
      obj[i] = {
        value: '',
        hasError: false,
        hasFocus: i === 0,
        isFilled: false,
      };
    }
    return obj;
  }

  const regex = /^\d*$/;
  const typeErrorMessage = "숫자만 입력 가능합니다.";

  const [inputState, setInputState] = useState<Record<number, InputState>>(initializeInputFieldState(OPTION.expirationDateInputCount));
  const [errorMessage, setErrorMessage] = useState('');

  const [hasNoError, setHasNoError] = useState(true);
  const [hasNoFocus, setHasNoFocus] = useState(true);

  const expirationMonthRef = useRef<HTMLInputElement>(null);
  const expirationYearRef = useRef<HTMLInputElement>(null);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = e.target.value;
    const isFilled = newValue.length === OPTION.expirationDateMaxLength;

    if (
      newValue.length <= OPTION.expirationDateMaxLength &&
      !regex.test(newValue)
    ) {
      setInputState(prevState => ({
        ...prevState,
        [index]:
        {
          ...prevState[index],
          value: newValue.slice(0, newValue.length - 1),
          hasError: true
        }
      }));
      setErrorMessage(typeErrorMessage);
    } else if (newValue.length > OPTION.expirationDateMaxLength) {
      setInputState(prevState => ({
        ...prevState,
        [index]:
        {
          ...prevState[index],
          value: newValue.slice(0, OPTION.expirationDateMaxLength),
          hasError: false
        }
      }));
    } else {
      setInputState(prevState => ({
        ...prevState,
        [index]:
        {
          ...prevState[index],
          value: newValue,
          hasError: false,
          isFilled: isFilled,
        }
      }));
    }
  };

  const handleOnFocus = (index: number) => {
    setInputState(prevState => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        hasFocus: true
      }
    }));
  };

  const handleOnBlur = (index: number) => {
    setInputState(prevState => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        hasFocus: false
      }
    }));
  };

  const formatMonth = () => {
    if (/^[1-9]$/.test(inputState[0].value)) {
      setInputState(prevState => ({
        ...prevState,
        0: {
          ...prevState[0],
          value: "0" + prevState[0].value,
          isFilled: true,
        }
      }))
    } else if (!/^([0][1-9])|([1][0-2])$/.test(inputState[0].value) && inputState[0].value.length) {
      setInputState(prevState => ({
        ...prevState,
        0: {
          ...prevState[0],
          value: "12",
        }
      }))
    }
  }

  useEffect(() => {
    formatMonth();
  }, [inputState[0].hasFocus])

  useEffect(() => {
    changeExpiration({ month: inputState[0].value, year: inputState[1].value })
    setHasNoError(Object.values(inputState).every(field => !field.hasError))
    setHasNoFocus(Object.values(inputState).every(field => !field.hasFocus))
  }, [inputState])

  useEffect(() => {
    resetErrors();
    if (hasNoFocus) {
      handleValidate();
    }
  }, [hasNoFocus])


  const resetErrors = () => {
    const newState = Object.keys(inputState).reduce((acc, key) => {
      const field = inputState[key];
      acc[key] = { ...field, hasError: false };
      return acc;
    }, {});

    setInputState(newState);
    setErrorMessage("");
  }

  const validateExpired = () => {
    const expireDate = + (inputState[1].value + inputState[0].value)
    const nowDate = + now

    if (nowDate - expireDate > 0) {
      inputState[0].hasError = true;
      inputState[1].hasError = true;
      setErrorMessage("만료된 카드입니다.");
    } else {
      setErrorMessage("");
    }
  }

  const handleValidate = () => {
    let hasAnyError = false;

    const newState = Object.keys(inputState).reduce((acc, key) => {
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
      setErrorMessage("유효기간은 4자리(MM/YY) 숫자여야 합니다.");
    } else {
      validateExpired();
    }
  }

  return (
    <FormSection>
      <PaymentsFormTitle
        title="카드 유효기간을 입력해 주세요"
        subTitle="월/년도(MMYY)를 순서대로 입력해 주세요." />
      <InputForm>
        <Label>유효기간</Label>
        <InputFieldContainer className="input-field-container">
          <PaymentsInputField
            ref={expirationMonthRef}
            placeholder="MM"
            maxLength={OPTION.expirationDateMaxLength}
            value={inputState[0].value}
            hasError={inputState[0].hasError}
            handleValueChange={(e) => handleValueChange(e, 0)}
            handleOnFocus={() => handleOnFocus(0)}
            handleOnBlur={() => handleOnBlur(0)}
          />
          <PaymentsInputField
            ref={expirationYearRef}
            placeholder="YY"
            maxLength={OPTION.expirationDateMaxLength}
            value={inputState[1].value}
            hasError={inputState[1].hasError}
            handleValueChange={(e) => handleValueChange(e, 1)}
            handleOnFocus={() => handleOnFocus(1)}
            handleOnBlur={() => handleOnBlur(1)}
          />
        </InputFieldContainer>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </InputForm>
    </FormSection>
  )
}

export default ExpirationDateFormSection;