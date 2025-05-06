import { css } from "@emotion/react";
import Input from "../../common/Input/Input";
import Text from "../../common/Text/Text";
import { ExpirationDateStateType } from "../../../types/CardInformationType";
import expirationDateSpec from "./expirationDateSpec";
import useInputFocus from "../../../hooks/useInputFocus";
import useExpirationDate from "../../../hooks/useExpirationDate";

const { title, description, inputFieldData } = expirationDateSpec;

const ExpirationDateForm = ({
  expirationDateState,
  dispatch,
  openNextForm,
  errorState,
  dispatchError,
}: ExpirationDateStateType) => {
  const inputRefs = useInputFocus();
  const { errorMessage, handleChange } = useExpirationDate({
    dispatch,
    inputRefs,
    openNextForm,
    expirationDateState,
    dispatchError,
  });

  return (
    <div css={FormSectionWrapperStyle}>
      <div css={TextWrapperStyle}>
        <Text text={title} size="18px" color="#000" weight={700} lineHeight="normal" />
        <Text text={description} size="9.5px" color="#8b95a1" weight={400} lineHeight="normal" />
      </div>

      <div css={inputFieldStyle}>
        <Text text={inputFieldData.label} size="12px" color="#0a0d13" weight={500} lineHeight="15px" />
        <div css={inputWrapperStyle}>
          {Array.from({ length: inputFieldData.inputNumber }).map((_, index: number) => {
            const { placeholder, maxLength } = inputFieldData.inputProps;

            return (
              <Input
                key={index}
                placeholder={placeholder[index]}
                value={expirationDateState[index]}
                onChange={(e) => handleChange(e.target.value, index)}
                maxLength={maxLength}
                error={errorState[index]}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
              />
            );
          })}
        </div>
        <div css={errorTextWrapperStyle(errorState[0] || errorState[1])}>
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

export default ExpirationDateForm;
