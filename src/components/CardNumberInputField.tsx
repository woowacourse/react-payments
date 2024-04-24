import React from "react";
import InputField from "./common/InputField/InputField";
import useInputWithValidation from "@/hooks/useInputWithValidation";

const VALID_LENGTH = 4;
const INPUTS_COUNT = 4;
const CardNumberInputField = () => {
  const validationStates = Array.from({ length: INPUTS_COUNT }).map(() =>
    useInputWithValidation("", [
      {
        errorMessage: "길이는 4여야합니다.",
        validate: (input: string) =>
          input.length === 0 || input.length === VALID_LENGTH,
      },
    ])
  );

  return (
    <InputField>
      <InputField.Label>카드번호</InputField.Label>
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
          ></InputField.Input>
        ))}
      </InputField.Inputs>
      <InputField.ErrorMessage>
        {validationStates.reduce(
          (prev, cur) => prev || cur.inputState.errorMessage,
          ""
        )}
      </InputField.ErrorMessage>
    </InputField>
  );
};

export default CardNumberInputField;
