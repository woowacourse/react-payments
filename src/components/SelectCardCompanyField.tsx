import { CARD_COMPANY_CATEGORIES } from '../constants/cardCompany';
import { CardCompany } from '../types/card';
import FieldTitle from './FieldTitle';
import SelectBox from './SelectBox';
import { FieldContainer } from '../style/container.style';

interface Props {
  handleSelect: (value: CardCompany) => void;
}

export default function SelectCardCompanyField({ handleSelect }: Props) {
  const cardCompanies = CARD_COMPANY_CATEGORIES;

  const handleSelectCardCompany = (value: CardCompany) => {
    handleSelect({
      ...value,
    });
    console.log('select', value);
  };

  return (
    <>
      <FieldContainer>
        <FieldTitle
          title="카드사를 선택해 주세요"
          subtitle="현재 국내 카드사만 가능합니다."
        />
        <SelectBox options={cardCompanies} onChange={handleSelectCardCompany} />
      </FieldContainer>
    </>
  );
}
