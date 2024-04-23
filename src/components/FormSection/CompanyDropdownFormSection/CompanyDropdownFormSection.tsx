import PaymentsFormTitle from '../../common/PaymentsFormTitle/PaymentsFormTitle';

import * as Styled from '../FormSection.styled';
import PaymentsDropdown from '../../common/PaymentsDropdown/PaymentsDropdown';
import { COMPANY_TABLE } from '../../../constants/table';

interface CompanyDropdownFormSectionProps {
  cardInfo: CardInfo;
  dispatchCardInfo: React.Dispatch<CardInfoAction>
}

const CompanyDropdownFormSection = (props: CompanyDropdownFormSectionProps) => {
  const { cardInfo, dispatchCardInfo } = props
  const changeOption = (cardCompany: CardCompany) => {
    dispatchCardInfo({ type: 'SET_CARD_COMPANY_VALUE', value: cardCompany })
    dispatchCardInfo({ type: 'SET_CARD_COMPANY_COMPLETED', value: true })
  }

  return (
    <Styled.FormSection>
      <PaymentsFormTitle
        title="카드사를 선택해 주세요"
        subTitle="현재 국내 카드사만 가능합니다."
      />
      <Styled.InputForm>
        <PaymentsDropdown changeOption={changeOption} value={cardInfo.cardCompany.value} placeholder={'카드사를 선택해 주세요'} options={Object.keys(COMPANY_TABLE)} />
        <Styled.ErrorMessage></Styled.ErrorMessage>
      </Styled.InputForm>
    </Styled.FormSection>
  );
}

export default CompanyDropdownFormSection;
