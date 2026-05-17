import Select from "react-select";
// BC카드 #F04651
// 신한카드 #0046FF
// 카카오뱅크 #FFE600
// 현대카드 #000000
// 우리카드 #007BC8
// 롯데카드 #ED1C24
// 하나카드 #009490
// 국민카드 #6A6056

interface Props {
  onChange: (value: string, label: string) => void;
}

const CARD_OPTIONS = [
  { value: "BC", label: "BC카드" },
  { value: "신한", label: "신한카드" },
  { value: "카뱅", label: "카카오뱅크" },
  { value: "현대", label: "현대카드" },
  { value: "우리", label: "우리카드" },
  { value: "롯데", label: "롯데카드" },
  { value: "하나", label: "하나카드" },
  { value: "국민", label: "국민카드" },
];

export default function CardFirmSelect({ onChange }: Props) {
  return (
    <div>
      <Select
        options={CARD_OPTIONS}
        autoFocus
        onChange={(opt) => opt && onChange(opt.value, opt.label)}
        placeholder="카드사를 선택해주세요"
        styles={{
          control: (base) => ({ ...base, width: 315, height: 31 }),
          menu: (base) => ({
            ...base,
            width: 315,
          }),
          menuList: (base) => ({ ...base, backgroundColor: "#ffffff" }),
          option: (base) => ({
            ...base,
            fontSize: 11,
            fontFamily: "sans-serif",
          }),
          placeholder: (base) => ({
            ...base,
            color: "#ACACAC",
            fontSize: 11,
            fontFamily: "sans-serif",
          }),
          singleValue: (base) => ({
            ...base,
            fontSize: 11,
            fontFamily: "sans-serif",
          }),
        }}
      />
    </div>
  );
}
