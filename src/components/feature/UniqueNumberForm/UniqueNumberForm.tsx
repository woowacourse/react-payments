import { css } from "@emotion/react";
import Input from "../../common/Input/Input";
import Text from "../../common/Text/Text";
import { UniqueNumberStateType } from "../../../types/CardInformationType";
import uniqueNumberSpec from "./uniqueNumberSpec";
import useInputFocus from "../../../hooks/useInputFocus";
import useUniqueNumber from "../../../hooks/useUniqueNumber";

const UniqueNumberForm = ({ uniqueNumberState, dispatch }: UniqueNumberStateType) => {
  const { title, description, inputFieldData } = uniqueNumberSpec;
  const { label, inputNumber, inputProps } = inputFieldData;
  const inputRefs = useInputFocus();
  const { error, errorMessage, handleChange } = useUniqueNumber({
    dispatch,
    inputRefs,
  });

  return (
    <div css={FormSectionWrapperStyle}>
      <div css={TextWrapperStyle}>
        <Text text={title} size="18px" color="#000" weight={700} lineHeight="normal" />
        <Text text={description} size="9.5px" color="#8b95a1" weight={400} lineHeight="normal" />
      </div>

      <div css={inputFieldStyle}>
        <Text text={label} size="12px" color="#0a0d13" weight={500} lineHeight="15px" />
        <div css={inputWrapperStyle}>
          {Array.from({ length: inputNumber }).map((_, index: number) => {
            const { placeholder, maxLength } = inputProps;
            return (
              <Input
                key={index}
                placeholder={placeholder[index]}
                value={uniqueNumberState[index]}
                maxLength={maxLength}
                onChange={(v) => handleChange(v, index)}
                error={error[index]}
                type={index > 1 ? "password" : "text"}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
              />
            );
          })}
        </div>

        <div css={errorTextWrapperStyle(error.some((bool) => bool === true))}>
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

export default UniqueNumberForm;
