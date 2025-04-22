import Select from "../../../Common/Select/Select";

const cardCompanyOptions = [
  { value: "bc", text: "BC카드" },
  { value: "shinhan", text: "신한카드" },
  { value: "kakaobank", text: "카카오뱅크" },
  { value: "hyundai", text: "현대카드" },
  { value: "woori", text: "우리카드" },
  { value: "lotte", text: "롯데카드" },
  { value: "hana", text: "하나카드" },
  { value: "kb", text: "국민카드" },
];

const PLACEHOLDER = "카드사를 선택해주세요";

export default function CardCompanySelect() {
  return (
    <Select
      isError={false}
      placeholder={PLACEHOLDER}
      options={cardCompanyOptions}
    />
  );
}
