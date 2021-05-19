import { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./CardInputSection.module.scss";

import useCardNumber from "../../hooks/useCardNumber";
import useCardCompany from "../../hooks/useCardCompany";

import { CARD_INPUT } from "../../constants";
import { isAllTextFilledInObject } from "../../utils/cardInputValidation";
import { getCardCompany } from "../../utils/cardCompany";

import CardNumberInput from "../../containers/CardNumberInput/CardNumberInput";
import CardExpirationInput from "../../containers/CardExpirationInput/CardExpirationInput";
import CardOwnerInput from "../../containers/CardOwnerInput/CardOwnerInput";
import CardCVCInput from "../../containers/CardCVCInput/CardCVCInput";
import CardPasswordInput from "../../containers/CardPasswordInput/CardPasswordInput";

const cx = classNames.bind(styles);

const CardInputSection = ({ showCardCompanySelectSection }) => {
  const { cardNumberState } = useCardNumber();
  const { setCardCompanyState } = useCardCompany();

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
      <CardNumberInput className={cx("card-input-container__number")} />
      <CardExpirationInput className={cx("card-input-container__expiration")} />
      <CardOwnerInput className={cx("card-input-container__owner")} />
      <CardCVCInput className={cx("card-input-container__cvc")} />
      <CardPasswordInput className={cx("card-input-container__password")} />
    </form>
  );
};

export default CardInputSection;
