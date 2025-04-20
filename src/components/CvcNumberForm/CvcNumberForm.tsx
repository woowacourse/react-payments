/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Input from "../Input/Input";
import Text from "../Text/Text";
import { CvcNumberStateType } from "../../types/CardInformationType";

const CvcNumberForm = ({ cvcNumberState, dispatch }: CvcNumberStateType) => {
  return (
    <div css={FormSectionWrapperStyle}>
      <div css={TextWrapperStyle}>
        <Text type="title" text={"CVC 번호를 입력해 주세요"} />
        <Text type="description" text={""} />
      </div>

      <div css={inputFieldStyle}>
        <Text type="label" text={"cvc"} />
        <div css={inputWrapperStyle}>
          <Input
            placeholder="123"
            maxLength={3}
            value={cvcNumberState[0]}
            setValue={(v) => dispatch({ type: "SET_CVC", value: v })}
            error={false}
          ></Input>
        </div>
        {/* <div css={inputWrapperStyle}>
        {Array.from({ length: inputNumber }).map((_, index) => (
          <Input
            // key={index}
            // value={cardInformation[informationType][index] ?? ""}
            // setValue={(v) => handleChange(index, v)}
            // placeholder={inputProps.placeholder[index]}
            // maxLength={inputProps.maxLength}
            // error={isErrors[informationType][index]}
          />
        ))}
      </div> */}
        {/* <div css={errorTextWrapperStyle(isErrors[informationType].some((bool) => bool === true))}>
         */}
        <div>
          <Text type="error" text={"유효하지 않은 값입니다.!"} />
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
