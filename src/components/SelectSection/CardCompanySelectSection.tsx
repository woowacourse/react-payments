import InputSection from '../common/InputSection/InputSection';
import SelectField from '../common/SelectField/SelectField';
import { MouseEventHandler } from 'react';

const CARD_COMPANY_SELECT_TEXT = {
  title: '카드사를 선택해주세요',
  description: '현재 국내 카드사만 가능합니다',
  subtitle: '',
};

//BC카드,신한카드,카카오뱅크,현대카드,우리카드,롯데카드,하나카드,국민카드
//label과 value는 동일하게 설정
const CARD_COMPANY = [
  { label: 'BC카드', value: 'BC카드' },
  { label: '신한카드', value: '신한카드' },
  { label: '카카오뱅크', value: '카카오뱅크' },
  { label: '현대카드', value: '현대카드' },
  { label: '우리카드', value: '우리카드' },
  { label: '롯데카드', value: '롯데카드' },
  { label: '하나카드', value: '하나카드' },
  { label: '국민카드', value: '국민카드' },
];

type CardCompanySelectSectionProps = {
  cardCompany: string;
  setCardCompany: (value: string) => void;
  handleMouseDown: MouseEventHandler<HTMLSelectElement>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const CardCompanySelectSection = ({
  cardCompany,
  setCardCompany,
  handleMouseDown,
  onChange,
}: CardCompanySelectSectionProps) => {
  const changeCardCompany = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCardCompany(e.target.value);
    onChange(e);
  };

  return (
    <>
      <InputSection
        title={CARD_COMPANY_SELECT_TEXT.title}
        description={CARD_COMPANY_SELECT_TEXT.description}
        subtitle={CARD_COMPANY_SELECT_TEXT.subtitle}
      >
        <SelectField
          name="CardCompany"
          value={cardCompany}
          onChange={changeCardCompany}
          onMouseDown={handleMouseDown}
          placeholder="카드사를 선택해주세요"
          options={CARD_COMPANY}
        />
      </InputSection>
    </>
  );
};

export default CardCompanySelectSection;
