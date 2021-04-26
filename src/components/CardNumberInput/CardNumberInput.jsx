import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./CardNumberInput.module.scss";

const cx = classNames.bind(styles);

const CardNumberInput = ({ labelText, className }) => {
  const [numberInputs, setNumberInput] = useState([[], [], [], []]);

  // const isSeperator = (inputIndex) => {
  //   return !numberInputs.every((numbers, index) => {
  //     if (index < inputIndex) {
  //       return true;
  //     }
  //     return !!numbers.length;
  //   });
  // };

  return (
    <div className={`${cx("card-number-input")} ${className}`}>
      {!!labelText?.length && (
        <label className={cx("card-number-input__label")} name={labelText}>
          {labelText}
        </label>
      )}
      <div className={cx("card-number-input__input-wrapper")}>
        <input type="text" className={cx("card-number-input__input")} maxLength={4}></input>
        <span class={cx("card-number-input__input-seperator")}></span>
        <input type="text" className={cx("card-number-input__input")} maxLength={4}></input>
        <span class={cx("card-number-input__input-seperator")}></span>
        <input
          type="password"
          className={cx("card-number-input__input", "card-number-input__input--dot")}
          maxLength={4}
        ></input>
        <span class={cx("card-number-input__input-seperator")}></span>
        <input
          type="password"
          className={cx("card-number-input__input", "card-number-input__input--dot")}
          maxLength={4}
        ></input>
      </div>
    </div>
  );
};

export default CardNumberInput;
