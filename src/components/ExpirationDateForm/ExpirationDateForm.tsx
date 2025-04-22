import { css } from "@emotion/react";
import Input from "../Input/Input";
import Text from "../Text/Text";
import { ExpirationDateStateType } from "../../types/CardInformationType";
import useError from "../../hooks/useError";
import expirationDateSpec from "./ExpirationDateSpec";

const { title, description, inputFieldData } = expirationDateSpec;

const ExpirationDateForm = ({ expirationDateState, dispatch }: ExpirationDateStateType) => {
  const { error, errorMessage, validateInputType, validateMonth } = useError([false, false]);

  const handleChange = (v: string, index: number) => {
    if (validateInputType(v, index)) {
      if (index === 0) validateMonth(v);
      dispatch({ type: "SET_EXPIRATION_DATE", index: index, value: v });
      return;
    }
  };

  return (
    <div css={FormSectionWrapperStyle}>
      <div css={TextWrapperStyle}>
        <Text type="title" text={title} />
        <Text type="description" text={description} />
      </div>

      <div css={inputFieldStyle}>
        <Text type="label" text={inputFieldData.label} />
        <div css={inputWrapperStyle}>
          {Array.from({ length: inputFieldData.inputNumber }).map((_, index: number) => {
            const { placeholder, maxLength } = inputFieldData.inputProps;

            return (
              <Input
                placeholder={placeholder[index]}
                value={expirationDateState[index]}
                onChange={(v) => handleChange(v, index)}
                maxLength={maxLength}
                error={error[index]}
              />
            );
          })}
        </div>
        <div css={errorTextWrapperStyle(error[0] || error[1])}>
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

export default ExpirationDateForm;
