import { css } from "@emotion/react";
import Input from "../../common/Input/Input";
import Text from "../../common/Text/Text";
import { CvcNumberStateType } from "../../../types/CardInformationType";
import useError from "../../../hooks/useError";
import cvcNumberSpec from "./cvcNumberSpec";
import { useEffect } from "react";

const CvcNumberForm = ({ cvcNumberState, dispatch, openNextForm }: CvcNumberStateType) => {
  const { error, errorMessage, validateInputType, validateLength } = useError([false]);
  const { title, description, inputFieldData } = cvcNumberSpec;
  const { label, inputProps } = inputFieldData;
  const { placeholder, maxLength } = inputProps;

  const handleChange = (value: string) => {
    if (!validateInputType(value, 0)) {
      return;
    }

    validateLength(value, 0, maxLength);
    dispatch({ type: "SET_CVC_NUMBER", value: value });
  };

  useEffect(() => {
    if (error[0] === false && cvcNumberState[0] !== "") {
      openNextForm("cvcNumber");
    }
  }, [error]);

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
            value={cvcNumberState[0]}
            onChange={(v) => handleChange(v)}
            error={error[0]}
          />
        </div>
        <div css={errorTextWrapperStyle(error[0])}>
          <Text text={errorMessage} size="9.5px" color="#ff3d3d" weight={400} lineHeight="normal" />
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
