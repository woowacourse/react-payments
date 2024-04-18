import React, { useEffect, useRef, useState } from "react";

import PaymentsFormTitle from "./common/PaymentsFormTitle";
import PaymentsInputField from "./common/PaymentsInputField";

import OPTION from "../constants/option";

import { FormSection, InputFieldContainer, InputForm, Label, ErrorMessage } from "./style/FormSection"

const CardNumbersFormSection = ({ changeCardNumber }) => {
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

  const [inputState, setInputState] = useState<Record<number, InputState>>(initializeInputFieldState(OPTION.cardNumberInputCount));
  const [errorMessage, setErrorMessage] = useState('');

  const [hasNoError, setHasNoError] = useState(true);
  const [hasNoFocus, setHasNoFocus] = useState(true);

  const cardNumberRef1 = useRef<HTMLInputElement>(null);
  const cardNumberRef2 = useRef<HTMLInputElement>(null);
  const cardNumberRef3 = useRef<HTMLInputElement>(null);
  const cardNumberRef4 = useRef<HTMLInputElement>(null);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = e.target.value;
    const isFilled = newValue.length === OPTION.cardNumberMaxLength;

    if (
      newValue.length <= OPTION.cardNumberMaxLength &&
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
    } else if (newValue.length > OPTION.cardNumberMaxLength) {
      setInputState(prevState => ({
        ...prevState,
        [index]:
        {
          ...prevState[index],
          value: newValue.slice(0, OPTION.cardNumberMaxLength),
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

  useEffect(() => {
    changeCardNumber([inputState[0].value, inputState[1].value, inputState[2].value, inputState[3].value])
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
      setErrorMessage("카드번호는 16자의 숫자여야 합니다.");
    } else {
      setErrorMessage("");
    }
  }

  return (
    <FormSection>
      <PaymentsFormTitle
        title="결제할 카드 번호를 입력해 주세요"
        subTitle="본인 명의의 카드만 결제 가능합니다." />
      <InputForm>
        <Label>카드번호</Label>
        <InputFieldContainer className="input-field-container">
          {[...Array(OPTION.cardNumberInputCount)].map((_, index) => (
            <PaymentsInputField
              key={index}
              ref={eval(`cardNumberRef${index + 1}`)}
              placeholder="1234"
              maxLength={OPTION.cardNumberMaxLength}
              value={inputState[index].value}
              hasError={inputState[index].hasError}
              handleValueChange={(e) => handleValueChange(e, index)}
              handleOnFocus={() => handleOnFocus(index)}
              handleOnBlur={() => handleOnBlur(index)}
            />
          ))}
        </InputFieldContainer>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </InputForm>
    </FormSection>
  )
}

export default CardNumbersFormSection;