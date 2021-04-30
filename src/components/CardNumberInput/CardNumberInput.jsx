import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./CardNumberInput.module.scss";

const cx = classNames.bind(styles);

const CardNumberInput = ({ labelText, className, onCardNumberChange, onCardNumberInputUpdate}) => {
  const [cardNumberInputState, setCardNumberInputState] = useState({
    firstCardNumberInput: "",
    secondCardNumberInput: "",
    thirdCardNumberInput: "",
    fourthCardNumberInput: "",
  });


  const onCardNumberInputChange = (event) => {
    onCardNumberChange(event, setCardNumberInputState);
  };

  useEffect(() => onCardNumberInputUpdate(cardNumberInputState), [cardNumberInputState]);

  return (
    <div className={`${cx("card-number-input")} ${className}`}>
      {!!labelText?.length && (
        <label className={cx("card-number-input__label")} name={labelText}>
          {labelText}
        </label>
      )}
      <div className={cx("card-number-input__input-wrapper")}>
        <input
          name={"firstCardNumberInput"}
          type="text"
          className={cx("card-number-input__input")}
          maxLength={4}
          onChange={onCardNumberInputChange}
          required
        />
        <span className={cx("card-number-input__input-separator")}></span>
        <input
          name={"secondCardNumberInput"}
          type="text"
          className={cx("card-number-input__input")}
          maxLength={4}
          onChange={onCardNumberInputChange}
          required
        />
        <span className={cx("card-number-input__input-separator")}></span>
        <input
          name={"thirdCardNumberInput"}
          type="password"
          className={cx("card-number-input__input", "card-number-input__input--dot")}
          maxLength={4}
          onChange={onCardNumberInputChange}
          required
        />
        <span className={cx("card-number-input__input-separator")}></span>
        <input
          name={"fourthCardNumberInput"}
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
