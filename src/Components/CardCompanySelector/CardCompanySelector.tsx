/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { InputWrapper } from "../common/Input/Input.styles";

type SelectBoxProps = {
  onSelect: (value: CardCompany | "") => void;
  setCompleted: (isValid: boolean) => void;
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

const SelectBox: React.FC<SelectBoxProps> = ({ onSelect, setCompleted }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as CardCompany;
    setSelectedValue(value);
    onSelect(value);
  };

  useEffect(() => {
    const isCompleted = selectedValue !== "";
    setCompleted(isCompleted);
  }, [selectedValue]);

  return (
    <InputWrapper size="large" isValid={true}>
      <select value={selectedValue} onChange={handleChange}>
        <option value="">카드사를 선택하세요</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </InputWrapper>
  );
};

export default SelectBox;
