import Dropdown2 from '../Dropdown/Dropdown2';
import { InputSection } from '../InputSection/InputSection';
const CARD_COMPANY = ['BC카드', '신한카드', '카카오뱅크', '현대카드', '우리카드', '롯데카드', '하나카드', '국민카드'];

export default function CardCompanySection({ value, onSelect }: { value: string; onSelect: (value: string) => void }) {
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
