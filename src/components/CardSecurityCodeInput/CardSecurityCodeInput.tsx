import { isNumeric } from "../../validator/Validator";
import { InputContainer, Input, Label, RequiredInputIcon } from "../common";
import requiredInputIcon from "../../assets/requiredInputIcon.png";

type CardSecurityCodeInputProp = {
  securityCode: string;
  onChange: (code: string) => void;
};

const CardSecurityCodeInput = ({ securityCode, onChange }: CardSecurityCodeInputProp) => {
  const handleSecurityCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const code = e.target.value;

    if (!isNumeric(code)) return;

    onChange(code);
  };

  return (
    <Label>
      보안 코드(CVC/CVV)
      <RequiredInputIcon src={requiredInputIcon} />
      <InputContainer width="84px">
        <Input
          value={securityCode}
          textAlign="center"
          inputMode="numeric"
          width="100%"
          type="password"
          minLength={3}
          maxLength={3}
          required
          onChange={handleSecurityCode}
        />
      </InputContainer>
    </Label>
  );
};

export default CardSecurityCodeInput;
