/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Text from "../Text/Text";
import { InputFieldProps } from "../../types/inputFieldDataType";
import Input from "../Input/Input";
import useCardInformationErrors from "../../hooks/useCardInformationErrors";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

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
    setCardInformation((prev) => {
      const updated = prev[informationType];
      updated[index] = value;
      return { ...prev, [informationType]: updated };
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
      <ErrorMessage
        error={isErrors[informationType].some((bool) => bool === true)}
        message={errorMessage[informationType]}
      />
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
