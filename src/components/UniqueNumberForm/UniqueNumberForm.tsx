import { css } from "@emotion/react";
import Input from "../Input/Input";
import Text from "../Text/Text";
import { UniqueNumberStateType } from "../../types/CardInformationType";
import useError from "../../hooks/useError";
import uniqueNumberSpec from "./UniqueNumberSpec";

const UniqueNumberForm = ({ uniqueNumberState, dispatch }: UniqueNumberStateType) => {
  const { error, errorMessage, validateInputType } = useError([false, false, false, false]);
  const { title, description, inputFieldData } = uniqueNumberSpec;
  const { label, inputNumber, inputProps } = inputFieldData;

  const handleChange = (v: string, index: number) => {
    if (validateInputType(v, index)) {
      dispatch({ type: "SET_UNIQUE_NUMBER", index, value: v });
    }
  };

  return (
    <div css={FormSectionWrapperStyle}>
      <div css={TextWrapperStyle}>
        <Text type="title" text={title} />
        <Text type="description" text={description} />
      </div>

      <div css={inputFieldStyle}>
        <Text type="label" text={label} />
        <div css={inputWrapperStyle}>
          {Array.from({ length: inputNumber }).map((_, index: number) => {
            const { placeholder, maxLength } = inputProps;
            return (
              <Input
                key={index}
                placeholder={placeholder[index]}
                value={uniqueNumberState[index]}
                maxLength={maxLength}
                onChange={(v) => handleChange(v, index)}
                error={error[index]}
                type={index > 1 ? "password" : "text"}
              />
            );
          })}
        </div>

        <div css={errorTextWrapperStyle(error.some((bool) => bool === true))}>
          <Text type="error" text={errorMessage} />
        </div>
      </div>
    </div>
  );
};

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
  height: 5px;
`;

const TextWrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const FormSectionWrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default UniqueNumberForm;
