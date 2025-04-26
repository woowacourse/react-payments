import { CARD_COMPANY } from '../../constants';
import Dropdown2 from '../Dropdown/Dropdown2';
import { InputSection } from '../InputSection/InputSection';

export type CardCompanySectionProps = {
  value: string;
  onSelect: (value: string) => void;
};

export default function CardCompanySection({ value, onSelect }: CardCompanySectionProps) {
  return (
    <div>
      <InputSection.TitleWrapper>
        <InputSection.Title title="카드사를 선택해 주세요" />
        <InputSection.SubTitle title="현재 국내 카드사만 가능합니다." />
      </InputSection.TitleWrapper>
      <Dropdown2 placeholder="카드사를 선택해주세요" list={CARD_COMPANY} value={value} onSelect={onSelect} />
    </div>
  );
}
1;
