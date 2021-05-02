import { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./SeperatedInputList.module.scss";
import { STATE_KEY, CARD_INPUT } from "../../constants";
import { getCardCompany } from "../../utils/cardCompany";
import { isAllNumberTextLengthCorrect } from "../../utils/cardInputValidation";

const cx = classNames.bind(styles);

const SeperatedInputList = ({ labelText, className, onEachInputChange, maxInputLength = 4 }) => {
  useEffect(() => {
    if (isAllNumberTextLengthCorrect(cardInputState[STATE_KEY.CARD_NUMBER], CARD_INPUT.CARD_NUMBER_TEXT_LENGTH)) {
      const newCardCompany = getCardCompany(Object.values(cardInputState[STATE_KEY.CARD_NUMBER]).join(" "));
      if (!newCardCompany) {
        showCardCompanySelectContainer();
      }

      newCardCompany &&
        setCardStateByKey((state) => ({
          ...state,
          [STATE_KEY.CARD_COMPANY]: newCardCompany,
        }));
    }
  }, [cardInputState[STATE_KEY.CARD_NUMBER]]);

  return (
    <div className={`${cx("seperated-input-list")} ${className}`}>
      {!!labelText?.length && (
        <label className={cx("seperated-input-list__label")} name={labelText}>
          {labelText}
        </label>
      )}
      <div className={cx("seperated-input-list__input-wrapper")}>
        <input
          name={STATE_KEY.FIRST_CARD_NUMBER}
          type="text"
          className={cx("seperated-input-list__input")}
          maxLength={maxInputLength}
          onChange={onEachInputChange}
          required
        />
        <span className={cx("seperated-input-list__input-separator")}></span>
        <input
          name={STATE_KEY.SECOND_CARD_NUMBER}
          type="text"
          className={cx("seperated-input-list__input")}
          maxLength={maxInputLength}
          onChange={onEachInputChange}
          required
        />
        <span className={cx("seperated-input-list__input-separator")}></span>
        <input
          name={STATE_KEY.THIRD_CARD_NUMBER}
          type="password"
          className={cx("seperated-input-list__input", "seperated-input-list__input--dot")}
          maxLength={maxInputLength}
          onChange={onEachInputChange}
          required
        />
        <span className={cx("seperated-input-list__input-separator")}></span>
        <input
          name={STATE_KEY.FOURTH_CARD_NUMBER}
          type="password"
          className={cx("seperated-input-list__input", "seperated-input-list__input--dot")}
          maxLength={maxInputLength}
          onChange={onEachInputChange}
          required
        />
      </div>
    </div>
  );
};

export default SeperatedInputList;
