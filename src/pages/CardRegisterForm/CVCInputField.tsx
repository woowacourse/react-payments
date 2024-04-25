import React, { useState } from "react";
import InputField from "../../components/InputField/InputField";
import { Validator } from "@/hooks/useValidation";
import useInput from "@/hooks/useInput";
import useValidation from "@/hooks/useValidation";
import { INPUT_COUNTS } from "@/constants/condition";

const VALID_LENGTH = 3;
const INPUTS_COUNT = INPUT_COUNTS.OWNER_NAME;
const individualValidators: Validator[] = [
  {
    validate: (input: string) => /^[0-9]*$/.test(input),
    errorMessage: "숫자로 입력해주세요.",
  },
];
interface CVCInputProps {
  reduceds: ReturnType<typeof useInput>[];
  setIsFocused?: React.Dispatch<React.SetStateAction<boolean>>;
}

const CVCInputField = ({ reduceds, setIsFocused = () => {} }: CVCInputProps) => {
  const validationStates = reduceds.map((reduced) => useValidation(reduced, individualValidators));
  return (
    <InputField>
      <InputField.Label>CVC</InputField.Label>
      <InputField.Inputs>
        {Array.from({ length: INPUTS_COUNT }).map((_, index) => (
          <InputField.Input
            key={index}
            isError={!validationStates[index].inputState.isValid}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (event.target.value.length > VALID_LENGTH) return;
              validationStates[index].setValue(event.target.value);
            }}
            value={validationStates[index].inputState.value}
            onBlur={() => {
              setIsFocused(false);
            }}
            onFocus={() => {
              setIsFocused(true);
            }}
          ></InputField.Input>
        ))}
      </InputField.Inputs>
      <InputField.ErrorMessage>
        {validationStates.reduce((prev, cur) => prev || cur.inputState.errorMessage, "")}
      </InputField.ErrorMessage>
    </InputField>
  );
};

export default CVCInputField;
