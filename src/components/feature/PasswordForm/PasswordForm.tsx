import passwordSpec from "./PasswordSpec";
import Text from "../../common/Text/Text";
import Input from "../../common/Input/Input";
import useError from "../../../hooks/useError";
import { PasswordStateType } from "../../../types/CardInformationType";
import { css } from "@emotion/react";

const PasswordForm = ({ passwordState, dispatch }: PasswordStateType) => {
  const { error, errorMessage, validateInputType } = useError([false]);
  const { title, description, inputFieldData } = passwordSpec;
  const { label, inputProps } = inputFieldData;
  const { placeholder, maxLength } = inputProps;

  const handleChange = (v: string, index: number) => {
    if (validateInputType(v, index)) {
      dispatch({ type: "SET_PASSWORD", value: v });
    }
  };

  return (
    <div css={FormSectionWrapperStyle}>
      <div css={TextWrapperStyle}>
        <Text text={title} size="18px" color="#000" weight={700} lineHeight="normal" />
        <Text text={description} size="9.5px" color="#8b95a1" weight={400} lineHeight="normal" />
      </div>

      <div css={inputFieldStyle}>
        <Text text={label} size="12px" color="#0a0d13" weight={500} lineHeight="15px" />
        <div css={inputWrapperStyle}>
          <Input
            placeholder={placeholder[0]}
            maxLength={maxLength}
            value={passwordState[0]}
            onChange={(v) => handleChange(v, 0)}
            error={error[0]}
            type="password"
          />
        </div>
        <div css={errorTextWrapperStyle(error[0])}>
          <Text text={errorMessage} size="9.5px" color="#ff3d3d" weight={400} lineHeight="normal" />
        </div>
      </div>
    </div>
  );
};

export default PasswordForm;

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
