import { css } from "@emotion/react";
import Text from "../Text/Text";
import Input from "../Input/Input";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { InputFieldProps } from "../../types/componentPropsType";
import { CardInformationType } from "../../types/CardInformationType";
import useFocusManager from "../../hooks/common/useFocusManager";

const InputField = <T extends Exclude<keyof CardInformationType, "company">>({
  label,
  inputNumber,
  inputProps,
  state,
  setState,
  eachValidation,
}: InputFieldProps<T>) => {
  const { isError, errorMessage, validateInput } = eachValidation;
  const { setRef, moveFocusOrBlur } = useFocusManager(inputNumber);

  const handleChange = (value: string, index: number) => {
    validateInput(value, index);
    setState(value, index);
    moveFocusOrBlur({ index, value, maxLength: inputProps.maxLength });
  };

  return (
    <div css={inputFieldStyle}>
      <Text type="label" text={label} />
      <div css={inputWrapperStyle}>
        {Array.from({ length: inputNumber }).map((_, index) => (
          <Input
            key={index}
            ref={setRef(index)}
            value={Array.isArray(state) ? state[index] : state}
            onChange={(v) => handleChange(v, index)}
            placeholder={inputProps.placeholder[index]}
            maxLength={inputProps.maxLength}
            error={Array.isArray(isError) ? isError[index] : isError}
            masking={inputProps.masking}
            autoFocus={index === 0}
          />
        ))}
      </div>
      <ErrorMessage
        error={Array.isArray(isError) ? isError.some((bool) => bool === true) : isError}
        message={errorMessage}
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
