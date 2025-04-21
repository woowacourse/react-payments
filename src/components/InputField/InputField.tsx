/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Text from "../Text/Text";
import { InputFieldProps } from "../../types/inputFieldDataType";
import Input from "../Input/Input";
import { useState } from "react";

const InputField = ({
  label,
  inputNumber,
  inputProps,
  cardInformation,
  setCardInformation,
  informationType,
}: InputFieldProps) => {
  const [isErrors, setIsErrors] = useState({
    uniqueNumber: [false, false, false, false],
    expirationDate: [false, false],
    cvcNumber: [false],
  });

  const handleChange = (index: number, value: string) => {
    const isNumberOnly = /^[0-9]*$/.test(value);

    let error = !isNumberOnly;

    if (isNumberOnly && informationType === "expirationDate") {
      const num = parseInt(value);
      if (index === 0) error = num < 1 || num > 12;
      if (index === 1) {
        const year = 25;
        error = num < year;
      }
    }

    const updatedValues = [...cardInformation[informationType]];
    updatedValues[index] = value;
    setCardInformation({
      ...cardInformation,
      [informationType]: updatedValues,
    });

    const updatedErrors = [...isErrors[informationType]];
    updatedErrors[index] = error;
    setIsErrors({ ...isErrors, [informationType]: updatedErrors });
  };

  return (
    <div css={inputFieldStyle}>
      <Text type="label" text={label} />
      <div css={inputWrapperStyle}>
        {Array.from({ length: inputNumber }).map((_, index) => (
          <Input
            key={index}
            value={cardInformation[informationType][index] ?? ""}
            onChange={(v) => handleChange(index, v)}
            placeholder={inputProps.placeholder[index]}
            maxLength={inputProps.maxLength}
            error={isErrors[informationType][index]}
          />
        ))}
      </div>
      <div css={errorTextWrapperStyle(isErrors[informationType].some((bool) => bool === true))}>
        <Text type="error" text={"유효하지 않은 값입니다.!"} />
      </div>
    </div>
  );
};

export default InputField;

const inputWrapperStyle = css`
  gap: 10px;
  width: 100%;
  display: flex;
`;

const inputFieldStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const errorTextWrapperStyle = (error: boolean) => css`
  opacity: ${error ? "1" : "0"};
`;
