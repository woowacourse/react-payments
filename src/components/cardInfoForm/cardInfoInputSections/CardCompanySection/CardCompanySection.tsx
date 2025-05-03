import { useRef } from 'react';
import CardInputSection from '../CardInputSection/CardInputSection';
import CardCompanySelect from '../../cardInfoFields/CardCompanySelect/CardCompanySelect';

interface CardCompanySectionProps {
  cardCompany:
    | 'BC카드'
    | '신한카드'
    | '카카오뱅크'
    | '현대카드'
    | '우리카드'
    | '롯데카드'
    | '하나카드'
    | '국민카드'
    | undefined;
  handleChangeCardCompany: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  isValid: () => boolean;
}

function CardCompanySection({
  cardCompany,
  handleChangeCardCompany,
  isValid,
}: CardCompanySectionProps) {
  const showRef = useRef(false);

  if (!showRef.current && isValid()) {
    showRef.current = true;
  }
  const show = showRef.current;

  return (
    <>
      {show ? (
        <CardInputSection
          title="카드사를 선택해 주세요"
          description="현재 국내 카드사만 가능합니다."
          errorMessage={''}
        >
          <CardCompanySelect
            cardCompany={cardCompany}
            onChange={handleChangeCardCompany}
          />
        </CardInputSection>
      ) : null}
    </>
  );
}

export default CardCompanySection;
