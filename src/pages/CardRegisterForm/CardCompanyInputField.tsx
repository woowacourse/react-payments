import InputField from "@/components/InputField/InputField";
import { Company, companyNames } from "@/constants/condition";
import React, { FormEvent } from "react";

interface CardCompanyInputFieldProp {
  setCardCompany?: React.Dispatch<React.SetStateAction<Company>>;
}
const CardCompanyInputField = ({ setCardCompany }: CardCompanyInputFieldProp) => {
  return (
    <InputField>
      <InputField.Inputs>
        <InputField.Select
          onChange={(e: FormEvent<HTMLSelectElement>) => {
            if (setCardCompany === undefined) return;
            const { value } = e.target as HTMLSelectElement;
            setCardCompany(value as Company);
          }}
        >
          {companyNames.map((companyName) => (
            <option>{companyName}</option>
          ))}
        </InputField.Select>
      </InputField.Inputs>
      <InputField.ErrorMessage></InputField.ErrorMessage>
    </InputField>
  );
};

export default CardCompanyInputField;
