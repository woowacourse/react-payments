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

const CardNumbersFormSection = ({
  changeCardNumber,
}: {
  changeCardNumber: (cardNumber: string[]) => void;
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
    inputLength: OPTION.cardNumberInputCount,
    maxLength: OPTION.cardNumberMaxLength,
    regex: REGEX.numbers,
    errorText: ERROR_MESSAGE.onlyNumber,
  });
  const [hasNoAllFocus, setHasNoAllFocus] = useState(true);

  useEffect(() => {
    changeCardNumber([
      inputState[0].value,
      inputState[1].value,
      inputState[2].value,
      inputState[3].value,
    ]);
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
        errorText: ERROR_MESSAGE.cardNumberOutOfRange,
      });
    }
  }, [hasNoAllFocus]);

  return (
    <FormSection>
      <PaymentsFormTitle
        title="결제할 카드 번호를 입력해 주세요"
        subTitle="본인 명의의 카드만 결제 가능합니다."
      />
      <InputForm>
        <Label>카드번호</Label>
        <InputFieldContainer className="input-field-container">
          {Array.from({ length: OPTION.cardNumberInputCount }).map(
            (_, index) => (
              <PaymentsInputField
                key={index}
                placeholder="1234"
                maxLength={OPTION.cardNumberMaxLength}
                value={inputState[index].value}
                hasError={inputState[index].hasError}
                handleValueChange={(e) => handleValueChange(e, index)}
                handleOnFocus={() => setFocus(index)}
                handleOnBlur={() => setBlur(index)}
              />
            ),
          )}
        </InputFieldContainer>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </InputForm>
    </FormSection>
  );
};

export default CardNumbersFormSection;
