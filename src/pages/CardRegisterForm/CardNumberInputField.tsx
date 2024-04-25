import React from "react";
import InputField from "../../components/InputField/InputField";
import { Validator } from "@/hooks/useValidation";
import useValidation from "@/hooks/useValidation";
import useInput from "@/hooks/useInput";
import { INPUT_COUNTS } from "@/constants/condition";

const VALID_LENGTH = INPUT_COUNTS.CARD_NUMBERS;
const individualValidators: Validator[] = [
  {
    errorMessage: `길이는 ${VALID_LENGTH}여야합니다.`,
    validate: (input: string) => input.length === 0 || input.length === VALID_LENGTH,
  },
  {
    errorMessage: `입력은 숫자형이어야합니다.`,
    validate: (input: string) => input.length === 0 || /^[0-9]*$/.test(input),
  },
];

const CardNumberInputField = ({ reduceds }: { reduceds: ReturnType<typeof useInput>[] }) => {
  const validationStates = reduceds.map((reduced) => useValidation(reduced, individualValidators));

  return (
    <InputField>
      <InputField.Label>카드번호</InputField.Label>
      <InputField.Inputs>
        {Array.from({ length: INPUT_COUNTS.CARD_NUMBERS }).map((_, index) => (
          <InputField.Input
            key={index}
            isError={!validationStates[index].inputState.isValid}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (event.target.value.length > VALID_LENGTH) return;
              validationStates[index].setValue(event.target.value);
            }}
            value={validationStates[index].inputState.value}
          ></InputField.Input>
        ))}
      </InputField.Inputs>
      <InputField.ErrorMessage>
        {validationStates.reduce((prev, cur) => prev || cur.inputState.errorMessage, "")}
      </InputField.ErrorMessage>
    </InputField>
  );
};

export default CardNumberInputField;
