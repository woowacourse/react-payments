import { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./CardInputSection.module.scss";

import useCardNumber from "../../hooks/useCardNumber";
import useCardCompany from "../../hooks/useCardCompany";
import useCardCVC from "../../hooks/useCardCVC";
import useCardExpiration from "../../hooks/useCardExpiration";
import useCardOwner from "../../hooks/useCardOwner";
import useCardPassword from "../../hooks/useCardPassword";

import { INPUT_LABEL_TEXT, CARD_INPUT } from "../../constants";

import SeperatedInputList from "../../components/Input/SeperatedInputList/SeperatedInputList";
import GuideInput from "../../components/Input/GuideInput/GuideInput";
import TextLimitInput from "../../components/Input/TextLimitInput/TextLimitInput";
import InputBoxList from "../../components/Input/InputBoxList/InputBoxList";

import { isAllTextFilledInObject } from "../../utils/cardInputValidation";
import { getCardCompany } from "../../utils/cardCompany";

const cx = classNames.bind(styles);

const CardInputSection = ({ showCardCompanySelectSection }) => {
  const { cardNumberState, onCardNumberInputChange } = useCardNumber();
  const { cardExpirationState, onCardExpirationInputChange } = useCardExpiration();
  const { cardOwnerState, onCardOwnerInputChange } = useCardOwner();
  const { setCardCompanyState } = useCardCompany();
  const { onCardCVCInputChange } = useCardCVC();
  const { onCardPasswordInputChange } = useCardPassword();

  useEffect(() => {
    if (!isAllTextFilledInObject(cardNumberState, CARD_INPUT.CARD_NUMBER_TEXT_LENGTH)) {
      return;
    }

    const newCardCompany = getCardCompany(Object.values(cardNumberState).join(" "));
    if (!newCardCompany) {
      showCardCompanySelectSection();
      return;
    }

    newCardCompany && setCardCompanyState(newCardCompany);
  }, [cardNumberState]);

  return (
    <form className={cx("card-input-container")}>
      <SeperatedInputList
        className={cx("card-input-container__number")}
        labelText={INPUT_LABEL_TEXT.CARD_NUMBER}
        onInputChange={onCardNumberInputChange}
        inputNames={Object.keys(cardNumberState)}
        seperator={"-"}
        passwordInputCount={2}
      />
      <SeperatedInputList
        className={cx("card-input-container__expiration")}
        labelText={INPUT_LABEL_TEXT.CARD_EXPIRATION}
        onInputChange={onCardExpirationInputChange}
        inputNames={Object.keys(cardExpirationState)}
        placeholder={"MM / YY"}
        seperator={"/"}
        maxInputLength={2}
      />
      <TextLimitInput
        className={cx("card-input-container__owner")}
        labelText={INPUT_LABEL_TEXT.CARD_OWNER}
        placeholder={CARD_INPUT.OWNER_PLACEHOLDER}
        lengthLimit={CARD_INPUT.OWNER_NAME_LENGTH_LIMIT}
        textLength={cardOwnerState.length}
        onInputChange={onCardOwnerInputChange}
      />
      <GuideInput
        className={cx("card-input-container__cvc")}
        labelText={INPUT_LABEL_TEXT.CARD_CVC}
        onInputChange={onCardCVCInputChange}
      />
      <InputBoxList
        className={cx("card-input-container__password")}
        labelText={INPUT_LABEL_TEXT.CARD_PASSWORD}
        inputCount={CARD_INPUT.CARD_PASSWORD_INPUT_COUNT}
        dotCount={CARD_INPUT.CARD_PASSWORD_DOT_COUNT}
        onInputChange={onCardPasswordInputChange}
      />
    </form>
  );
};

export default CardInputSection;
