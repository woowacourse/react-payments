import styled from "styled-components";
import { InputContainer, Input, Label } from "../common";
import { CardPassword } from "../../types";
import { isNumeric } from "../../validator/Validator";

type CardPasswordInputProps = {
  password: CardPassword;
  setPassword: (value: CardPassword) => void;
};

const CardPasswordInput = ({ password, setPassword }: CardPasswordInputProps) => {
  const { first, second } = password;

  const onChangePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (!isNumeric(value)) return;

    setPassword({ ...password, [name]: value });
  };

  return (
    <Label>
      카드 비밀번호
      <Div>
        <InputContainer width="43px">
          <Input
            name="first"
            value={first}
            textAlign="center"
            inputMode="numeric"
            width="100%"
            type="password"
            maxLength={1}
            required
            onChange={onChangePasswordHandler}
          />
        </InputContainer>
        <InputContainer width="43px">
          <Input
            name="second"
            value={second}
            textAlign="center"
            inputMode="numeric"
            width="100%"
            type="password"
            maxLength={1}
            required
            onChange={onChangePasswordHandler}
          />
        </InputContainer>
        <PasswordIcon>•</PasswordIcon>
        <PasswordIcon>•</PasswordIcon>
      </Div>
    </Label>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
`;

const PasswordIcon = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  background-color: transparent;

  height: 45px;
  width: 43px;

  border: 0;
  border-radius: 7px;
  padding: 0 12px;
  margin-top: 3px;

  font-size: 12px;
  line-height: 21px;
  letter-spacing: 0em;
`;

export default CardPasswordInput;
