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
  handleCardNumbersChange: (
    selected: string,
    index: number,
    moveFocus: (index: number) => void
  ) => void;
  errorMessage: string;
  setRef: (
    index: number
  ) => (el: HTMLInputElement | HTMLSelectElement | null) => void;
  moveFocus: (index: number) => void;
};

const CardCompanyInputSection = ({
  companies,
  selectedOption,
  handleCardNumbersChange,
  errorMessage,
  setRef,
  moveFocus,
}: CardCompanyOptions) => {
  return (
    <>
      <InputSection
        title="카드사를 선택해 주세요"
        description="현재 국내 카드사만 가능합니다"
      >
        <SelectField
          value={selectedOption}
          onChange={(value) => {
            handleCardNumbersChange(value, 4, moveFocus);
          }}
          options={companies}
          ref={setRef(4)}
        />
        {<ErrorMessage message={errorMessage} />}
      </InputSection>
    </>
  );
};

export default CardCompanyInputSection;
