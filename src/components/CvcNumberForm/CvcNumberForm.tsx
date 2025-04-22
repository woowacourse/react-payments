import { css } from "@emotion/react";
import Input from "../Input/Input";
import Text from "../Text/Text";
import { CvcNumberStateType } from "../../types/CardInformationType";
import useError from "../../hooks/useError";

const CvcNumberForm = ({ cvcNumberState, dispatch }: CvcNumberStateType) => {
  const { error, errorMessage, validateInputType } = useError([false]);

  const handleChange = (value: string) => {
    if (validateInputType(value, 0)) {
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
            onChange={(v) => handleChange(v)}
            error={error[0]}
          />
        </div>
        <div css={errorTextWrapperStyle(error[0])}>
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
