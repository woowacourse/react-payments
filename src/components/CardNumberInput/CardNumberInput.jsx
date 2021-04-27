import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./CardNumberInput.module.scss";
import { getCardCompany } from "../../utils/cardCompany"

const cx = classNames.bind(styles);

const CardNumberInput = ({ labelText, className, setCardState, showCardCompanySelectContainer, cardCompany}) => {
  const [cardNumberInput, setCardNumberInput] = useState({
    firstCardNumberInput: "",
    secondCardNumberInput: "",
    thirdCardNumberInput: "",
    fourthCardNumberInput: "",
  });

  const onCardNumberInputBlur = (event) => {
    const { value, name } = event.target;

    setCardNumberInput((state) => ({
      ...state,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (Object.keys(cardNumberInput).every((key) => cardNumberInput[key].length === 4)) {
      const newCardCompany = getCardCompany(Object.keys(cardNumberInput).map((key) => cardNumberInput[key]).join(" "))      
      showCardCompanySelectContainer();
      
      if (newCardCompany) {
        setCardState("cardCompany", newCardCompany);
      }

      setCardState("cardNumber", {
        firstCardNumber: cardNumberInput.firstCardNumberInput,
        secondCardNumber: cardNumberInput.secondCardNumberInput,
        thirdCardNumber: cardNumberInput.thirdCardNumberInput,
        fourthCardNumber: cardNumberInput.fourthCardNumberInput,
      });
    }
  }, [cardNumberInput]);

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
          onBlur={onCardNumberInputBlur}
          required
        />
        <span className={cx("card-number-input__input-separator")}></span>
        <input
          name={"secondCardNumberInput"}
          type="text"
          className={cx("card-number-input__input")}
          maxLength={4}
          onBlur={onCardNumberInputBlur}
          required
        />
        <span className={cx("card-number-input__input-separator")}></span>
        <input
          name={"thirdCardNumberInput"}
          type="password"
          className={cx("card-number-input__input", "card-number-input__input--dot")}
          maxLength={4}
          onBlur={onCardNumberInputBlur}
          required
        />
        <span className={cx("card-number-input__input-separator")}></span>
        <input
          name={"fourthCardNumberInput"}
          type="password"
          className={cx("card-number-input__input", "card-number-input__input--dot")}
          maxLength={4}
          onBlur={onCardNumberInputBlur}
          required
        />
      </div>
    </div>
  );
};

export default CardNumberInput;
