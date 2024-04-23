import PaymentsFormTitle from './common/PaymentsFormTitle';
import PaymentsSelectField from './common/PaymentsSelectField';

import {
  FormSection,
  InputFieldContainer,
  InputForm,
} from './style/FormSection';

const CardCompanyFormSection = () => {
  const options = [
    'BC카드',
    '신한카드',
    '카카오뱅크',
    '현대카드',
    '우리카드',
    '롯데카드',
    '하나카드',
    '국민카드',
  ];
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
          ></PaymentsSelectField>
        </InputFieldContainer>
      </InputForm>
    </FormSection>
  );
};
export default CardCompanyFormSection;
