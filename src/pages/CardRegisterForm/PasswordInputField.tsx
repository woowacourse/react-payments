import React from "react";
import InputField from "../../components/InputField/InputField";
import { Validator } from "@/hooks/useValidation";
import useInput from "@/hooks/useInput";
import useValidation from "@/hooks/useValidation";
import { INPUT_COUNTS } from "@/constants/condition";

const VALID_LENGTH = 2;
const MAX_LENGTH = VALID_LENGTH;
const LABEL = "비밀번호 앞 2자리";
const INPUTS_COUNT = INPUT_COUNTS.PASSWORD;
const individualValidators: Validator[] = [
  {
    validate: (input: string) => input.length == VALID_LENGTH || input.length == 0,
    errorMessage: `길이는 ${VALID_LENGTH}여야합니다.`,
  },
];

const PasswordInputField = ({ inputStates }: { inputStates: ReturnType<typeof useInput>[] }) => {
  const validationStates = [useValidation(inputStates[0], individualValidators)];
  return (
    <InputField>
      <InputField.Label>{LABEL}</InputField.Label>
      <InputField.Inputs>
        {Array.from({ length: INPUTS_COUNT }).map((_, index) => (
          <InputField.Input
            type="password"
            key={index}
            isError={!validationStates[index].isValid}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (event.target.value.length > MAX_LENGTH) return;
              validationStates[index].setValue(event.target.value);
            }}
            value={validationStates[index].value}
          ></InputField.Input>
        ))}
      </InputField.Inputs>
      <InputField.ErrorMessage>
        {validationStates.reduce((prev, cur) => prev || cur.errorMessage, "")}
      </InputField.ErrorMessage>
    </InputField>
  );
};

export default PasswordInputField;
