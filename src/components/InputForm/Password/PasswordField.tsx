import { useMemo } from "react";
import NumberInput from "../../@common/NumberInput/NumberInput";
import {
  NumberInputField,
  Label,
  NumberInputContainer,
  ErrorText,
} from "../styles/CardField.styles";
import { CardInfo } from "../../../hooks/useCardInfo";
import { validateSegmentLength } from "../validation";

interface PasswordFieldProps {
  cardInfo: CardInfo;
  handleCardInfo: (
    key: keyof PasswordFieldProps["cardInfo"],
    value: string
  ) => void;
  maxLength: number;
}

function PasswordField({
  cardInfo,
  handleCardInfo,
  maxLength,
}: PasswordFieldProps) {
  const passwordValidation = useMemo(
    () => validateSegmentLength(cardInfo.password, maxLength),
    [cardInfo.password, maxLength]
  );

  return (
    <NumberInputField>
      <Label htmlFor="password">비밀번호 앞 2자리</Label>
      <NumberInputContainer>
        <NumberInput
          autoFocus
          type="password"
          id="password"
          value={cardInfo.password}
          setValue={(value) => handleCardInfo("password", value)}
          maxLength={maxLength}
          placeholder="비밀번호를 입력해 주세요."
          isError={!passwordValidation.isValid}
        />
      </NumberInputContainer>
      <ErrorText>{passwordValidation.errorMessage}</ErrorText>
    </NumberInputField>
  );
}
export default PasswordField;
