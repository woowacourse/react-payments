import { useEffect } from 'react';
import useSelect from '../hooks/useSelect';
import checkError from '../domains/checkError';

import PaymentsFormTitle from './common/PaymentsFormTitle';
import PaymentsSelectField from './common/PaymentsSelectField';

import ERROR_MESSAGE from '../constants/errorMessage';
import { OPTION, CARD_COMPANY } from '../constants/option';

import {
  FormSection,
  InputFieldContainer,
  InputForm,
} from './style/FormSection';

const CardCompanyFormSection = ({
  changeCardCompany,
  changeIsValid,
}: {
  changeCardCompany: (password: string) => void;
  changeIsValid: ({ state, isValid }: isValidProps) => void;
}) => {
  const { inputState, handleValueChange, setFocus, setBlur } = useSelect({
    inputLength: OPTION.cardCompanyInputCount,
    errorText: ERROR_MESSAGE.notChoiceCardCompany,
  });

  const handleKeyPress = (event: React.KeyboardEvent<HTMLSelectElement>) => {
    if (event.key === 'Enter') {
      changeIsValid({
        state: 'cardCompany',
        isValid: checkError(inputState),
      });
    }
  };

  useEffect(() => {
    changeCardCompany(inputState[0].value);
  }, [inputState[0].value]);

  useEffect(() => {
    changeIsValid({
      state: 'cardCompany',
      isValid: checkError(inputState),
    });
  }, [!inputState[0].hasFocus]);

  return (
    <FormSection>
      <PaymentsFormTitle
        title="카드사를 선택해 주세요"
        subTitle="현재 국내 카드사만 가능합니다."
      />
      <InputForm>
        <InputFieldContainer className="input-field-container">
          <PaymentsSelectField
            name="card-company"
            placeholder="카드사를 선택해주세요"
            options={CARD_COMPANY}
            value={inputState[0].value}
            hasError={inputState[0].hasError}
            handleOnFocus={() => setFocus(0)}
            handleOnBlur={() => setBlur(0)}
            handleValueChange={(e) => handleValueChange(e, 0)}
            onEnter={(e) => handleKeyPress(e)}
          ></PaymentsSelectField>
        </InputFieldContainer>
      </InputForm>
    </FormSection>
  );
};
export default CardCompanyFormSection;
