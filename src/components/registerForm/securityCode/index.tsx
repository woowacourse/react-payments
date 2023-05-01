import React from "react";
import ErrorSpan from "src/components/@common/ErrorSpan";
import FormLabel from "src/components/@common/FormLabel";
import Input from "src/components/@common/Input";
import QuestionMark from "src/assets/sequrity_question.svg";
import SecurityIcon from "src/assets/security-icon.svg";
import { Styled as S } from "./SecurityCode.styles";
import { NUMBERS } from "src/utils/constant";
import { lengthMatchValidation } from "src/utils/validation";
import useCardInfoInput from "src/hooks/useCardInfoInput";

function SecurityCode() {
  const { value, numberInputOnChange, error } = useCardInfoInput<string>({
    contextType: "securityCode",
    validation: (value) => lengthMatchValidation(value, NUMBERS.MAX_SECURITY),
  });

  return (
    <S.SecurityCodeContainer>
      <FormLabel>{"보안 코드(CVC/CVV)"}</FormLabel>
      <S.SecurityInfoContainer>
        <Input
          value={value}
          onChange={numberInputOnChange}
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
            <img src={SecurityIcon} alt=" cvc-information" />
          </S.CVVInfoContainer>
        }
      </S.SecurityInfoContainer>
      {error.isError && <ErrorSpan>{error.message}</ErrorSpan>}
    </S.SecurityCodeContainer>
  );
}

export default SecurityCode;
