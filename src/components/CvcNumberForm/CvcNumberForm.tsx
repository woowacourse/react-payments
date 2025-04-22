import React from "react";
import { css } from "@emotion/react";
import Input from "../Input/Input";
import Text from "../Text/Text";
import { CvcNumberStateType } from "../../types/CardInformationType";
import useCvcNumberValidation from "../../hooks/useCvcNumberValidation";

// import cvcNumber from "./CvcNumberData";

const CvcNumberForm = ({ cvcNumberState, dispatch }: CvcNumberStateType) => {
  const { error, errorMessage, validateInputType } = useCvcNumberValidation();

  const handleChange = (value: string) => {
    if (validateInputType(value)) {
      dispatch({ type: "SET_CVC_NUMBER", value: value });
    }
  };

  return (
    <div css={FormSectionWrapperStyle}>
      <div css={TextWrapperStyle}>
        <Text type="title" text={"CVC"} />
        <Text type="description" text={""} />
      </div>

      <div css={inputFieldStyle}>
        <Text type="label" text={"cvc"} />
        <div css={inputWrapperStyle}>
          <Input
            placeholder="123"
            maxLength={3}
            value={cvcNumberState[0]}
            setValue={(v) => handleChange(v)}
            error={error}
          />
        </div>
        <div css={errorTextWrapperStyle(error)}>
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

export default CvcNumberForm;
