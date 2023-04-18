import { InputContainer, Input, Label } from "../common";

const SecurityCodeInput = () => {
  return (
    <Label>
      보안 코드(CVC/CVV)
      <InputContainer width="84px">
        <Input textAlign="center" width="100%" type="password" maxLength={3} required />
      </InputContainer>
    </Label>
  );
};

export default SecurityCodeInput;
