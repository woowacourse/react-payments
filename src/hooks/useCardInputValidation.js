import { useCallback, useContext } from "react";
import { CARD_INPUT, STATE_KEY } from "../constants";
import { InputValidationContext } from "../contexts/appContext";
import { isCardCompany } from "../utils/cardCompany";
import { isCorrectCardExpiration, isCorrectCardPassword, isCorrectCardNumber } from "../utils/cardInputValidation";

const useCardInputValidation = () => {
  const { validationMessage, setValidationMessage } = useContext(InputValidationContext);

  const setCardInputValidationMessage = useCallback(
    (cardInfo) => {
      const newValidationMessage = {};

      if (!isCardCompany(cardInfo[STATE_KEY.CARD_COMPANY])) {
        newValidationMessage[STATE_KEY.CARD_COMPANY] = "카드사를 등록해주십시오";
      }
      if (!isCorrectCardNumber(cardInfo[STATE_KEY.CARD_NUMBER])) {
        newValidationMessage[STATE_KEY.CARD_NUMBER] = "카드번호가 올바르게 입력되지 않았습니다";
      }
      if (!isCorrectCardExpiration(cardInfo[STATE_KEY.CARD_EXPIRATION])) {
        newValidationMessage[STATE_KEY.CARD_EXPIRATION] = "카드 유효기간이 올바르게 입력되지 않았습니다";
      }
      if (cardInfo[STATE_KEY.CARD_OWNER].length === 0) {
        newValidationMessage[STATE_KEY.CARD_OWNER] = "카드 소유자의 이름을 적어주십시오";
      }
      if (cardInfo[STATE_KEY.CARD_CVC].length !== CARD_INPUT.CARD_CVC_TEXT_LENGTH) {
        newValidationMessage[STATE_KEY.CARD_CVC] = "카드 CVC 번호를 올바르게 입력해주십시오";
      }
      if (!isCorrectCardPassword(cardInfo[STATE_KEY.CARD_PASSWORD])) {
        newValidationMessage[STATE_KEY.CARD_PASSWORD] = "카드 비밀번호를 올바르게 입력해주십시오";
      }

      setValidationMessage(newValidationMessage);
    },
    [setValidationMessage]
  );

  return {
    validationMessage,
    setCardInputValidationMessage,
  };
};

export default useCardInputValidation;
