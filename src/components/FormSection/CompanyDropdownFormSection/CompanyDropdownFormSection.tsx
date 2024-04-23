import PaymentsFormTitle from '../../common/PaymentsFormTitle/PaymentsFormTitle';

import * as Styled from '../FormSection.styled';
import PaymentsDropdown from '../../common/PaymentsDropdown/PaymentsDropdown';
import { COMPANY_TABLE } from '../../../constants/table';

interface CompanyDropdownFormSectionProps {
  changeCompany: (company: CardCompany) => void;
  company: CardCompany;
}

const CompanyDropdownFormSection = ({ changeCompany, company }: CompanyDropdownFormSectionProps) => {

  return (
    <Styled.FormSection>
      <PaymentsFormTitle
        title="카드사를 선택해 주세요"
        subTitle="현재 국내 카드사만 가능합니다."
      />
      <Styled.InputForm>
        <PaymentsDropdown changeOption={changeCompany} value={company} placeholder={'카드사를 선택해 주세요'} options={Object.keys(COMPANY_TABLE)} />
        <Styled.ErrorMessage></Styled.ErrorMessage>
      </Styled.InputForm>
    </Styled.FormSection>
  );
};

export default CompanyDropdownFormSection;
