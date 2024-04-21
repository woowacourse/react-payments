import { useEffect } from 'react';
import styled from 'styled-components';
import useInput from '../hooks/useInput';

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

const PaymentsInputFieldUppercase = styled(PaymentsInputField)`
  text-transform: uppercase;
`;

const NameFormSection = ({
  changeName,
}: {
  changeName: (name: string) => void;
}) => {
  const {
    inputState,
    errorMessage,
    handleValueChange,
    setFocus,
    setBlur,
    resetErrors,
  } = useInput({
    inputLength: OPTION.nameInputCount,
    maxLength: OPTION.nameMaxLength,
    regex: REGEX.name,
    errorText: ERROR_MESSAGE.onlyEnglish,
  });

  useEffect(() => {
    resetErrors();
  }, [inputState[0].hasFocus]);

  useEffect(() => {
    changeName(inputState[0].value);
  }, [inputState[0].value]);

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
          />
        </InputFieldContainer>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </InputForm>
    </FormSection>
  );
};

export default NameFormSection;
