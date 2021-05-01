import { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./CardNumberInput.module.scss";
import { STATE_KEY } from '../../constants';
import { getCardCompany } from '../../utils/cardCompany';

const cx = classNames.bind(styles);

const CardNumberInput = ({ labelText, className, appState, setAppState, showCardCompanySelectContainer}) => {
  const onCardNumberInputChange = (event) => {
    const { value, name } = event.target;
    
    if (Number.isNaN(Number(value))) {
      event.target.value = event.target.value.slice(0, -1);
      return;
    }

    setAppState(state => ({
      ...state,
      [STATE_KEY.CARD_NUMBER]: {
        ...state[STATE_KEY.CARD_NUMBER],
        [name]: value
      }
    }));
  };

  useEffect(() => {
    if (Object.values(appState[STATE_KEY.CARD_NUMBER]).every((value) => value.length === 4)) {
      const newCardCompany = getCardCompany(Object.values(appState[STATE_KEY.CARD_NUMBER]).join(" "));
      if (!newCardCompany) {
        showCardCompanySelectContainer();
      }

      newCardCompany && setAppState(state => ({
        ...state,
        [STATE_KEY.CARD_COMPANY]: newCardCompany
      }));
    }
  }, [appState[STATE_KEY.CARD_NUMBER]]);

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
