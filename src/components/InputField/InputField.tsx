import { css } from "@emotion/react";
import Text from "../Text/Text";
import Input from "../Input/Input";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { InputFieldProps } from "../../types/componentPropsType";
import { CardInformationType } from "../../types/CardInformationType";

const InputField = <T extends Exclude<keyof CardInformationType, "company">>({
  label,
  inputNumber,
  inputProps,
  cardInformation,
  setCardInformation,
  eachValidation,
}: InputFieldProps<T>) => {
  const { isError, errorMessage, validateInput } = eachValidation;

  const handleChange = (index: number, value: string) => {
    validateInput(index, value);

    setCardInformation((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated as CardInformationType[T];
    });
  };

  return (
    <div css={inputFieldStyle}>
      <Text type="label" text={label} />
      <div css={inputWrapperStyle}>
        {Array.from({ length: inputNumber }).map((_, index) => (
          <Input
            key={index}
            value={cardInformation[index] ?? ""}
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
