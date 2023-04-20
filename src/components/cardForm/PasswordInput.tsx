import { Container } from "../common/Container";
import { Input } from "../common/Input";
import { InputLabel } from "../common/InputLabel";
import styled from "styled-components";

const passwordInfo = {
  width: "43px",
  placeholder: "",
  textPosition: "center",
  type: "password",
};

export const PasswordInput = () => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 1 || !/\d$/.test(e.target.value)) {
      e.target.value = e.target.value.slice(0, -1);
      return;
    }
  };

  return (
    <Container>
      <InputLabel text="비밀번호" name="password" />
      <Row>
        <Input
          error={{ isValid: true, errorMessage: "" }}
          {...passwordInfo}
          handleInput={handleInput}
          handleChange={(e) => {}}
          label="password1"
        />
        <Input
          error={{ isValid: true, errorMessage: "" }}
          {...passwordInfo}
          handleInput={handleInput}
          handleChange={(e) => {}}
          label="password2"
        />
        <HiddenPassword>●</HiddenPassword>
        <HiddenPassword>●</HiddenPassword>
      </Row>
    </Container>
  );
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  justify-content: space-between;
`;

const HiddenPassword = styled.div`
  display: flex;
  height: 45px;
  width: 43px;
  align-items: center;
  justify-content: center;

  font-size: 9px;
  font-weight: 500;
`;
