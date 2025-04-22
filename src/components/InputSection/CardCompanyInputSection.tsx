import ErrorMessage from "../common/ErrorMessage/ErrorMessage";
import InputSection from "../common/InputSection/InputSection";
import SelectField from "../common/SelectField/SelectField";

type Option = {
  label: string;
  value: string;
};

type CardCompanyOptions = {
  companies: Option[];
  selectedOption: string;
  handleCardNumbersChange: (selected: string) => void;
  errorMessage: string;
};

const CardCompanyInputSection = ({
  companies,
  selectedOption,
  handleCardNumbersChange,
  errorMessage,
}: CardCompanyOptions) => {
  return (
    <>
      <InputSection
        title="카드사를 선택해 주세요"
        description="현재 국내 카드사만 가능합니다"
      >
        <SelectField
          value={selectedOption}
          onChange={handleCardNumbersChange}
          options={companies}
        />
        {<ErrorMessage message={errorMessage} />}
      </InputSection>
    </>
  );
};

export default CardCompanyInputSection;
