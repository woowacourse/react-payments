import styled from "styled-components";
import { InputContainer, Input, Label, RequiredInputIcon } from "../common";
import requiredInputIcon from "../../assets/requiredInputIcon.png";

import { CardPassword, CardPasswordKey } from "../../types";
import { isNumeric } from "../../validator/Validator";

type CardPasswordInputProps = {
  password: CardPassword;
  onChange: (pw: string, targetDigit: CardPasswordKey) => void;
};

const CardPasswordInput = ({ password, onChange }: CardPasswordInputProps) => {
  const { first, second } = password;

  const handleCardPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pw = e.target.value;
    const targetDigit = e.target.name;

    if (!isNumeric(pw)) return;
    if (!isCardPasswordKeyType(targetDigit)) return;

    onChange(pw, targetDigit);
  };

  const isCardPasswordKeyType = (targetDigit: string): targetDigit is CardPasswordKey => {
    return targetDigit in password;
  };

  return (
    <Label>
      카드 비밀번호
      <RequiredInputIcon src={requiredInputIcon} />
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
            onChange={handleCardPassword}
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
            onChange={handleCardPassword}
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
