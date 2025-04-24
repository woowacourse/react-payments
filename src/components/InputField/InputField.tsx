import { css } from "@emotion/react";
import Text from "../Text/Text";
import Input from "../Input/Input";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { InputFieldProps } from "../../types/componentPropsType";

const InputField = ({
  label,
  inputNumber,
  inputProps,
  cardInformation,
  setCardInformation,
  informationType,
  eachValidation,
}: InputFieldProps) => {
  const { isError, errorMessage, validateInput } = eachValidation;

  const handleChange = (index: number, value: string) => {
    validateInput(index, value);

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
            error={isError[index]}
            masking={inputProps.masking}
          />
        ))}
      </div>
      <ErrorMessage error={isError.some((bool) => bool === true)} message={errorMessage} />
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
