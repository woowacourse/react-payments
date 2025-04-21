import { useState } from "react";
import ErrorMessage from "../common/ErrorMessage/ErrorMessage";
import InputSection from "../common/InputSection/InputSection";
import Select from "../common/InputSection/Select";

type Option = {
  label: string;
  value: string;
};
type IsError = {
  cardCompany: boolean;
};

type CardCompanyOptions = {
  companies: Option[];
  handleCardNumbersChange: (selected: string) => void;
  isError: IsError;
  errorMessage: string;
};

const CardCompanyInputSection = ({
  companies,
  handleCardNumbersChange,
  isError,
  errorMessage,
}: CardCompanyOptions) => {
  const [selected, setSelected] = useState<string | undefined>(undefined);

  const handleSelectChange = (value: string) => {
    setSelected(value);
    handleCardNumbersChange(value);
  };

  return (
    <>
      <InputSection
        title="카드사를 선택해 주세요"
        description="현재 국내 카드사만 가능합니다"
      >
        <Select
          value={selected}
          onChange={handleSelectChange}
          options={companies}
          valueAs={(value) =>
            companies.find((company) => company.id === Number(value))?.name ??
            "선택하기"
          }
          isError={isError.cardCompany}
        />
        {isError.cardCompany && <ErrorMessage message={errorMessage} />}
      </InputSection>
    </>
  );
};

export default CardCompanyInputSection;
