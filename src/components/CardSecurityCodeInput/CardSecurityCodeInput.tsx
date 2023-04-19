import { InputContainer, Input, Label } from "../common";

type CardSecurityCodeInputProp = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CardSecurityCodeInput = ({ onChange }: CardSecurityCodeInputProp) => {
  return (
    <Label>
      보안 코드(CVC/CVV)
      <InputContainer width="84px">
        <Input textAlign="center" width="100%" type="password" maxLength={3} required onChange={onChange} />
      </InputContainer>
    </Label>
  );
};

export default CardSecurityCodeInput;
