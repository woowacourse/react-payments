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

  const handleChange = (index: number, text: string) => {
    const updatedArray = cardInformation[informationType];
    updatedArray[index] = text;

    setCardInformation({
      ...cardInformation,
      [informationType]: updatedArray,
    });
  };

  const handleChangeError = (index: number, error: boolean) => {
    const updatedArray = isErrors[informationType];
    updatedArray[index] = error;

    setIsErrors({
      ...isErrors,
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
            handleChangeError={(error) => handleChangeError(index, error)}
            error={isErrors[informationType][index]}
          />
        ))}
      </div>
      <div css={errorTextWrapperStyle(isErrors[informationType].some((bool) => bool === true))}>
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

const errorTextWrapperStyle = (error: boolean) => css`
  opacity: ${error ? "1" : "0"};
`;
