import classNames from "classnames/bind";
import styles from "./CardExpirationInput.module.scss";
import { STATE_KEY } from '../../utils/constants';
import { isNumberText } from "../../utils/cardInputValidation";

const cx = classNames.bind(styles);

const CardExpirationInput = ({ inputWidth = "100%", labelText, className, monthPlaceholder, yearPlaceholder, cardInputState, setCardInputState }) => {
  const onCardExpirationInputChange = (event) => {
    const { value, name } = event.target;
    
    if (!isNumberText(value)) {
      event.target.value = event.target.value.slice(0, -1);
      return;
    }

    setCardInputState(state => ({
      ...state,
      [STATE_KEY.CARD_EXPIRATION]: {
        ...state[STATE_KEY.CARD_EXPIRATION],
        [name]: value
      }
    }))
  };

  return (
    <div className={`${cx("card-expiration-input")} ${className}`}>
      {!!labelText?.length && (
        <label className={cx("card-expiration-input__label")} name={labelText}>
          {labelText}
        </label>
      )}
      <div className={cx("card-expiration-input__input-wrapper")} style={{width: inputWidth}}>
        <input
          name={STATE_KEY.EXPIRATION_MONTH}
          type="text"
          className={cx("card-expiration-input__input")}
          maxLength={2}
          onChange={onCardExpirationInputChange}
          placeholder={monthPlaceholder}
          required
        />
        <span className={cx("card-expiration-input__input-separator")}>/</span>
        <input
          name={STATE_KEY.EXPIRATION_YEAR}
          type="text"
          className={cx("card-expiration-input__input")}
          maxLength={2}
          onChange={onCardExpirationInputChange}
          placeholder={yearPlaceholder}
          required
        />
      </div>
    </div>
  );
};

export default CardExpirationInput;
