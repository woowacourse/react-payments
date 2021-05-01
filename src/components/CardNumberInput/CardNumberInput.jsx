import { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./CardNumberInput.module.scss";
import { STATE_KEY, CARD_INPUT } from '../../constants';
import { getCardCompany } from '../../utils/cardCompany';
import { isAllNumberTextLengthCorrect } from "../../utils/cardInputValidation";

const cx = classNames.bind(styles);

const CardNumberInput = ({ labelText, className, cardInputState, setCardInputState, showCardCompanySelectContainer}) => {
  const onCardNumberInputChange = (event) => {
    const { value, name } = event.target;
    
    if (Number.isNaN(Number(value))) {
      event.target.value = event.target.value.slice(0, -1);
      return;
    }

    setCardInputState(state => ({
      ...state,
      [STATE_KEY.CARD_NUMBER]: {
        ...state[STATE_KEY.CARD_NUMBER],
        [name]: value
      }
    }));
  };

  useEffect(() => {
    if (isAllNumberTextLengthCorrect(cardInputState[STATE_KEY.CARD_NUMBER], CARD_INPUT.CARD_NUMBER_TEXT_LENGTH)) {
      const newCardCompany = getCardCompany(Object.values(cardInputState[STATE_KEY.CARD_NUMBER]).join(" "));
      if (!newCardCompany) {
        showCardCompanySelectContainer();
      }

      newCardCompany && setCardInputState(state => ({
        ...state,
        [STATE_KEY.CARD_COMPANY]: newCardCompany
      }));
    }
  }, [cardInputState[STATE_KEY.CARD_NUMBER]]);

  return (
    <div className={`${cx("card-number-input")} ${className}`}>
      {!!labelText?.length && (
        <label className={cx("card-number-input__label")} name={labelText}>
          {labelText}
        </label>
      )}
      <div className={cx("card-number-input__input-wrapper")}>
        <input
          name={STATE_KEY.FIRST_CARD_NUMBER}
          type="text"
          className={cx("card-number-input__input")}
          maxLength={4}
          onChange={onCardNumberInputChange}
          required
        />
        <span className={cx("card-number-input__input-separator")}></span>
        <input
          name={STATE_KEY.SECOND_CARD_NUMBER}
          type="text"
          className={cx("card-number-input__input")}
          maxLength={4}
          onChange={onCardNumberInputChange}
          required
        />
        <span className={cx("card-number-input__input-separator")}></span>
        <input
          name={STATE_KEY.THIRD_CARD_NUMBER}
          type="password"
          className={cx("card-number-input__input", "card-number-input__input--dot")}
          maxLength={4}
          onChange={onCardNumberInputChange}
          required
        />
        <span className={cx("card-number-input__input-separator")}></span>
        <input
          name={STATE_KEY.FOURTH_CARD_NUMBER}
          type="password"
          className={cx("card-number-input__input", "card-number-input__input--dot")}
          maxLength={4}
          onChange={onCardNumberInputChange}
          required
        />
      </div>
    </div>
  );
};

export default CardNumberInput;
