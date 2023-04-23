import { InputContainer, Input, Label } from "../common";

type CardSecurityCodeInputProp = {
  securityCode: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CardSecurityCodeInput = ({ securityCode, onChange }: CardSecurityCodeInputProp) => {
  return (
    <Label>
      보안 코드(CVC/CVV)
      <InputContainer width="84px">
        <Input
          value={securityCode}
          textAlign="center"
          inputMode="numeric"
          width="100%"
          type="password"
          autoComplete="cc-csc"
          minLength={3}
          maxLength={3}
          required
          onChange={onChange}
        />
      </InputContainer>
    </Label>
  );
};

export default CardSecurityCodeInput;
