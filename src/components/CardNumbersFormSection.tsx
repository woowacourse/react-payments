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

const CardNumbersFormSection = ({ ...props }) => {
  const { changeCardNumber } = props;
  const initializeInputFieldState = (length: number) => {
    const obj: InputStates = {};
    for (let i = 0; i < length; i++) {
      obj[i] = {
        value: '',
        hasError: false,
        hasFocus: i === 0,
        isFilled: false,
      };
    }
    return obj;
  };

  const [inputState, setInputState] = useState<InputStates>(
    initializeInputFieldState(OPTION.cardNumberInputCount),
  );
  const [errorMessage, setErrorMessage] = useState('');
  const [hasNoFocus, setHasNoFocus] = useState(true);

  const handleValueChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newValue = e.target.value;
    const isFilled = newValue.length === OPTION.cardNumberMaxLength;

    if (
      newValue.length <= OPTION.cardNumberMaxLength &&
      !REGEX.numbers.test(newValue)
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
    } else if (newValue.length > OPTION.cardNumberMaxLength) {
      setInputState((prevState) => ({
        ...prevState,
        [index]: {
          ...prevState[index],
          value: newValue.slice(0, OPTION.cardNumberMaxLength),
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

  const handleOnFocus = (index: number) => {
    setInputState((prevState) => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        hasFocus: true,
      },
    }));
  };

  const handleOnBlur = (index: number) => {
    setInputState((prevState) => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        hasFocus: false,
      },
    }));
  };

  useEffect(() => {
    changeCardNumber([
      inputState[0].value,
      inputState[1].value,
      inputState[2].value,
      inputState[3].value,
    ]);
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
      setErrorMessage(ERROR_MESSAGE.cardNumberOutOfRange);
    } else {
      setErrorMessage('');
    }
  };

  return (
    <FormSection>
      <PaymentsFormTitle
        title="결제할 카드 번호를 입력해 주세요"
        subTitle="본인 명의의 카드만 결제 가능합니다."
      />
      <InputForm>
        <Label>카드번호</Label>
        <InputFieldContainer className="input-field-container">
          {[...Array(OPTION.cardNumberInputCount)].map((_, index) => (
            <PaymentsInputField
              key={index}
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
  );
};

export default CardNumbersFormSection;
