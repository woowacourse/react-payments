import InputField from "@/components/InputField/InputField";
import { companyNames } from "@/constants/condition";
import useInput from "@/hooks/useInput";
import useValidation from "@/hooks/useValidation";
import React, { FormEvent } from "react";

interface CardCompanyInputFieldProp {
  cardCompanyStates: ReturnType<typeof useInput>[];
}
const CardCompanyInputField = ({ cardCompanyStates }: CardCompanyInputFieldProp) => {
  const validators = [{ validate: (input: string) => companyNames.includes(input), errorMessage: "11" }];
  const validatedStates = useValidation(cardCompanyStates[0], validators);
  const { setValue: setCardCompany } = validatedStates;

  return (
    <InputField>
      <InputField.Inputs>
        <InputField.Select
          onChange={(e: FormEvent<HTMLSelectElement>) => {
            if (setCardCompany === undefined) return;
            const { value } = e.target as HTMLSelectElement;
            setCardCompany(value);
          }}
          required
          defaultValue="카드사를 선택해주세요"
        >
          <>
            <option value="" key="선택" disabled style={{ display: "none" }}>
              카드사를 선택해주세요
            </option>
            {companyNames.map((companyName) => (
              <option key={companyName}>{companyName}</option>
            ))}
          </>
        </InputField.Select>
      </InputField.Inputs>
      <InputField.ErrorMessage></InputField.ErrorMessage>
    </InputField>
  );
};

export default CardCompanyInputField;
