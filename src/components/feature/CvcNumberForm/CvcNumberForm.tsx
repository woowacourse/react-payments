import { css } from "@emotion/react";
import Input from "../../common/Input/Input";
import Text from "../../common/Text/Text";
import { CvcNumberStateType } from "../../../types/CardInformationType";
import cvcNumberSpec from "./cvcNumberSpec";
import useInputFocus from "../../../hooks/useInputFocus";
import useCvcNumber from "../../../hooks/useCvcNumber";

const CvcNumberForm = ({ cvcNumberState, dispatch, openNextForm }: CvcNumberStateType) => {
  const { title, description, inputFieldData } = cvcNumberSpec;
  const { label, inputProps } = inputFieldData;
  const { placeholder, maxLength } = inputProps;
  const { error, errorMessage, handleChange } = useCvcNumber(dispatch, openNextForm);
  const inputRefs = useInputFocus();

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
            error={error}
            ref={(el) => {
              inputRefs.current[0] = el;
            }}
          />
        </div>
        <div css={errorTextWrapperStyle(error)}>
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
