/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Input from "../Input/Input";
import { useState } from "react";

type InputFieldProps = {
  label: string;
  inputNumber: number;
  inputProps: {
    placeholder: string[];
    maxLength: number;
  };
  cardInformation: {
    uniqueNumber: string[];
    expirationDate: string[];
    cvcNumber: string[];
  };
  setCardInformation: (newValue: InputFieldProps["cardInformation"]) => void;
  informationType: "uniqueNumber" | "expirationDate" | "cvcNumber";
};

const InputField = ({
  label,
  inputNumber,
  inputProps,
  cardInformation,
  setCardInformation,
  informationType,
}: InputFieldProps) => {
  const [error, isError] = useState<boolean>(false);

  const handleChange = (index: number, text: string) => {
    const updatedArray = cardInformation[informationType];
    updatedArray[index] = text;

    setCardInformation({
      ...cardInformation,
      [informationType]: updatedArray,
    });
  };

  return (
    <div css={inputFieldStyle}>
      <label css={labelStyle}>{label}</label>
      <div css={inputWrapperStyle}>
        {Array.from({ length: inputNumber }).map((_, index) => (
          <Input
            key={index}
            value={cardInformation[informationType][index] ?? ""}
            setValue={(v) => handleChange(index, v)}
            placeholder={inputProps.placeholder[index]}
            maxLength={inputProps.maxLength}
            isError={isError}
          />
        ))}
      </div>
      <span css={errorStyle(error)}>{error && "숫자만 입력 가능합니다."}</span>
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

const labelStyle = css`
  font-size: 12px;
  color: #0a0d13;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
`;

const errorStyle = (error: boolean) => css`
  color: #ff3d3d;
  font-size: 9.5px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: ${error ? "1" : "0"};
`;
