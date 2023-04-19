import { Container } from "./CardNumberInput";
import { Input } from "./common/Input";
import { InputLabel } from "./common/InputLabel";
import styled from "styled-components";

interface PasswordInputProps {
  setPassword: (value: number[]) => void;
}

const passwordInfo = {
  label: "password",
  width: "43px",
  placeholder: "",
  textPosition: "center",
};

export const PasswordInput = ({ setPassword }: PasswordInputProps) => {
  const handleInput = (e: any) => {
    if (e.target.value.length > 1 || !/\d$/.test(e.target.value)) {
      e.target.value = e.target.value.slice(0, -1);
      return;
    }

    e.target.value = e.target.value.replaceAll(/\d/g, "●");
    setPassword(e.target.value);
  };

  return (
    <Container>
      <InputLabel text="비밀번호" name="password" />
      <Row>
        <Input {...passwordInfo} handleInput={handleInput} />
        <Input {...passwordInfo} handleInput={handleInput} />
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
