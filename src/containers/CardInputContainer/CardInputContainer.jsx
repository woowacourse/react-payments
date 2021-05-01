import classNames from "classnames/bind";
import styles from "./CardInputContainer.module.scss";

import { INPUT_LABEL_TEXT, CARD_INPUT } from "../../constants";

import CardExpirationInput from "../../components/CardExpirationInput/CardExpirationInput";
import CardNumberInput from "../../components/CardNumberInput/CardNumberInput";
import GuideInput from "../../components/Input/GuideInput/GuideInput";
import TextLimitInput from "../../components/Input/TextLimitInput/TextLimitInput";
import InputBoxList from "../../components/InputBoxList/InputBoxList";

const cx = classNames.bind(styles);

const CardInputContainer = ({ cardInputState, setCardInputState, showCardCompanySelectContainer }) => {
  return (
    <form className={cx("card-input-container")}>
      <CardNumberInput
        className={cx("card-input-container__number")}
        inputWidth="100%"
        labelText={INPUT_LABEL_TEXT.CARD_NUMBER}
        cardInputState={cardInputState}
        setCardInputState={setCardInputState}
        showCardCompanySelectContainer={showCardCompanySelectContainer}
      />
      <CardExpirationInput
        className={cx("card-input-container__expiration")}
        inputWidth="137px"
        labelText={INPUT_LABEL_TEXT.CARD_EXPIRATION}
        monthPlaceholder={CARD_INPUT.EXPIRATION_MONTH_PLACEHOLDER}
        yearPlaceholder={CARD_INPUT.EXPIRATION_YEAR_PLACEHOLDER}
        cardInputState={cardInputState}
        setCardInputState={setCardInputState}
      />
      <TextLimitInput
        className={cx("card-input-container__owner")}
        inputWidth="100%"
        labelText={INPUT_LABEL_TEXT.CARD_OWNER}
        placeholder={CARD_INPUT.OWNER_PLACEHOLDER}
        lengthLimit={CARD_INPUT.OWNER_NAME_LENGTH_LIMIT}
        cardInputState={cardInputState}
        setCardInputState={setCardInputState}
      />
      <GuideInput
        className={cx("card-input-container__cvc")}
        inputWidth="84px"
        labelText={INPUT_LABEL_TEXT.CARD_CVC}
        setCardInputState={setCardInputState}
      />
      <InputBoxList
        className={cx("card-input-container__password")}
        labelText={INPUT_LABEL_TEXT.CARD_PASSWORD}
        numbers={[1, 2]}
        dotCount={2}
        cardInputState={cardInputState}
        setCardInputState={setCardInputState}
      />
    </form>
  );
};

export default CardInputContainer;
