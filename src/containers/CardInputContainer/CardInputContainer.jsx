import { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./CardInputContainer.module.scss";

import useCardNumber from "../../hooks/cardNumberHook";
import useCardCompany from "../../hooks/cardCompanyHook";
import useCardCVC from "../../hooks/cardCVCHook";
import useCardExpiration from "../../hooks/cardExpirationHook";
import useCardOwner from "../../hooks/cardOwnerHook";
import useCardPassword from "../../hooks/cardPasswordHook";

import { INPUT_LABEL_TEXT, CARD_INPUT } from "../../constants";

import SeperatedInputList from "../../components/Input/SeperatedInputList/SeperatedInputList";
import GuideInput from "../../components/Input/GuideInput/GuideInput";
import TextLimitInput from "../../components/Input/TextLimitInput/TextLimitInput";
import InputBoxList from "../../components/Input/InputBoxList/InputBoxList";
import { isAllNumberTextLengthCorrect } from "../../utils/cardInputValidation";
import { getCardCompany } from "../../utils/cardCompany";

const cx = classNames.bind(styles);

const CardInputContainer = ({ cardState, setCardStateByKey, showCardCompanySelectContainer }) => {
  const cardNumberHook = useCardNumber(cardState, setCardStateByKey);
  const cardExpirationHook = useCardExpiration(cardState, setCardStateByKey);
  const cardOwnerHook = useCardOwner(cardState, setCardStateByKey);
  const cardCompanyHook = useCardCompany(cardState, setCardStateByKey);
  const cardCVCHook = useCardCVC(cardState, setCardStateByKey);
  const cardPasswordHook = useCardPassword(cardState, setCardStateByKey);

  useEffect(() => {
    if (!isAllNumberTextLengthCorrect(cardNumberHook.cardNumberState, CARD_INPUT.CARD_NUMBER_TEXT_LENGTH)) {
      return;
    }

    const newCardCompany = getCardCompany(Object.values(cardNumberHook.cardNumberState).join(" "));
    if (!newCardCompany) {
      showCardCompanySelectContainer();
      return;
    }

    newCardCompany && cardCompanyHook.setCardCompanyState(newCardCompany);
  }, [cardNumberHook.cardNumberState]);

  return (
    <form className={cx("card-input-container")}>
      <SeperatedInputList
        className={cx("card-input-container__number")}
        labelText={INPUT_LABEL_TEXT.CARD_NUMBER}
        onInputChange={cardNumberHook.onCardNumberInputChange}
        inputNames={Object.keys(cardNumberHook.cardNumberState)}
        seperator={"-"}
        passwordInputCount={2}
      />
      <SeperatedInputList
        className={cx("card-input-container__expiration")}
        labelText={INPUT_LABEL_TEXT.CARD_EXPIRATION}
        onInputChange={cardExpirationHook.onCardExpirationInputChange}
        inputNames={Object.keys(cardExpirationHook.cardExpirationState)}
        seperator={"/"}
      />
      <TextLimitInput
        className={cx("card-input-container__owner")}
        labelText={INPUT_LABEL_TEXT.CARD_OWNER}
        placeholder={CARD_INPUT.OWNER_PLACEHOLDER}
        lengthLimit={CARD_INPUT.OWNER_NAME_LENGTH_LIMIT}
        textLength={cardOwnerHook.cardOwnerState.length}
        onInputChange={cardOwnerHook.onCardOwnerInputChange}
      />
      <GuideInput
        className={cx("card-input-container__cvc")}
        labelText={INPUT_LABEL_TEXT.CARD_CVC}
        onInputChange={cardCVCHook.onCardCVCInputChange}
      />
      <InputBoxList
        className={cx("card-input-container__password")}
        labelText={INPUT_LABEL_TEXT.CARD_PASSWORD}
        inputCount={CARD_INPUT.CARD_PASSWORD_INPUT_COUNT}
        dotCount={CARD_INPUT.CARD_PASSWORD_DOT_COUNT}
        onInputChange={cardPasswordHook.onCardPasswordInputChange}
      />
    </form>
  );
};

export default CardInputContainer;
