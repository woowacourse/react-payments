import InputField from "@/components/InputField/InputField";
import React from "react";

const comapnyList = ["BC카드", "신한카드", "카카오뱅크", "현대카드", "우리카드", "롯데카드", "하나카드", "국민카드"];
const CardCompanyInputField = () => {
  return (
    <InputField>
      <InputField.Inputs>
        <InputField.Select>
          {comapnyList.map((companyName) => (
            <option>{companyName}</option>
          ))}
        </InputField.Select>
      </InputField.Inputs>
      <InputField.ErrorMessage></InputField.ErrorMessage>
    </InputField>
  );
};

export default CardCompanyInputField;
