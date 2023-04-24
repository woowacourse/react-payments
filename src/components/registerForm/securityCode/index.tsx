import React, { useState, useContext } from "react";
import ErrorSpan from "src/components/@common/ErrorSpan";
import FormLabel from "src/components/@common/FormLabel";
import Input from "src/components/@common/Input";
import QuestionMark from "src/assets/sequrity_question.svg";
import SecurityIcon from "src/assets/security-icon.svg";
import { ONLY_NUMBER_REGEXP } from "src/utils/regexp";
import { cardInfoContext } from "src/context/CardInfoContext";
import { Styled as S } from "./SecurityCode.styles";
import { NUMBERS } from "src/utils/constant";
import { lengthMatchValidation } from "src/utils/validation";

function SecurityCode() {
  const [cardInput, setCardInput] = useContext(cardInfoContext);
  const [error, setError] = useState(false);

  const codeChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.currentTarget.value;
    if (!ONLY_NUMBER_REGEXP.test(value)) return;

    try {
      lengthMatchValidation(value, NUMBERS.MAX_SECURITY);
      setError(false);
    } catch {
      setError(true);
    } finally {
      if (!setCardInput) return;
      setCardInput((prev) => ({ ...prev, securityCode: value }));
    }
  };

  return (
    <S.SecurityCodeContainer>
      <FormLabel>{"보안 코드(CVC/CVV)"}</FormLabel>
      <S.SecurityInfoContainer>
        <Input
          value={cardInput.securityCode}
          onChange={codeChange}
          maxLength={NUMBERS.MAX_SECURITY}
          type="password"
          placeholder="•••"
          customInputStyle={S.SecurityInput}
        />
        <img src={QuestionMark} alt="cvc-question-information" />
        {
          <S.CVVInfoContainer>
            <p>
              CVV/CVC 번호는 카드 뒷 면에 있는 3자리 숫자이며 카드 보안을 위한
              번호입니다. 이 번호는 보안 확인 목적으로 사용되며, 온라인 결제에
              주로 사용됩니다.
            </p>
            <img src={SecurityIcon} alt="cvc-information" />
          </S.CVVInfoContainer>
        }
      </S.SecurityInfoContainer>
      {error && <ErrorSpan>보안 코드는 3자리 입니다.</ErrorSpan>}
    </S.SecurityCodeContainer>
  );
}

export default SecurityCode;
