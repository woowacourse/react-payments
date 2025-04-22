import React from "react";
import { css } from "@emotion/react";
import Input from "../Input/Input";
import Text from "../Text/Text";
import { ExpirationDateStateType } from "../../types/CardInformationType";
import useExpirationDateValidation from "../../hooks/useExpirationDateValidation";

const ExpirationDateForm = ({ expirationDateState, dispatch }: ExpirationDateStateType) => {
  const { error, errorMessage, validateInputType, validateMonth } = useExpirationDateValidation();

  const handleChangeMonth = (v: string) => {
    if (validateInputType(v, 0)) {
      validateMonth(v);
      dispatch({ type: "SET_EXPIRATION_DATE", index: 0, value: v });
      return;
    }
  };

  const handleChangeYear = (v: string) => {
    if (validateInputType(v, 1)) {
      dispatch({ type: "SET_EXPIRATION_DATE", index: 1, value: v });
    }
  };

  return (
    <div css={FormSectionWrapperStyle}>
      <div css={TextWrapperStyle}>
        <Text type="title" text={"카드 유효기간을 입력해 주세요"} />
        <Text type="description" text={"월/년도(MMYY)를 순서대로 입력해 주세요."} />
      </div>

      <div css={inputFieldStyle}>
        <Text type="label" text={"유효기간"} />
        <div css={inputWrapperStyle}>
          <Input
            placeholder="MM"
            value={expirationDateState[0]}
            setValue={(v) => handleChangeMonth(v)}
            maxLength={2}
            error={error[0]}
          ></Input>
          <Input
            placeholder="YY"
            value={expirationDateState[1]}
            setValue={(v) => handleChangeYear(v)}
            maxLength={2}
            error={error[1]}
          ></Input>
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
