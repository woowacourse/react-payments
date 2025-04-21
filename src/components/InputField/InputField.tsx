/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Text from "../Text/Text";
import { InputFieldProps } from "../../types/inputFieldDataType";
import Input from "../Input/Input";
import useCardInformationErrors from "../../hooks/useCardInformationErrors";

const InputField = ({
  label,
  inputNumber,
  inputProps,
  cardInformation,
  setCardInformation,
  informationType,
}: InputFieldProps) => {
  const { isErrors, errorMessage, validateInput } = useCardInformationErrors();

  const handleChange = (index: number, value: string) => {
    validateInput(informationType, index, value);
    const updatedValues = [...cardInformation[informationType]];
    updatedValues[index] = value;
    setCardInformation({
      ...cardInformation,
      [informationType]: updatedValues,
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
            onChange={(v) => handleChange(index, v)}
            placeholder={inputProps.placeholder[index]}
            maxLength={inputProps.maxLength}
            error={isErrors[informationType][index]}
          />
        ))}
      </div>
      <div css={errorTextWrapperStyle(isErrors[informationType].some((bool) => bool === true))}>
        <Text type="error" text={errorMessage[informationType] || "유효하지 않은 값입니다."} />
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
