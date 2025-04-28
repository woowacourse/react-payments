import { CARD_COMPANY } from '../../constants';
import Dropdown from '../Dropdown/Dropdown';
import { InputSection } from '../InputSection/InputSection';

type CardCompanySection = {
  company: string;
  handleCompanySelect: (value: string) => void;
};
export default function CardCompanySection({ company, handleCompanySelect }: CardCompanySection) {
  return (
    <div>
      <InputSection.TitleWrapper>
        <InputSection.Title title="카드사를 선택해 주세요" />
        <InputSection.SubTitle title="현재 국내 카드사만 가능합니다." />
      </InputSection.TitleWrapper>
      <Dropdown placeholder="카드사를 선택해주세요" list={CARD_COMPANY} value={company} onSelect={handleCompanySelect} />
    </div>
  );
}
1;
