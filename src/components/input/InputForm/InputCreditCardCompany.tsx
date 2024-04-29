import Dropdown from "../common/Dropdown";

interface InputCreditCardCompanyProps {
  selectedCompany: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur: () => void;
}

const InputCreditCardCompany = ({
  selectedCompany,
  handleChange,
  onBlur,
}: InputCreditCardCompanyProps) => {
  const options = [
    { value: "bcCard", label: "BC카드" },
    { value: "shinhanCard", label: "신한카드" },
    { value: "kakaoCard", label: "카카오뱅크" },
    { value: "hyundaiCard", label: "현대카드" },
    { value: "wooriCard", label: "우리카드" },
    { value: "lotteCard", label: "롯데카드" },
    { value: "hanaCard", label: "하나카드" },
    { value: "kbCard", label: "국민카드" },
  ];

  return (
    <Dropdown options={options} value={selectedCompany} onChange={handleChange} onBlur={onBlur} />
  );
};

export default InputCreditCardCompany;
