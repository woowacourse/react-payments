import React from "react";
import InputField from "../../components/InputField/InputField";
import { Validator } from "@/hooks/useValidation";
import useValidation from "@/hooks/useValidation";
import useInput from "@/hooks/useInput";
import { INPUT_COUNTS, INPUT_LABEL } from "@/constants/condition";

const VALID_LENGTH = INPUT_COUNTS.CARD_NUMBERS;
const individualValidators: Validator[] = [
  {
    errorMessage: `길이는 ${VALID_LENGTH}여야합니다.`,
    validate: (input: string) => input.length === 0 || input.length === VALID_LENGTH,
  },
  {
    errorMessage: `숫자만 입력 가능합니다.`,
    validate: (input: string) => input.length === 0 || /^[0-9]*$/.test(input),
  },
];

const CardNumberInputField = ({ inputState }: { inputState: ReturnType<typeof useInput>[] }) => {
  const validationStates = [
    useValidation(inputState[0], individualValidators),
    useValidation(inputState[1], individualValidators),
    useValidation(inputState[2], individualValidators),
    useValidation(inputState[3], individualValidators),
  ];

  return (
    <InputField>
      <InputField.Label>{INPUT_LABEL.CARD_NUMBERS}</InputField.Label>
      <InputField.Inputs>
        {Array.from({ length: INPUT_COUNTS.CARD_NUMBERS }).map((_, index) => (
          <InputField.Input
            key={index}
            isError={!validationStates[index].isValid}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (event.target.value.length > VALID_LENGTH) return;
              validationStates[index].setValue(event.target.value);
            }}
            value={validationStates[index].value}
            placeholder="1234"
          ></InputField.Input>
        ))}
      </InputField.Inputs>
      <InputField.ErrorMessage>
        {validationStates.reduce((prev, cur) => prev || cur.errorMessage, "")}
      </InputField.ErrorMessage>
    </InputField>
  );
};

export default CardNumberInputField;
