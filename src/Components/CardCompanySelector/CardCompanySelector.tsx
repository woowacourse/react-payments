import React, { useState } from "react";

type SelectBoxProps = {
  onSelect: (value: CardCompany | "") => void;
};

const options = [
  "BC카드",
  "신한카드",
  "카카오뱅크",
  "현대카드",
  "우리카드",
  "롯데카드",
  "하나카드",
  "국민카드",
];

const SelectBox: React.FC<SelectBoxProps> = ({ onSelect }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as CardCompany;
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <select value={selectedValue} onChange={handleChange}>
      <option value="">카드사를 선택하세요</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
