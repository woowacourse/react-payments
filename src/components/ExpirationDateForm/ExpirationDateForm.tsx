/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Input from "../Input/Input";
import Text from "../Text/Text";
import { ExpirationDateStateType } from "../../types/CardInformationType";

const ExpirationDateForm = ({ expirationDateState, dispatch }: ExpirationDateStateType) => {
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
            setValue={(v) => dispatch({ type: "SET_EXPIRATION_DATE", index: 0, value: v })}
            maxLength={2}
            error={false}
          ></Input>
          <Input
            placeholder="YY"
            value={expirationDateState[1]}
            setValue={(v) => dispatch({ type: "SET_EXPIRATION_DATE", index: 1, value: v })}
            maxLength={2}
            error={false}
          ></Input>
        </div>
        {/* <div css={errorTextWrapperStyle(isErrors[informationType].some((bool) => bool === true))}>
        <Text type="error" text={"유효하지 않은 값입니다.!"} />
      </div> */}
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
