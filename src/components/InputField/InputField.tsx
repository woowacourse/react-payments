/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Text from "../Text/Text";

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
      <Text type="label" text={label} />
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
      <div css={errorTextWrapperStyle(error)}>
        <Text type="error" text={"숫자만 입력 가능합니다."} />
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

const labelStyle = css`
  font-size: 12px;
  color: #0a0d13;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
`;

const errorTextWrapperStyle = (error: boolean) => css`
  opacity: ${error ? "1" : "0"};
`;
