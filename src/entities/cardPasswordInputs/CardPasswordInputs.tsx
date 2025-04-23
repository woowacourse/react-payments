import { StyledContainer, StyledInputWrap } from "../inputs.css";
import Input from "../../shared/input/Input";

type CardPasswordInputsProps = {
  password: {
    values: { password: string };
    changeValues: (type: "password", password: string) => void;
  };
};

export default function CardPasswordInputs({
  password,
}: CardPasswordInputsProps) {
  return (
    <StyledContainer>
      <label htmlFor="">비밀번호 앞 2자리</label>
      <StyledInputWrap>
        <Input
          value={password.values.password}
          onChange={(e) => {
            password.changeValues("password", e.target.value);
          }}
          isError={false}
          width="100%"
          maxLength={2}
          placeholder="비밀번호 앞 2자리"
          type="password"
        />
      </StyledInputWrap>
    </StyledContainer>
  );
}
