import { useEffect } from 'react';
import useSelect from '../hooks/useSelect';

import PaymentsFormTitle from './common/PaymentsFormTitle';
import PaymentsSelectField from './common/PaymentsSelectField';

import ERROR_MESSAGE from '../constants/errorMessage';
import OPTION from '../constants/option';

import {
  FormSection,
  InputFieldContainer,
  InputForm,
} from './style/FormSection';

const CardCompanyFormSection = ({
  changeCardCompany,
}: {
  changeCardCompany: (password: string) => void;
}) => {
  const { inputState, handleValueChange, setFocus, setBlur, resetErrors } =
    useSelect({
      inputLength: OPTION.cardCompanyInputCount,
      errorText: ERROR_MESSAGE.notChoiceCardCompany,
    });

  const options = [
    ['BC카드', 'BC'],
    ['신한카드', 'shinhan'],
    ['카카오뱅크', 'kakao'],
    ['현대카드', 'hyundai'],
    ['우리카드', 'woori'],
    ['롯데카드', 'lotte'],
    ['하나카드', 'kebhana'],
    ['국민카드', 'kbstar'],
  ];

  useEffect(() => {
    changeCardCompany(inputState[0].value);
  }, [inputState[0].value]);

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
            options={options}
            value={inputState[0].value}
            hasError={inputState[0].hasError}
            handleOnFocus={() => setFocus(0)}
            handleOnBlur={() => setBlur(0)}
            handleValueChange={(e) => handleValueChange(e, 0)}
          ></PaymentsSelectField>
        </InputFieldContainer>
      </InputForm>
    </FormSection>
  );
};
export default CardCompanyFormSection;
