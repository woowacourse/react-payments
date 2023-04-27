import { isNumeric } from "../../validator/Validator";
import { InputContainer, Input, Label } from "../common";

type CardSecurityCodeInputProp = {
  securityCode: string;
  setSecurityCode: (value: string) => void;
};

const CardSecurityCodeInput = ({ securityCode, setSecurityCode }: CardSecurityCodeInputProp) => {
  const onChangeSecurityCodeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (!isNumeric(value)) return;

    setSecurityCode(value);
  };

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
          onChange={onChangeSecurityCodeHandler}
        />
      </InputContainer>
    </Label>
  );
};

export default CardSecurityCodeInput;
