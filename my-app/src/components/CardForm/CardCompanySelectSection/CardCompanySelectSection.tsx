import InputSectionLayout from "../InputSectionLayout/InputSectionLayout";
import Select from "../../Select/Select";
import { CARD_COMPANIES } from "../../../constants/cardCompanies";

const COMPANY_NAMES = CARD_COMPANIES.map(({ name }) => name);

const CardCompanySelectSection = ({
  onChange,
  inputValue,
}: {
  onChange: (value: string) => void;
  inputValue: string;
}) => {
  return (
    <InputSectionLayout title="카드사를 선택해 주세요." message="현재 국내 카드사만 가능합니다.">
      <Select
        value={inputValue}
        options={COMPANY_NAMES}
        placeholder="카드사를 선택해 주세요"
        onChange={onChange}
      />
    </InputSectionLayout>
  );
};

export default CardCompanySelectSection;
