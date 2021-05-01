import classNames from "classnames/bind";
import styles from "./CardInputContainer.module.scss";

import { INPUT_LABEL_TEXT, CARD_INPUT } from "../../constants";

import CardExpirationInput from "../../components/CardExpirationInput/CardExpirationInput";
import CardNumberInput from "../../components/CardNumberInput/CardNumberInput";
import GuideInput from "../../components/Input/GuideInput/GuideInput";
import TextLimitInput from "../../components/Input/TextLimitInput/TextLimitInput";
import InputBoxList from "../../components/InputBoxList/InputBoxList";

const cx = classNames.bind(styles);

const CardInputContainer = ({ appState, setAppState, showCardCompanySelectContainer }) => {
  return (
    <form className={cx("card-input-container")}>
      <CardNumberInput
        inputWidth="100%"
        className={cx("card-input-container__number")}
        labelText={INPUT_LABEL_TEXT.CARD_NUMBER}
        appState={appState}
        setAppState={setAppState}
        showCardCompanySelectContainer={showCardCompanySelectContainer}
      />
      <CardExpirationInput
        inputWidth="137px"
        className={cx("card-input-container__expiration")}
        monthPlaceholder={CARD_INPUT.EXPIRATION_MONTH_PLACEHOLDER}
        yearPlaceholder={CARD_INPUT.EXPIRATION_YEAR_PLACEHOLDER}
        labelText={INPUT_LABEL_TEXT.CARD_EXPIRATION}
        appState={appState}
        setAppState={setAppState}
      />
      <TextLimitInput
        inputWidth="100%"
        className={cx("card-input-container__owner")}
        placeholder={CARD_INPUT.OWNER_PLACEHOLDER}
        lengthLimit={CARD_INPUT.OWNER_NAME_LENGTH_LIMIT}
        labelText={INPUT_LABEL_TEXT.CARD_OWNER}
        appState={appState}
        setAppState={setAppState}
      />
      <GuideInput
        inputWidth="84px"
        className={cx("card-input-container__cvc")}
        labelText={INPUT_LABEL_TEXT.CARD_CVC}
        setAppState={setAppState}
      />
      <InputBoxList
        numbers={[1, 2]}
        dotCount={2}
        className={cx("card-input-container__password")}
        labelText={INPUT_LABEL_TEXT.CARD_PASSWORD}
        appState={appState}
        setAppState={setAppState}
      />
    </form>
  );
};

export default CardInputContainer;
