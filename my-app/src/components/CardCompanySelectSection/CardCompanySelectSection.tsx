import Select from "react-select";

type CardCompanySelectorSectionProps = {
  onSelect: (company: string) => void;
};

const CARD_COMPANIES = [
  { value: "bc", label: "BC카드" },
  { value: "shinhan", label: "신한카드" },
  { value: "kakaobank", label: "카카오뱅크" },
  { value: "hyundai", label: "현대카드" },
  { value: "woori", label: "우리카드" },
  { value: "lotte", label: "롯데카드" },
  { value: "hana", label: "하나카드" },
  { value: "kookmin", label: "국민카드" },
];

const CardCompanySelectorSection = ({ onSelect }: CardCompanySelectorSectionProps) => {
  return (
    <Select
      options={CARD_COMPANIES}
      onChange={(option) => option && onSelect(option.value)}
      placeholder="카드사를 선택해주세요"
    />
  );
};

export default CardCompanySelectorSection;
