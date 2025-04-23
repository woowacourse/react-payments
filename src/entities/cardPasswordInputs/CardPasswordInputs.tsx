import { StyledContainer, StyledInputWrap } from "../inputs.css";
import Input from "../../shared/input/Input";

export default function CardPasswordInputs() {
  return (
    <StyledContainer>
      <label htmlFor="">비밀번호 앞 2자리</label>
      <StyledInputWrap>
        <Input
          value={""}
          onChange={(e) => {
            // changeCVCNumber("CVCNumber", e.target.value);
            // CVCError.checkValidation({
            //   length: CVC_NUMBER_LENGTH,
            //   value: e.target.value,
            //   type: "CVCNumber",
            // });
          }}
          isError={false}
          width="100%"
          maxLength={2}
          placeholder="비밀번호 앞 2자리"
          type="password"
        />
      </StyledInputWrap>
      {/* {errorMessage ? (
        <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
      ) : null} */}
    </StyledContainer>
  );
}
