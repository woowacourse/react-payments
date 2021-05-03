import classNames from "classnames/bind";
import styles from "./CardExpirationInput.module.scss";
import { STATE_KEY } from "../../constants";

const cx = classNames.bind(styles);

const CardExpirationInput = ({
  inputWidth = "100%",
  labelText,
  className,
  monthPlaceholder,
  yearPlaceholder,
  onInputChange,
}) => {
  return (
    <div className={`${cx("card-expiration-input")} ${className}`}>
      {!!labelText?.length && (
        <label className={cx("card-expiration-input__label")} name={labelText}>
          {labelText}
        </label>
      )}
      <div className={cx("card-expiration-input__input-wrapper")} style={{ width: inputWidth }}>
        <input
          name={STATE_KEY.EXPIRATION_MONTH}
          type="text"
          className={cx("card-expiration-input__input")}
          maxLength={2}
          onChange={onInputChange}
          placeholder={monthPlaceholder}
          required
        />
        <span className={cx("card-expiration-input__input-separator")}>/</span>
        <input
          name={STATE_KEY.EXPIRATION_YEAR}
          type="text"
          className={cx("card-expiration-input__input")}
          maxLength={2}
          onChange={onInputChange}
          placeholder={yearPlaceholder}
          required
        />
      </div>
    </div>
  );
};

export default CardExpirationInput;
