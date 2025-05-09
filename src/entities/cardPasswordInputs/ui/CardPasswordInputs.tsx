import {
  StyledContainer,
  StyledInputWrap,
  StyledErrorMessage,
} from "../../css/inputs.css";
import { CardPasswordInputsProps } from "../types/CardPasswordInputs.types";
import Input from "../../../shared/input/ui/Input";
import useAutoFocus from "../../hooks/useAutoFocus";

export default function CardPasswordInputs({
  values,
  changeValues,
  errorMessages,
  checkValidation,
  isError,
}: CardPasswordInputsProps) {
  const error = errorMessages.password;

  const { inputRefs } = useAutoFocus({
    inputCount: 1,
    inputMaxLength: 2,
  });

  return (
    <StyledContainer>
      <label htmlFor="">비밀번호 앞 2자리</label>
      <StyledInputWrap>
        <Input
          ref={inputRefs[0]}
          value={values.password}
          onChange={(e) => {
            changeValues("password", e.target.value);
            checkValidation({
              length: 2,
              value: e.target.value,
              type: "password",
            });
          }}
          isError={isError}
          width="100%"
          maxLength={2}
          placeholder="비밀번호 앞 2자리"
          type="password"
        />
      </StyledInputWrap>
      {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
    </StyledContainer>
  );
}
