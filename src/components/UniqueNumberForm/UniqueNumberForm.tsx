import React from "react";
import { css } from "@emotion/react";
import Input from "../Input/Input";
import Text from "../Text/Text";
import { UniqueNumberStateType } from "../../types/CardInformationType";
import useError from "../../hooks/useError";

const UniqueNumberForm = ({ uniqueNumberState, dispatch }: UniqueNumberStateType) => {
  const { error, errorMessage, validateInputType } = useError([false, false, false, false]);

  const handleChange = (v: string, index: number) => {
    if (validateInputType(v, index)) {
      dispatch({ type: "SET_UNIQUE_NUMBER", index, value: v });
    }
  };

  return (
    <div css={FormSectionWrapperStyle}>
      <div css={TextWrapperStyle}>
        <Text type="title" text={"결제할 카드 번호를 입력해 주세요"} />
        <Text type="description" text={"본인 명의의 카드만 결제 가능합니다."} />
      </div>

      <div css={inputFieldStyle}>
        <Text type="label" text={"카드번호"} />
        <div css={inputWrapperStyle}>
          {uniqueNumberState.map((value: string, index: number) => (
            <Input
              key={index}
              placeholder={index > 1 ? "●●●●" : "1234"}
              value={value}
              maxLength={4}
              onChange={(v) => handleChange(v, index)}
              error={error[index]}
              type={index > 1 ? "password" : "text"}
            />
          ))}
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
